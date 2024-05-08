import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { navigate, useNavigate } from "react-router-dom";
import { sendOtp } from "../../../Service/Operation/Auth";
import { setSignupData } from "../../../Slices/authSlice";
import axios from "axios";
import Loader from "../../Common/Loader";
export const SignupForm = () => {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  // const [accoType, setAccountType] = useState("User");

  function changeHandler(event) {
    setFormdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    try {
      setLoader(true);
      console.log("formData", formData);
      dispatch(setSignupData(formData));
      dispatch(sendOtp(formData.email, navigate));
      setFormdata({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setLoader(false);
    } catch (err) {
      toast.error(err.response.data.message);
      // console.log(err)
      console.log(" Error in Signup",err.response.data.success);
    }
  }

  return (
    <div className=" bg-transparent border border-black p-6 pt-30 pb-20 backdrop-blur-xl rounded-md  absolute right-10">
      {/* student instructer tab */}
      {/* <div
        className="flex rounded-full bg-gray-800 p-1
    gap-x-1 my-6 max-w-max "
      >
        <button
          className={`${
            accoType === "User"
              ? "bg-gray-950 text-white "
              : "bg-transparent text-gray-200"
          } 
        py-2 px-5 rounded-full transitiion-all duration-100`}
          onClick={() => {
            setAccountType("User");
          }}
        >
          User
        </button>

        <button
          className={`${
            accoType === "Admin"
              ? "bg-gray-900 text-gray-50 "
              : "bg-transparent text-gray-200"
          } 
        py-2 px-5 rounded-full transitiion-all duration-200`}
          onClick={() => {
            setAccountType("Admin");
          }}
        >
          Admin
        </button>
      </div> */}
      <form onSubmit={submitHandler} className="w-[450px]">
        {/* first and last name  */}
        <div className="flex justify-between gap-2 ">
          <label className="w-full flex flex-col items-start relative mt-1">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
              First Name<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
            />
          </label>

          <label className="w-full flex flex-col items-start relative mt-1">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
              Last Name<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
            />
          </label>
        </div>
        {/* email  */}
        <label className=" flex flex-col items-start relative mt-2">
          <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
            Email Address<sup className="text-pink-500">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
          />
        </label>
        {/* create password  */}
        <div className=" flex justify-between gap-2">
          <label className="w-full flex flex-col items-start relative mt-2">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
              Create Password<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
            />
            <span
              className="absolute right-3 top-[30px] cursor-pointer mt-1"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full flex flex-col items-start relative mt-2">
            <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
              Confirm Password<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showPassword1 ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200"
            />

            <span
              className="absolute right-3 top-[30px] cursor-pointer mt-1"
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 mt-5 w-full h-[50px] rounded-[8px] font-medium text-gray-800 px-[10px] py-[10px] border-2 border-gray-950  hover:text-white duration-200"
        >
          {loader ? <Loader></Loader> : <div>Create Account</div>}
        </button>
      </form>
    </div>
  );
};
