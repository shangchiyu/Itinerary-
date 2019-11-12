const express = require("express");
const mongoose = require("mongoose");
const citySchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  img: {
    type: String
  }
});

module.exports = mongoose.model("cities", citySchema);
