const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'Login and Signup')));

// Handle requests for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login and Signup', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
