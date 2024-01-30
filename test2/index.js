// import express app.
const express = require('express');
// Deals with file paths
const path = require('path');

const moment = require('moment')

// Import data: members
const members = require('./Members');


// initialise an express app instance
const app = express();

// Middleware function 
const logger = (req, res, next) => {
    // Getss the whole url tapped and date
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

// Initializing the middleware
app.use(logger);


// simple restAPI to get all members
app.get('/api/members', (req, res) => {
    res.json(members);
});

// Set up static folder
app.use(express.static(path.join(__dirname, 'public')))

// Create routes
// app.get('/', (req, res) => {
//     // access
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// port to run on when live
const PORT = process.env.PORT || 5000;
// running on this port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
