const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
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
  fare: {
    type: Number,
    required: true,
  },
  receipt:{
    type: String,
    required: true,
  },
//   days:[{
//     type:String,
//   }],
  // enrolledUser:[{
  //   type:String,
  // }]
});

module.exports = mongoose.model("Booking", bookingSchema);
