const { type } = require('@testing-library/user-event/dist/type');
const { number } = require('joi');
const mongoose = require('mongoose');

const cusUserSchema = new mongoose.Schema({
    cusFirstName: {
        type: String,
        required: true,
        trim: true,
      },
      cusLastName: {
        type: String,
        required: true,
        trim: true,
      },
      gender:{
        type: String,
        required: true,
      },
      age:{
        type: Number,
        required: true,
      },
      bookinFlightId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
      }]
})

module.exports = mongoose.model("Customer", cusUserSchema);