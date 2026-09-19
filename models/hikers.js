const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create hikers Schema & model
const HikerSchema = new Schema({
    First_name: {
        type: String,
        required: [true, 'Name field is required']
    },
    Last_name: {
        type: String,
        required: [true, 'Name field is required']
    },
    position: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

const Hiker = mongoose.model('hiker', HikerSchema);

module.exports = Hiker;
