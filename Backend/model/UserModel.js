const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    mobile: Number,
    email: String,
    address: String,
    gender: String
});

module.exports = mongoose.model("User", userSchema);