const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

mongoose.model('Employee', employeeSchema);