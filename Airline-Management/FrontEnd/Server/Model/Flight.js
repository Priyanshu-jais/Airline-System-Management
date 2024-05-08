const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flightName: {
    type: String,
    required: true,
    trim: true,
  },
  flightFrom: {
    type: String,
    required: true,
    trim: true,
  },
  flightTo: {
    type: String,
    required: true,
    trim: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  flightMode: {
    type: String,
    enum: ["Non-Stop", "Connect"],
  },
  economicalFare: {
    type: Number,
    required: true,
  },
  premiumFare: {
    type: Number,
    required: true,
  },
  businessFare: {
    type: Number,
    required: true,
  },
  days:[{
    type:String,
  }],
  // enrolledUser:[{
  //   type:String,
  // }]
});

module.exports = mongoose.model("Flight", flightSchema);
