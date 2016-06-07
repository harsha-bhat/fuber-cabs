var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaxiSchema = new Schema({
    lattitude: Number,
    longitude: Number,
    isBooked: Boolean
});

var Taxi = mongoose.model('taxi', TaxiSchema);

module.exports = Taxi;
