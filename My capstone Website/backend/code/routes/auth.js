const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');

// SIGNUP
router.post('/signup', async (req, res) => {
  const { fullName, email, occupation, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.promise().execute(
      'INSERT INTO user (full_name, email, occupation, password) VALUES (?, ?, ?, ?)',
      [fullName, email, occupation, hashedPassword]
    );

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('[SIGNUP ERROR]', err);
    res.status(500).json({
      message: 'Signup failed',
      error: err.sqlMessage || err.message,
    });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.promise().execute(
      'SELECT * FROM user WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }
    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
  await pool.promise().execute(
      'INSERT INTO login_users (email, login_time) VALUES (?, NOW())',
      [email]
    );

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.full_name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('[LOGIN ERROR]', err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});
module.exports = router;



