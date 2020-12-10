const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Name: String,
    Phone: String,
    Email: String,
    Balance: Number
});

module.exports = mongoose.model('User', userSchema);