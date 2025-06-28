// routes/contact.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { name, email, subject = '', message } = req.body;

  try {
    await pool.promise().execute(
      'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name, email, subject, message]
    );

    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (err) {
    console.error('[CONTACT ERROR]', err);
    res.status(500).json({ message: 'Failed to submit message', error: err.message });
  }
});

module.exports = router;

