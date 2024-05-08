const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      accountType: {
        type: String,
        enum: ["User", "Admin",],
        default: "User"
      },
      image: {
        type: String,
        required: true,
      },
      token: {
        type: String,
      },
      customerBooking:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
      }]
})

module.exports = mongoose.model("User", userSchema);