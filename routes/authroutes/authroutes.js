const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
var db = require("../../models/");

router.post('/signup', (req, res) => {
    const user = {...req.body}

    bcrypt.hash(user.password, saltRounds, (err, hash) => {
        db.User.create({
            ...user,
            password: hash
        }).then(data => {
            if (data) {
                res.send('successful account creation')
            }
        }).catch(err => {
            console.log(err.errors[0].message)
            let errArr = err.errors.map(err => err.message)
            res.send(errArr)
        });
    });
});

router.get('/signup', (req, res) => {
    // res.send('it worked');
});

module.exports = router;