const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form submissions

// Serve static files from the "public" directory
app.use(express.static('public'));

const items = ['Apple', 'Banana', 'Orange'];

// API route to get items
app.get('/items', (req, res) => {
    res.json(items);
});

// API route to add items (e.g., via POST request)
app.post('/items', (req, res) => {
    const newItem = req.body.item; // Get the item from the request body
    if (newItem) {
        items.push(newItem); // Add the new item to the list
    }
    res.json(items); // Respond with the updated list
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Additional routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});