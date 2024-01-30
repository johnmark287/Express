const express = require('express');
const router = express.Router();

// simple restAPI to get all members
router.get('/api/members', (req, res) => {
    res.json(members);
});

// Get single member
router.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ mgs: `No member with id ${req.params.id}` })
    }
})
