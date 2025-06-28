// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');
const cTable = require('console.table');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/question', require('./routes/question'));


// MySQL Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
});

// Root Route – Friendly message
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Elemental AIM API</title>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(-45deg, #1e3c72, #2a5298, #1e3c72, #2a5298);
          background-size: 400% 400%;
          animation: gradientBG 20s ease infinite;
          font-family: 'Titillium Web', sans-serif;
        }

        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          color: #e3f2fd;
          text-align: center;
          max-width: 480px;
        }

        h1 {
          color: #81d4fa;
          font-size: 26px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          color: #cfd8dc;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        li {
          margin: 10px 0;
          font-size: 15px;
        }

        li strong {
          color: #4dd0e1;
          font-weight: 600;
        }

        footer {
          margin-top: 30px;
          font-size: 12px;
          color: #90a4ae;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🌐 Elemental AIM API Server</h1>
        <p>Welcome to the backend service for the Elemental AIM platform.</p>
        <p>Available API endpoints:</p>
        <ul>
          <li><strong>POST</strong> /api/auth/signup</li>
          <li><strong>POST</strong> /api/auth/login</li>
          <li><strong>POST</strong> /api/contact</li>
          <li><strong>POST</strong> /api/question</li>
        </ul>
        <footer>© 2025 Elemental AIM – All rights reserved.</footer>
      </div>
    </body>
    </html>
  `);
});
