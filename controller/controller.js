const Appointment = require('../model/formModel')

exports.appointment_create = function (req, res) {
    let product = new Appointment(
        {
            name: req.body.name,
            phone: req.body.phone,
            time : req.body.time
        }
    );

    product.save(function (err) {
        if (err) {
            throw err;
        }
        res.send('Appointment Created successfully')
    })
};

