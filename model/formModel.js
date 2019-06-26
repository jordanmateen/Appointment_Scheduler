const mongoose = require ('mongoose') 
const Schema = mongoose.Schema;

let AppointmentSchema = new Schema ({
    name : String,
    phone :String,
    time : String
})


module.exports = mongoose.model('appointment', AppointmentSchema);