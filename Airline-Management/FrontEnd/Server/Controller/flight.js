const Flight = require("../Model/Flight");
const User = require("../Model/User");
const Booking = require("../Model/BookingFlight");
const Customer = require("../Model/CustomerDetail");
exports.createFlightData = async (req, res) => {
  try {
    const {
      flightName,
      flightFrom,
      flightTo,
      departureTime,
      arrivalTime,
      flightMode,
      economicalFare,
      premiumFare,
      businessFare,
      days,
    } = req.body;

    console.log("days", days);

    if (
      !flightName ||
      !flightFrom ||
      !flightTo ||
      !departureTime ||
      !arrivalTime ||
      !businessFare ||
      !premiumFare | !flightMode ||
      !economicalFare
    ) {
      return res.status(401).json({
        success: false,
        message: "Fill all fields",
      });
    }
    console.log("2");

    const date = await Flight.create({
      flightName,
      flightFrom,
      flightTo,
      departureTime,
      arrivalTime,
      flightMode,
      economicalFare,
      premiumFare,
      businessFare,
      days,
    });
    console.log("4");

    return res.status(200).json({
      success: true,
      message: "Flight Data added successfully",
      date,
    });
  } catch (e) {
    // console.log("error of creating flight",e)
    return res.status(401).json({
      success: false,
      message: "Error while adding flight Data",
    });
  }
};

exports.modifyFlightData = async (req, res) => {
  try {
    const {
      flightId,
      flightName,
      flightFrom,
      flightTo,
      departureTime,
      arrivalTime,
      flightMode,
      economicalFare,
      premiumFare,
      businessFare,
      days,
    } = req.body;
    console.log("Days", days);
    if (
      !flightId ||
      !flightName ||
      !flightFrom ||
      !flightTo ||
      !departureTime ||
      !arrivalTime ||
      !businessFare ||
      !premiumFare | !flightMode ||
      !economicalFare ||
      !days
    ) {
      return res.status(401).json({
        success: false,
        message: "Fill all fields",
      });
    }
    console.log("2");

    const date = await Flight.findByIdAndUpdate(
      flightId,
      {
        flightName,
        flightFrom,
        flightTo,
        departureTime,
        arrivalTime,
        flightMode,
        economicalFare,
        premiumFare,
        businessFare,
        days,
      },
      { new: true }
    );
    console.log("4");

    return res.status(200).json({
      success: true,
      message: "Flight Data added successfully",
      date,
    });
  } catch (e) {
    // console.log("error of creating flight",e)
    return res.status(401).json({
      success: false,
      message: "Error while adding flight Data",
    });
  }
};

exports.getAllFlightData = async (req, res) => {
  try {
    const response = await Flight.find({});
    return res.status(200).json({
      success: true,
      message: "All flight Data found",
      response,
    });
  } catch (e) {
    return res.status(200).json({
      success: false,
      message: "Error in Searching flight Data",
    });
  }
};

exports.deleteFlightData = async (req, res) => {
  try {
    const { flightId } = req.body;
    console.log("1", flightId);
    if (!flightId) {
      return res.status(200).json({
        success: false,
        message: "Id is Missing of deleting flight Data",
      });
    }
    const result = await Flight.findByIdAndDelete({ _id: flightId });
    return res.status(200).json({
      success: true,
      result,
      message: "Flight deleted successfully",
    });
  } catch (e) {
    return res.status(200).json({
      success: false,
      message: "Error while deleting the flight",
    });
  }
};

exports.searchFlightData = async (req, res) => {
  try {
    const { flightFrom, flightTo } = req.body;
    console.log("1");
    if (!flightFrom || !flightTo)
      return res.status(401).json({
        success: false,
        message: "Please Fill all required fields",
      });
    console.log("2");

    const result = await Flight.find({ flightFrom, flightTo });
    if (!result)
      return res.status(402).json({
        success: false,
        message: "Flight Route Not Present",
      });
    console.log("3");

    return res.status(200).json({
      success: true,
      result,
      message: "Flight Found",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error while finding flight",
    });
  }
};

exports.addFlightIdInUser = async (req, res) => {
  try {
    const { flightId, userId, amount, receipt, userData } = req.body;

    console.log("Adding flight", flightId, userId, amount, receipt);
    console.log(".................userData", userData);
    if (!flightId || !userId || !amount || !receipt || !userData) {
      return res.status(400).json({
        success: false,
        message: "Id's or Data Missing",
      });
    }

    const flightDetail = await Flight.findById(flightId);
    // console.log("flightDetail", flightDetail);
    // console.log("flightDetail", flightDetail.flightName);
    const payload = {
      flightName: flightDetail.flightName,
      flightTo: flightDetail.flightTo,
      flightFrom: flightDetail.flightFrom,
      departureTime: flightDetail.departureTime,
      arrivalTime: flightDetail.arrivalTime,
      flightMode: flightDetail.flightMode,
      fare: amount,
      receipt: receipt,
    };
    const bookingAdd = await Booking.create(payload);
    console.log("Adding booking", bookingAdd);
    console.log("Booking_Id",bookingAdd._id)
  try{
    var customerCreate = await Customer.create({
      cusFirstName: userData.cusFirstName,
      cusLastName: userData.cusLastName,
      gender: userData.gender,
      age: userData.age,
      bookinFlightId: bookingAdd._id,
    });
  }catch(e){
      console.log("errrooor",e)
  }
    
 
    console.log("5");

    const userDetail = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          customerBooking: customerCreate._id,
        },
      },
      { new: true }
    );

    console.log("6");
    return res.status(200).json({
      success: true,
      userDetail,
      message: "Add Flight Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error in Addmin Id in User",
    });
  }
};

exports.removeFlightIdInUser = async (req, res) => {
  try {
    const { flightId, userId } = req.body;
    if (!flightId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Id's Missing",
      });
    }
    const userDetail = await User.findByIdAndUpdate(
      userId,
      {
        $pull: {
          flightId: flightId,
        },
      },
      { new: true }
    );
    return res.status(500).json({
      success: true,
      message: "Remove Flight Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error in removing Id in User",
    });
  }
};

exports.getAllBookedFlightDetail = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Id's Missing",
      });
    }
    const userDetail = await User.findById(userId)
      .populate({
        path: "customerBooking",
        populate: {
          path: "bookinFlightId",
        },
      })
      .exec();
    return res.status(200).json({
      success: true,
      userDetail,
      message: "Fetched Flight Data Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error in finding details",
    });
  }
};
