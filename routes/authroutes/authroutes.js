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

router.post('/login', (req, res) => {
    console.log(req.body);

    db.User.findAll({
        limit: 1,
        where: {
            userName: req.body.name
        }
    }).then(user => {
        if (user.length === 0) {
            console.log('ksejhgskjgns;uhakfisudhfkjdsh')
            db.User.findAll({
                limit: 1,
                where: {
                    email: req.body.name
                }
            }).then(response => {
                if (!response) {
                    console.log('tekjads')
                }
            }).catch(err => {
                console.log('neither found', err);
            });    
        } else {
            console.log(req.body.password);
            bcrypt.compare(req.body.password, user[0].dataValues.password, function (err, result) {
                console.log('result', result);
                if (result == true) {
                    res.send({user: {
                        userName: user[0].dataValues.userName,
                        email: user[0].dataValues.email
                    }})
                } else {
                    res.status(401).send(['Incorrect password']);
                };
            });
        };
    }).catch(err => {
        console.log(err)
        db.User.findAll({
            limit: 1,
            where: {
                email: req.body.name
            }
        }).then(user => {
            if (user.length === 0) {
                console.log('ksejhgskjgns;uhakfisudhfkjdsh')
                db.User.findAll({
                    limit: 1,
                    where: {
                        email: req.body.name
                    }
                }).then(response => {
                    console.log('email found 53', response);
                }).catch(err => {
                    console.log('neither found', err);
                });
            } else {
                console.log('94', req.body.password);
                bcrypt.compare(req.body.password, user[0].dataValues.password, function (err, result) {
                    console.log('result', result);
                    if (result == true) {
                        res.send({user: {
                            userName: user[0].dataValues.userName,
                            email: user[0].dataValues.email
                        }})
                    } else {
                        res.status(401).send(['Incorrect password']);
                    };
                });
            };
        }).catch(err => {
            console.log('neither found', err)
        });
    });
});

router.get('/signup', (req, res) => {
    // res.send('it worked');
});

module.exports = router;