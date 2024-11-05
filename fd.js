// Dependencies
const express = require('express');
const multer = require('multer'); 
const tf = require('@tensorflow/tfjs-node'); 
const fetch = require('node-fetch'); 

// Set up Express app
const app = express();
const upload = multer({ limits: { fileSize: 5 * 1024 * 1024 } }); 

let model;

// Load your trained TensorFlow model
(async () => {
  try {
    const model = await tf.loadLayersModel('file://C:/Users/hp/Documents/GitHub/CordovaP1/models/model.json');
    console.log('Model loaded successfully');
  } catch (error) {
    console.error('Error loading model:', error);
  }
})();

app.post('/detect', upload.single('image'), async (req, res) => {
  if (!model) {
    return res.status(500).json({ error: 'Model is not loaded yet' });
  }

  try {
    const imageBuffer = req.file.buffer;
    const image = preprocessImage(imageBuffer);  

    const predictions = model.predict(image).dataSync(); 
    const ingredients = extractIngredients(predictions); 

    const recipes = await fetchRecipes(ingredients); 

    res.json({ ingredients, recipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

// Helper functions

// Preprocess image (resize, normalize, etc.)
function preprocessImage(imageBuffer) {
  let tensor = tf.node.decodeImage(imageBuffer);  
  tensor = tf.image.resizeBilinear(tensor, [224, 224]); 
  tensor = tensor.expandDims(0).div(255.0); 
  return tensor;
}

// Ingredient labels corresponding to model's output indices
const ingredientLabels = ["tomato", "lettuce", "cheese", "chicken", "bread", "carrot"];

// Extract ingredient names from model predictions
function extractIngredients(predictions) {
  const threshold = 0.5; 
  const ingredients = [];
  
  predictions.forEach((probability, index) => {
    if (probability > threshold) {
      ingredients.push(ingredientLabels[index]);
    }
  });
  
  return ingredients;
}

// Fetch recipes from API based on ingredients
async function fetchRecipes(ingredients) {
  const apiKey = 'YOUR_API_KEY'; 
  const ingredientsQuery = ingredients.join(','); 
  
  const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsQuery}&number=5&apiKey=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch recipes');
    
    const recipes = await response.json();
    return recipes.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      usedIngredients: recipe.usedIngredients.map(ing => ing.name),
      missedIngredients: recipe.missedIngredients.map(ing => ing.name)
    }));
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
