const express = require("express");
const router = express.Router();
router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});
const cityModel = require("../model/cityModel");
const itineraryModel = require("../model/itinerary");
const activityModel = require("../model/activity");
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
module.exports = router;
