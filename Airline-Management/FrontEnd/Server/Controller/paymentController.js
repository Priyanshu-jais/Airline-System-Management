const Razorpay = require("razorpay");
const crypto = require("crypto");
const User = require("../Model/User");
require("dotenv").config();


exports.validateOrder = async (req, res) => {
  try {
    console.log("11");
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    console.log("12");
  
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    console.log("13");
  
    //order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    console.log("14");
  
    const digest = sha.digest("hex");
    console.log("15");
  
    if (digest !== razorpay_signature) {
      console.log("Signature does not match"); // Log the error
      return res.status(400).json({ msg: "Transaction is not legit!" });
    }
    console.log("16");
  
    return res.status(200).json({
      success: true,
      message: "Payment Successfully",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });

  } catch (e) {
    console.error("Error validating order:", e); // Log the error
    return res.status(500).json({
      success: false,
      message: "Payment validation failed",
      error: e.message // Return the error message in the response
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    console.log("1");
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    console.log("2");
    const { bookingDetail } = req.body;
    //  const options = req.body;
    console.log("....", bookingDetail);
    // console.log("....",formData.amount)

    const options = {
      amount: bookingDetail.amount,
      currency: bookingDetail.currency,
      receipt: bookingDetail.receipt,
      notes: {
        flightId: bookingDetail.flightId,
        userId: bookingDetail.userId,
      },
    };
    console.log("options", options);

    const order = await razorpay.orders.create(options);
    console.log("3");
    if (!order) {
      return res.status(500).send("Error");
    }

    res.status(200).json({
      success: true,
      message: "Successfully",
      order,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
};

exports.addFlightIdInUser = async (req, res) => {
  try {
    console.log("1")
    const { flightId, userId } = req.body;
    console.log("first",flightId)
    console.log("Second",userId)
    if (!flightId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Id's Missing",
      });
    }
    console.log("2")

    const userDetail = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          flightId: flightId,
        },
      },
      { new: true }
    );
    console.log("3")
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
