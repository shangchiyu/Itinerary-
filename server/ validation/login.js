const Validator = require("express-validator");


module.exports = function loginInput(data) {
    let errors = {};
    data.email = !notEmpty(data.email) ? data.email : '';
    data.password = !notEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.notEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.notEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: notEmpty(errors)
    }
}