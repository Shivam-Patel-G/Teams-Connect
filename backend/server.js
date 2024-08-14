const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json())

app.use(cors());


// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'teamsconnect'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Signup route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
console.log(req.body)
    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to hash password' });
        }

        // Insert user into database
        db.query('INSERT INTO login (name, email, password) VALUES (?, ?, ?)', [name, email, hash], (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ error: 'Failed to register user' });
                
            }
            res.status(200).json({ message: 'User registered successfully' });
        });
    });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user in database
    db.query('SELECT * FROM login WHERE email = ?', [email], (err, results) => {
        if (err || results.length === 0) {
            
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = results[0];
        console.log(user)

        // Compare password with hashed password in database
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
               
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            res.status(200).json({ message: 'Login successful' });
        });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
