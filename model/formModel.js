const mongoose = require ('mongoose') 
const Schema = mongoose.Schema;

//Appointment Schema
let AppointmentSchema = new Schema ({
    name : String,
    phone :String,
    time : String
})

//export schema created when post is made
module.exports = mongoose.model('appointment', AppointmentSchema);