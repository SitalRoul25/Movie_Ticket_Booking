const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    mid: String,
    moviename: String,
    director: String,
    cast1: String,
    cast2: String,
    language: String,
    desc: String,
    movietype: String,
    prod: String,
    // releasedate:dateString

});

module.exports = mongoose.model("Movie", movieSchema);