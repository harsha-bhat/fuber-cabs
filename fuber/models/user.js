var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    lattitude: Number,
    longitude: Number,
    hasBooked: Boolean
});

var User = mongoose.model('user', UserSchema);

module.exports = User;
