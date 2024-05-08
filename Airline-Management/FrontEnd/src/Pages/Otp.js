import React from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-hot-toast";
import { navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { signUp } from "../Service/Operation/Auth";
import { sendOtp } from "../Service/Operation/Auth";

const Otp = ({ setISLoggedIn }) => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { signupData } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  console.log("Si", signupData);
  async function submitHandler() {
    console.log(otp);
    try {
      const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      } = signupData;

      dispatch(
        signUp(
          accountType,
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          otp,
          navigate
        )
      );
    } catch (e) {
      console.log("Error in Sending OTP", e.response.data);
      toast.error(e.response.data.message);
    }
  }

  return (
    <div>
      <div
        className=" text-white flex justify-center items-center w-[100vw] h-[100vh] "
        style={{
          backgroundImage: 'url("https://wallpaperaccess.com/full/254381.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="absolute h-[220px] flex flex-col items-center   bg-gray-500 border bg-opacity-40 border-black p-10 rounded-md right-[400px] top-[200px]">
          <h1 className="text-4xl text-black font-serif">Enter Your OTP</h1>
          <p className="text-[10px] pb-5 text-gray-200 font-serif">
            Your OTP is Sent in <span className="p-1">{signupData?.email}</span>
          </p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input {...props} className="text-4xl rounded-sm text-black" />
            )}
          />
          <button
            type="submit"
            onClick={submitHandler}
            className="absolute bottom-1 left-2 border border-black bg-orange-500 p-2 rounded text-black text-[1.5xl] font-bold font-sans hover:text-white transition-all duration-200"
          >
            Submit
          </button>
          <div
            onClick={() => {
              dispatch(sendOtp(signupData.email, navigate));
            }}
            className="absolute bottom-1 right-2 text-white font-sans font-semibold hover:underline cursor-pointer"
          >
            Resend OTP
          </div>
        </div>
      </div>
    </div>
  );
};
export default Otp;
