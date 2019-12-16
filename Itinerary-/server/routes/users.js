const express = require("express");
const router = express.Router();
const  User = require("../model/user");
const bcrypt = require("bcrypt");
 //const {validateInput}=require("../ validation/register")

const jwt = require('jsonwebtoken');
const passport = require('passport');

const {check} = require('express-validator');


router.post("/", 
// [check('username').custom(username => {
//   if (value !== req.body.username) {
//     console.log(req.body.username)
//     throw new Error('Username is required');
//   }
// }),
//   check('email').custom(value => {
//         if (value !== req.body.email) {
//           throw new Error('E-mail is required');
//         }
//       })
//   ,
//   check('password').custom((value, { req }) => {
//     if (value !== req.body.password) {
//       throw new Error('Password is required');
//     }
    
//   }) .isLength({ min: 5 }).withMessage('must be at least 5 chars long')
// ]
// ,
function(req, res) {
  

  console.log('req', req.body)

  User
    .findOne({
      email: req.body.email
    })
    .then(user => {
      if (user) {
        console.log(user , "user already exists")
        return res.status(400).json({
          username:"User already exists",
          email: "Email already exists!"
        });
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          img:req.body.img
        });//In order to redirect to Login status, this function also needs token
console.log('newUser', newUser)
        bcrypt.genSalt(10, (err, salt) => {
          if (err) console.error("There was an error", err);
          else {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) console.error("There was an error", err);
              else {
                newUser.password = hash;
                newUser.save().then(user => {
                  res.json(user);
                });
              }
            });
          }
        });
      }
    });
});
router.post('/login', (req, res) => {


   
    const password = req.body.password;
console.log('user', req.body)
    User.findOne({email: req.body.email})
        .then(user => {
            if(!user) {
                return res.status(403).json({
                  email:'E-mail not found'
                });
            }
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                id: user.id,
                                username: user.username,
                                img: user.img
                            }
                            jwt.sign(payload,"secret", {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                  console.log('success token', token)

                                    res.json({
                                        success: true,
                                        token: token
                                    });
                                }
                            });
                        }
                        else {
                           
                            return res.status(400).json( 'Incorrect Password');
                        }
                    });
        });
});
router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      User
        .findOne({ _id: req.user.id })
        .then(user => {
          res.json(user);
        })
        .catch(err => res.status(404).json({ error: "User does not exist!" }));
    }
  );
  router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email"] })
  );
  router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: "/", session: false  }),
  function(req, res) {
    // Successful authentication, redirect home.
     
      res.redirect("http://localhost:3000" + req.user.token);
    
  });

module.exports = router;