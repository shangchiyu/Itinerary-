const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema({
  city: {
    type: String
  },
  event: {
    type: String
  },
  food: {
    type: String
  },

  attraction: {
    type: String
  }
});

module.exports = mongoose.model("activity", activitySchema);