const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../models/database');

//User shema

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
    }
});

const User = module.exports = mongoose.model('User', UserSchema);