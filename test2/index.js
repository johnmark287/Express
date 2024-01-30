// import express app.
const express = require('express');
// Deals with file paths
const path = require('path');

const logger = require('./middleware/logger');
const exp = require('constants');


// initialise an express app instance
const app = express();

// Initializing the middleware
app.use(logger);

// Body parser middleware
app.use(express.json());

// Handle form submission
app.use(express.urlencoded({ extended: false }));


// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes

app.use('/api/members', require('./routes/api/members'));

// Create routes
// app.get('/', (req, res) => {
//     // access
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// port to run on when live
const PORT = process.env.PORT || 5000;
// running on this port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
