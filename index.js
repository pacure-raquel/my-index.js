const express = require('express');
const app = express();
const port = 3000;

const items = ['Apple', 'Banana', 'Orange'];  // Initial items in the list

app.use(express.json()); // Middleware to parse JSON bodies

// Handle both GET and POST for the /items route
app.get('/items', (req, res) => {
    res.json(items);  // Send current items as JSON
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;  // Get the new item from the request body
    items.push(newItem);  // Add the new item to the list
    res.json(items);  // Return the updated list as JSON
});

// Serve static files from the "public" folder
app.use(express.static('public'));  // Make sure your HTML is inside the "public" folder

// Home route
app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
