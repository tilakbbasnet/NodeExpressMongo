const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render("employee/addoredit", {
        viewTitle: "New Employee"});
});

router.post('/', (req, res) => {
    console.log(req.body);
    addEmployee(req, res);
});

function addEmployee(req, res) {
    var employee = new Employee();
    employee.fullname = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if(!err) {
            console.log('employee saved');
        }else {
            console.log('employee not saved');
        }
    });
}

module.exports = router;