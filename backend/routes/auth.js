// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();

// const JWT_SECRET = 'your_jwt_secret'; // Replace with an environment variable in production

// router.post('/register', (req, res) => {
//     const { name, email, password } = req.body;

//     User.findByEmail(email, (err, results) => {
//         if (err) return res.status(500).json({ error: 'Database error' });
//         if (results.length > 0) return res.status(400).json({ error: 'Email already exists' });

//         User.create(name, email, password, (err, results) => {
//             if (err) return res.status(500).json({ error: 'Database error' });
//             res.status(201).json({ message: 'User created successfully' });
//         });
//     });
// });

// router.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     User.findByEmail(email, (err, results) => {
//         if (err) return res.status(500).json({ error: 'Database error' });
//         if (results.length === 0) return res.status(400).json({ error: 'Invalid credentials' });

//         const user = results[0];

//         bcrypt.compare(password, user.password, (err, match) => {
//             if (err) return res.status(500).json({ error: 'Error comparing passwords' });
//             if (!match) return res.status(400).json({ error: 'Invalid credentials' });

//             const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
//             res.json({ token });
//         });
//     });
// });

// module.exports = router;
