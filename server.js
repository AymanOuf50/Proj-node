require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());  

app.post('/detect-object', async (req, res) => {
    const imageUrl = req.body.imageUrl;  

    console.log('Request Body:', req.body); 

    if (!imageUrl) {
        return res.status(400).json({ error: 'Image URL is required' });
    }

    try {
        // Log the image URL to verify
        console.log('Received image URL:', imageUrl);

        // Example: Send a request to an external API with the image URL
        const response = await axios.post(process.env.API_BASE_URL + '/detect_objecte', {
            image: imageUrl  // Ensure the API expects this format
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        // Send the response from the external API back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error detecting objects:', error.message);
        res.status(500).json({ error: 'Error processing image URL' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
