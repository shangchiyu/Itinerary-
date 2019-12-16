
// import Validator  from 'express-validator/check';

// const Validator  ;

// const validateInput = (data) => {
//     let errors = {};
//     // data.username = !notEmpty(data.name) ? data.username : '';
//     data.email = !notEmpty(data.email) ? data.email : '';
//     data.password = !notEmpty(data.password) ? data.password : '';
//     // data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    
//     // if(Validator.notEmpty(data.username)) {
//     //     errors.username = 'Username field is required';
//     // }

//     if(!Validator.isEmail(data.email)) {
//         errors.email = 'Email is invalid';
//     }

//     if(Validator.notEmpty(data.email)) {
//         errors.email = 'Email is required';
//     }

//     if(!Validator.isLength(data.password, {min: 6, max: 30})) {
//         errors.password = 'Password must have 6 chars';
//     }

//     if(Validator.isEmpty(data.password)) {
//         errors.password = 'Password is required';
//     }

 

//     return {
//         errors,
//         isValid: isEmpty(errors)
//     }
// }

// module.exports = validateInput