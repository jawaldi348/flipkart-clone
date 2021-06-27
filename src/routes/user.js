const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/signin', (req, res) => {

});

router.post('/signup', (req, res) => {
    // periksa email ke database
    User.findOne({ email: req.body.email })
        // callback function
        .exec((error, user) => {
            // jika email sudah ada munculkan pesan
            if (user) return res.status(400).json({
                message: 'User already registered',
                status: '1001'
            });

            const {
                firstName, lastName, email, password
            } = req.body;

            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            });

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'Something went wrong'
                    });
                }
                if (data) {
                    return res.status(201).json({
                        user: data
                    })
                }
            });
        });
});

module.exports = router;