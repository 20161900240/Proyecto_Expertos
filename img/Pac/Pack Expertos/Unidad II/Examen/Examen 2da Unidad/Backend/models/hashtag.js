var mongoose = require('mongoose');
var esquemaHashtag = new mongoose.Schema({
    hashtag: String,
    videos: Number
});

module.exports = mongoose.model('hashtags', esquemaHashtag);