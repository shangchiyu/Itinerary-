const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});
const cityModel = require("../model/cityModel");
const itineraryModel = require("../model/itinerary");
const activityModel = require("../model/activity");

// const gravatar = require("gravatar");

router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});
router.post("/", (req, res) => {
  const newCity = new cityModel({
    country: req.body.country,
    city: req.body.city,
    img: req.body.img
  });
  console.log(newCity);
  newCity
    .save()
    .then(city => {
      // console.log(city);
      res.send(city);
    })
    .catch(err => {
      res.status(500).send("Server error: " + err);
    });
});

router.get("/:city", (req, res) => {
  let cityRequested = req.params.city;
  console.log("cityRequested", cityRequested);
  itineraryModel
    .find({ city: cityRequested })
    .then(city => {
      console.log(city, "get one city");
      res.send(city);
    })
    .catch(err => console.log(err));
});
router.get("/activity/:city", (req, res) => {
  let cityRequested = req.params.city;
  console.log("cityRequested", cityRequested);
  activityModel
    .find({ city: cityRequested })
    .then(city => {
      console.log(city, "get one city");
      res.send(city);
    })
    .catch(err => console.log(err));
});


// router.post("/", function(req, res) {
//   const { errors, isValid } = registerInput(req.body); //from validtor folder

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   user
//     .findOne({
//       email: req.body.email
//     })
//     .then(user => {
//       if (user) {
//         return res.status(400).json({
//           email: "Email already exists!"
//         });
//       } else {
//         const img = gravatar.url(req.body.email, {
//           s: "200",
//           r: "pg",
//           d: "mm"
//         });
//         const newUser = new User({
//           username: req.body.name,
//           email: req.body.email,
//           password: req.body.password,
//           img
//         });

//         bcrypt.genSalt(10, (err, salt) => {
//           if (err) console.error("There was an error", err);
//           else {
//             bcrypt.hash(newUser.password, salt, (err, hash) => {
//               if (err) console.error("There was an error", err);
//               else {
//                 newUser.password = hash;
//                 newUser.save().then(user => {
//                   res.json(user);
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
// });

module.exports = router;
