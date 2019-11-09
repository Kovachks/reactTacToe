const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
var db = require("../../models/");

router.post('/signup', (req, res) => {
    const user = {...req.body}
    console.log(user)

    bcrypt.hash(user.password, saltRounds, (err, hash) => {
        db.User.create({
            ...user,
            password: hash
        }).then(data => {
            console.log(data.dataValues);
            if (data) {
                res.send(data.dataValues)
            }
        }).catch(err => {
            console.log(err)
            const errArr = [];
            if (err.errors[0].message === 'userName must be unique') {
                errArr.push(`An account already exists for username ${err.errors[0].value}`)
            };

            if (err.errors[0].message === 'email must be unique') {
                errArr.push(`An account already exists for email account ${err.errors[0].value}`)
            }

            res.status(500).send({errArr});
        });
    });
});

router.get('/signup', (req, res) => {
    // res.send('it worked');
});

module.exports = router;