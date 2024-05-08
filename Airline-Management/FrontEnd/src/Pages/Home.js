import React, { useState } from "react";
import { TbArrowsExchange } from "react-icons/tb";
import Slider from "../Components/Common/Slider";
import Footer from "../Components/Common/Footer";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [formData,setFormData]= useState({
    flightFrom:"",
    flightTo:"",
  })

  const changeHandler = (event)=>{
    setFormData((old)=>({
      ...old,
      [event.target.value]: event.target.name,
    }))
  }
  const submitHandler = (event)=>{
    event.preventDefault();
    console.log("FormData")
    navigate("/login")
  }
  return (
    <div className="bg-gradient-to-r  from-cyan-500  to-black flex flex-col items-center  text-black font-serif pt-20">
      <div className="w-[85%] h-[150px] my-10 rounded-lg bg-white flex flex-col items-center">
        <h4 className="text-4xl font-bold my-5">Book Your Trip</h4>
        <form onSubmit={submitHandler} className=" mx-auto w-[97%]  mt-1 h-[60px] flex justify-between items-center gap-3">
          <input
            required
            className=" h-12 rounded-md w-[300px] border-solid border-2 border-grey-900 pl-2"
            type="text"
            placeholder="From"
            name="flightFrom"
            // onChange={changeHandler}
            // value={formData.flightFrom}
          ></input>
          <div className="text-2xl">
            <TbArrowsExchange></TbArrowsExchange>
          </div>
          <input
          required
            className=" h-12 rounded-md w-[300px] border-solid border-2 border-grey-900 pl-2"
            type="text"
            placeholder="To"
            name="flightTo"
            // onChange={changeHandler}
            // value={formData.flightTo}
          ></input>
          <input
            className=" h-12  rounded-md w-[300px] border-solid border-2 border-grey-900 pl-2"
            type="date"
          ></input>
          <Link to={"/login"}>
            <button type="submit" className="bg-blue-900 font-serif py-3 px-9 text-white rounded-md">
              Search Flight
            </button>
          </Link>
        </form>
      </div>

      <div className="w-[85%] rounded-md h-[45vh] border-solid border border-grey-400">
        <Slider></Slider>
      </div>
      <div className="mt-10 w-[85%] border-solid text-gray-200 ">
        <h2 className="font-bold text-3xl p-5">Offers</h2>
        <div className="w-[90%] h-[200px] flex  gap-10 ">
          {/* Card-1 */}
          <div
            className="w-[250px] h-[160px] rounded-md flex flex-col gap-2 border border-gray-500 px-1 py-1 "
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/green-paint-wall-background-texture_53876-23269.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708333200&semt=ais)",
            }}
          >
            <h2 className="text-xl font-bold ">Get Upto 10% Off</h2>
            <p className="">From APPS website bookings</p>
            <p className="bg-white py-1 text-blue-800 px-1 rounded-lg w-[80px] text-black text-[10px]">
              App With Benifit
            </p>
            <div className="flex justify-between">
              <p>No expiry</p>
              <p className="text-[10px]">T&C apply*</p>
            </div>
          </div>

          {/* Card-2 */}
          <div
            className="w-[250px] h-[160px] rounded-md flex flex-col gap-2 border text-gray-700 border-gray-500 px-1 py-1 "
            style={{
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/227/64/929/light-line-color-wallpaper-preview.jpg)",
            }}
          >
            <h2 className="text-xl font-bold ">Get flat INR 400*</h2>
            <p className="">Cashback or upto 10% Cashback</p>
            <p className="bg-white py-1 text-blue-800 px-1 rounded-lg w-[80px] text-black text-[10px]">
              Mobiki
            </p>
            <div className="flex justify-between">
              <p>No expiry</p>
              <p className="text-[10px]">T&C apply*</p>
            </div>
          </div>

          {/* Card-3 */}
          <div
            className="w-[250px] h-[160px] rounded-md  text-gray-700 flex flex-col gap-2 border border-gray-500 px-1 py-1 "
            style={{
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/338/138/476/background-spot-light-surface-wallpaper-preview.jpg)",
            }}
          >
            <h2 className="text-xl font-bold ">Get Upto 10% Off</h2>
            <p className="">From APPS website bookings</p>
            <p className="bg-white py-1 text-blue-800 px-1 rounded-lg w-[80px] text-black text-[10px]">
              App With Benifit
            </p>
            <div className="flex justify-between">
              <p>No expiry</p>
              <p className="text-[10px]">T&C apply*</p>
            </div>
          </div>

          {/* Card-4 */}
          <div
            className="w-[250px] h-[160px] rounded-md flex flex-col gap-2 border border-gray-500 px-1 py-1 "
            style={{
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/278/71/807/texture-pattern-background-light-wallpaper-thumb.jpg)",
            }}
          >
            <h2 className="text-xl font-bold ">Get Upto 10% Off</h2>
            <p className="">From APPS website bookings</p>
            <p className="bg-white py-1 text-blue-800 px-1 rounded-lg w-[80px] text-black text-[10px]">
              App With Benifit
            </p>
            <div className="flex justify-between">
              <p>No expiry</p>
              <p className="text-[10px]">T&C apply*</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] h-[120px] my-12">
        <img
          className="w-full h-full"
          src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1708369158/samples/Screenshot_2024-02-20_at_12.28.54_AM_dcghq7.png"
        ></img>
      </div>
      {/* Footer */}
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Home;
