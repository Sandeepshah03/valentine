// API Configuration
// Change this to your Heroku backend URL when deploying
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000' 
    : 'https://your-heroku-app.herokuapp.com'; // Replace with your Heroku URL

console.log('API Base URL:', API_BASE_URL);
