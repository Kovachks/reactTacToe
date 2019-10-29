const express = require('express');
const router = express.Router();
const bcrypt = express.Router();
const saltRounds = 10;
var db = require("../../models/");

router.post('/signup', (req, res) => {
    const user = {...req.body}
    db.USER.create({
        user
    })
    console.log(user)
    res.send('it worked!')
});

router.get('/signup', (req, res) => {
    // res.send('it worked');
});

module.exports = router;