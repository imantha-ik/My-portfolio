const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST: /api/question
router.post('/', async (req, res) => {
  const { user_email, subject, question } = req.body;

  if (!user_email || !subject || !question) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    await pool.promise().execute(
      'INSERT INTO questions (user_email, subject, question) VALUES (?, ?, ?)',
      [user_email, subject, question]
    );

    res.status(201).json({ message: 'Question submitted successfully!' });
  } catch (err) {
    console.error('[QUESTION ERROR]', err);
    res.status(500).json({ message: 'Failed to submit question', error: err.message });
  }
});

module.exports = router;



