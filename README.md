# 💘 Valentine's Day Special

A fun and interactive Valentine's Day web application where users can enter their names, answer a playful question, and leave heartfelt messages that are stored in a backend database.

## Features

- 🎨 Beautiful, responsive UI with animated hearts
- 🎯 Interactive "Will you be my Valentine?" question with a mischievous "No" button
- 💌 Message input form to capture Valentine's messages
- 📊 Admin dashboard to view all submitted messages
- 💾 Backend API to store and retrieve messages
- 🔄 Real-time message display with auto-refresh

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sandeepshah03/valentine.git
cd valentine
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The application will run on `http://localhost:3000`

### Running in Development Mode

With auto-reload on file changes:
```bash
npm run dev
```

## Access Points

- **Frontend**: `http://localhost:3000` - The main Valentine's application
- **Admin Dashboard**: `http://localhost:3000/admin` - View all submitted messages and names

## File Structure

```
valentine/
├── index.html           # Main Valentine's application
├── valentine.css        # Styling for the frontend
├── server.js           # Express backend server
├── admin.html          # Admin dashboard for viewing messages
├── package.json        # Dependencies and scripts
├── messages.json       # Stored messages (auto-created)
└── README.md           # This file
```

## API Endpoints

### GET `/api/messages`
Retrieves all stored Valentine's messages.

**Response:**
```json
[
  {
    "id": 1708019400000,
    "name": "John",
    "message": "You make my heart happy",
    "timestamp": "2024-02-14T10:30:00.000Z"
  }
]
```

### POST `/api/messages`
Saves a new Valentine's message.

**Request Body:**
```json
{
  "name": "John",
  "message": "You make my heart happy"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1708019400000,
    "name": "John",
    "message": "You make my heart happy",
    "timestamp": "2024-02-14T10:30:00.000Z"
  }
}
```

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Data Storage**: JSON file system
- **Styling**: Responsive CSS with gradients and animations

## How It Works

1. User enters their name on the initial screen
2. They're presented with an interactive Valentine's question
3. Clicking "Yes" opens a message input form
4. They write and submit their Valentine's message
5. The message is saved to the backend database
6. A celebration modal appears
7. All messages can be viewed in the admin dashboard with real-time updates

## License

ISC

Made with ❤️
