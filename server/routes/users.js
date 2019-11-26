const express = require("express");
const router = express.Router();
const  userModel = require("../model/user");
const bcrypt = require("bcrypt");
const {validateInput}=require("../ validation/register")
const loginInput = require('../ validation/login');
const jwt = require('jsonwebtoken');
const passport = require('passport');



router.post("/", function(req, res) {
  const { errors, isValid } = validateInput(req.body); //from validtor folder

  console.log('req', req.body)
  if (!isValid) {
   return res.status(400).json(errors);
  }
  user
    .findOne({
      email: req.body.email
    })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: "Email already exists!"
        });
      } else {
        const newUser = new User({
          username: req.body.name,
          email: req.body.email,
          password: req.body.password
          
        });

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

    const { errors, isValid } = loginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    userModel.findOne({email})
        .then(user => {
            if(!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                id: user.id,
                                username: user.username,
                                img:user.img
                            }
                            jwt.sign(payload,key.secretOrKey, {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        token: token
                                    });
                                }
                            });
                        }
                        else {
                            errors.password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
});
router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      userModel
        .findOne({ _id: req.user.id })
        .then(user => {
          res.json(user);
        })
        .catch(err => res.status(404).json({ error: "User does not exist!" }));
    }
  );

module.exports = router;