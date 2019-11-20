const mongoose = require("mongoose");
const itinerarySchema = new mongoose.Schema({
  picture: {
    type: String
  },
  rating: {
    type: String
  },
  price: {
    type: String
  },

  city: {
    type: String
  }
});

module.exports = mongoose.model("itinerary", itinerarySchema);
