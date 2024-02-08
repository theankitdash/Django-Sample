const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'Login and Signup')));

// MySQL database setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Chiku@4009',
    database: 'tutoring-system',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL database');
        // Create a 'users' table if it doesn't exist
        db.query(`
            CREATE TABLE IF NOT EXISTS users (
                phone BIGINT UNIQUE PRIMARY KEY,
                password VARCHAR(255)
            )
        `, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            }
        });
    }
});

// Dummy authentication endpoint for demonstration
app.post('/auth/:action', async (req, res) => {
    const { action } = req.params;
    const {phone, password } = req.body;

    if (action === 'login') {
        // Retrieve hashed password from the database based on the phone number
        const query = 'SELECT * FROM users WHERE phone = ?';
        db.query(query, [phone], async (err, results) => {
            if (err) {
                console.error('Error retrieving user:', err.message);
                return res.status(500).json({ success: false, message: 'Internal Server Error' });
            }

            if (results.length === 0) {
                return res.status(401).json({ success: false, message: 'Invalid credentials' });
            }

            const hashedPassword = results[0].password;

            // Compare hashed password with the submitted password
            const passwordMatch = await bcrypt.compare(password, hashedPassword);

            if (passwordMatch) {
                res.json({ success: true });
            } else {
                res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
        });
    } else if (action === 'register') {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the 'users' table
        const insertQuery = 'INSERT INTO users (phone, password) VALUES (?, ?)';
        db.query(insertQuery, [phone, hashedPassword], (err) => {
            if (err) {
                console.error('Error inserting user:', err.message);
                return res.status(400).json({ success: false, message: 'Phone number already exists' });
            }

            res.json({ success: true });
        });
    } else {
        res.status(400).json({ success: false, message: 'Invalid action' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login and Signup', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
