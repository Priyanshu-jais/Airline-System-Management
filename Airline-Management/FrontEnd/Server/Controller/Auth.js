const validateUser = require("../MiddleWare/Validate");
const User = require("../Model/User");
const OTP = require("../Model/Otp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OtpGen = require("otp-generator");
require("dotenv").config();
// Otp Generator
exports.OtpGenerator = async (req, res) => {
  try {
     console.log("1")
    const { email } = req.body;
    console.log("2")

    const duplicate = await User.findOne({ email });

    if (duplicate) {
      return res.status(401).json({
        success: false,
        message: "User already exists",
      });
    }



    var otp = OtpGen.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });


    console.log(otp);
    // For Unique OTP
    let result = await OTP.findOne({ otp });
    while (result) {
      var otp = OtpGen.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      let result = await OTP.findOne({ otp });
    }

    
    const otpResponse = await OTP.create({ email, otp });

    
    res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
      otp,
    });
    console.log("7")
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Error in Sending The OTP",
    });
  }
};

// SignUp
exports.signup = async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      password,
      accountType,
      otp,
    } = req.body;


    // try {
    //   const result = await validateUser.validateAsync(req.body);
    // } catch (err) {
    //   console.log("Error During Validation", err);
    // }

    // Find Most Recent Otp
    const recentOtp = await OTP.findOne({ email })
    .sort({ createdAt: -1 })
    .limit(1);
    // const recentOtp = await OTP.findOne({ email })
    


    console.log(recentOtp)
    if (!recentOtp) {
      return res.status(401).json({
        success: false,
        message: "Otp Expire",
      });
    }


    console.log("4")
    // Match Otp
    if (otp !== recentOtp.otp) {
      return res.status(401).json({
        success: false,
        message: "Otp Not Match",
      });
    }


     console.log("5")
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("6")
    // Create Entry In DB
    
      await User.create({
        email,
        firstName,
        lastName,
        password: hashPassword,
        accountType,
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      });
    
    


     console.log("7")
    return res.status(200).json({
      success: true,
      message: "Account Created Successfully",
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Signup Failed",
    });
  }
};

exports.login = async (req, res) => {
  try {
    // Fetch the Data
    console.log("1")
    const { email, password } = req.body;
    console.log("2")

    // Validate The Data
    // try {
    //   const response = await validateUser.validateAsync(req.body);
    // } catch (err) {
    //   console.log("Error While Validating", err);
    // }
    console.log("3")
  
    // Check Existance of User
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User Does Not Exist",
      });
    }
    console.log("4")

    // Check Password
    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return res.status(401).json({
        success: false,
        message: "Password Not Match",
      });
    }
    console.log("5")

    // Create Payload
    const payload = {
      email: user.email,
      id: user._id,
      accountType: user.accountType,
    };
    console.log("6")

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    user.token = token;
    user.password = undefined;
    console.log("Login 7")

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    console.log("8")

    res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "Login Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};
