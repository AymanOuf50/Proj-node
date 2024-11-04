// detectObject.js

require('dotenv').config();
const axios = require('axios');

const detectObject = async (imageData) => {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/detect_objecte`, {
            headers: { 'Content-Type': 'application/json' },
            data: { image: imageData }  
        });
        console.log('Detection Response:', response.data);
    } catch (error) {
        console.error('Error detecting objects:', error.response ? error.response.data : error.message);
    }
};

// Test the function
const imageData = 'base64_image_data_here';  
detectObject(imageData);
