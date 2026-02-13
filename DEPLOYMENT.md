# Deployment Guide

## Overview
This Valentine app has two parts:
1. **Frontend**: Static HTML/CSS/JS (Deploy to GitHub Pages)
2. **Backend**: Node.js Express Server (Deploy to Heroku)

## Step 1: Deploy Frontend to GitHub Pages

Your frontend is already ready. It will be automatically deployed to:
`https://sandeepshah03.github.io/valentine/`

## Step 2: Deploy Backend to Heroku

### 2.1 Install Heroku CLI
```bash
# macOS with Homebrew
brew tap heroku/brew && brew install heroku

# Or download from https://devcenter.heroku.com/articles/heroku-cli
```

### 2.2 Login to Heroku
```bash
heroku login
```

### 2.3 Create Heroku App
```bash
cd /Users/sandeepshah/Documents/Valentine
heroku create valentine-messages  # Replace with your desired app name
```

This will give you a URL like: `https://valentine-messages.herokuapp.com`

### 2.4 Deploy to Heroku
```bash
git push heroku main
```

### 2.5 Update config.js
Edit `config.js` and replace `your-heroku-app.herokuapp.com` with your actual Heroku app name:

```javascript
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000' 
    : 'https://valentine-messages.herokuapp.com'; // Your Heroku URL
```

### 2.6 Push Updated Config
```bash
git add config.js
git commit -m "Update Heroku backend URL"
git push origin main
git push heroku main
```

## Step 3: Access Your App

- **Main App**: https://sandeepshah03.github.io/valentine/
- **Admin Dashboard**: https://valentine-messages.herokuapp.com/admin
- **API Endpoint**: https://valentine-messages.herokuapp.com/api/messages

## Alternative: Using Other Services

### Railway.app
1. Go to https://railway.app
2. Connect GitHub repo
3. Deploy and get a public URL
4. Update config.js with the Railway URL

### Render.com
1. Go to https://render.com
2. Create new Web Service
3. Connect GitHub repo
4. Deploy and get a public URL
5. Update config.js with the Render URL

## Troubleshooting

### Messages not saving?
Check the browser console (F12 → Console) for error messages about the API URL.

### CORS errors?
Make sure your `API_BASE_URL` in config.js matches your Heroku/backend server URL.

### Server returning 404?
Ensure the backend server is running on Heroku and your app name is correct.

## Local Testing

```bash
# Terminal 1: Start backend
npm start

# Terminal 2: Open frontend
# Visit http://localhost:3000
```

## Environment Variables (Optional)

For enhanced security, use environment variables in Heroku:

```bash
heroku config:set FRONTEND_URL=https://sandeepshah03.github.io/valentine
```
