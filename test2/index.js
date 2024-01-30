// import express app.
const express = require('express');
// Deals with file paths
const path = require('path');

const logger = require('./middleware/logger')

// Import data: members
const members = require('./Members');


// initialise an express app instance
const app = express();

// Initializing the middleware
app.use(logger);


// simple restAPI to get all members
app.get('/api/members', (req, res) => {
    res.json(members);
});

// Get single member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ mgs: `No member with id ${req.params.id}` })
    }
})

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
