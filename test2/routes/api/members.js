const uuid = require('uuid');
const express = require('express');
const router = express.Router();
// Import data: members
const members = require('../../Members');

// simple restAPI to get all members
router.get('/', (req, res) => {
    res.json(members);
});

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ mgs: `No member with id ${req.params.id}` })
    }
})

// Create member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active',

    }
    // checks if email and/or name were input by user
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and an email.' })
    }

    members.push(newMember);
    res.json(members);
});

// Update a member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        const updateMember = req.body;
        // loop through the database
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                // If email or name is updated else remains the same
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;

                res.json({ msg: 'Member updated', member })
            }
        })
    } else {
        res.status(400).json({ mgs: `No member with id ${req.params.id}` })
    }
})

// Delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json({
        msg: "Member deleted.",
        members: members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ mgs: `No member with id ${req.params.id}` })
    }
})

module.exports = router;
