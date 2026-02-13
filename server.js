const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'messages.json');

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'https://sandeepshah03.github.io', '*'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.static(__dirname));

// Initialize messages file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// Get all messages
app.get('/api/messages', (req, res) => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        const messages = JSON.parse(data);
        res.json(messages);
    } catch (error) {
        console.error('Error reading messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// Save a new message
app.post('/api/messages', (req, res) => {
    try {
        const { name, message } = req.body;
        
        if (!name || !message) {
            return res.status(400).json({ error: 'Name and message are required' });
        }

        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        let messages = JSON.parse(data);

        const newEntry = {
            id: Date.now(),
            name: name.trim(),
            message: message.trim(),
            timestamp: new Date().toISOString()
        };

        messages.push(newEntry);
        fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
        
        console.log('Message saved successfully:', newEntry);
        res.json({ success: true, data: newEntry });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Failed to save message: ' + error.message });
    }
});

// Get admin dashboard
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Admin Dashboard: http://localhost:${PORT}/admin`);
});
