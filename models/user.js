const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    country: String,
})

module.exports = mongoose.model('user', userSchema);