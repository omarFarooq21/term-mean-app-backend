const mongoose = require('../db/connection');

const departmentSchema = new mongoose.Schema({
    deptName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 128,
        unique: true
    },
    subDepartment: [{
        type: String
    }]
});

const Department = mongoose.model('Department', departmentSchema);

exports.Department = Department;