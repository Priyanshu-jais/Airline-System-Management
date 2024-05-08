import { useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createPayment } from "../../../Service/Operation/payment";
import { useNavigate } from "react-router-dom";
import {setBookingDetails} from "../../../Slices/flightSlice"
const UserCardOfFlight = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  // console.log("Data in User Card", user);
  const { modifyData } = useSelector((state) => state.modify);
  const passenger = modifyData?.passenger || 1;
  const flightClass = modifyData?.class || "";
  // console.log("modifyData Data in FlightCard", flightClass)
  const [formData, setFormData] = useState({
    amount: "",
    currency: "INR",
    receipt: "",
    flightId: "",
    userId: "",
  });

  const economyHandler = () => {
    formData.amount = passenger * data.economicalFare * 100;
    formData.receipt = Math.random(Date.now()).toString();
    formData.flightId = data._id;
    formData.userId = user._id;
    // console.log("FormData for Payment", formData);
    dispatch(setBookingDetails(formData));
    localStorage.setItem("bookingFlightDetail",JSON.stringify(formData));
    navigate("/dashboard/user/booking-form")
    // dispatch(createPayment(formData,navigate));
  };
  const premiumHandler = () => {
    formData.amount = passenger * data.premiumFare * 100;
    formData.receiptId = Math.random(Date.now()).toString();
    formData.flightId = data._id;
    formData.userId = user._id;
    // console.log("FormData for Payment", formData);
    dispatch(setBookingDetails(formData));
    localStorage.setItem("bookingFlightDetail",JSON.stringify(formData));
    navigate("/dashboard/user/booking-form")
    // dispatch(createPayment(formData,navigate));
  };
  const businessHandler = () => {
    formData.amount = passenger * data.businessFare * 100;
    formData.receiptId = Math.random(Date.now()).toString();
    formData.flightId = data._id;
    formData.userId = user._id;
    // console.log("FormData for Payment", formData);
    dispatch(setBookingDetails(formData));
    navigate("/dashboard/user/booking-form")
    localStorage.setItem("bookingFlightDetail",JSON.stringify(formData));
    // dispatch(createPayment(formData,navigate));
  };

  return (
    <div className="w-full h-full px-3 flex">
      <div className="w-1/3 flex flex-col justify-center items-center">
        <div className="group cursor-pointer relative">
          <p>Economy</p>
          <div className="invisible absolute transition-all ease-in-out duration-150 group-hover:visible group-hover:translate-y-2  z-20 bg-gray-300 rounded-md w-[30px] h-[30px] top-[80%] translate-y-8 left-[40%] rotate-45"></div>
          <div
            className="invisible absolute transition-all ease-in-out duration-150 group-hover:visible group-hover:translate-y-4 border border-gray-600  bg-gray-300 z-10 top-[100%] translate-y-8 -translate-x-[5%]
                      w-[300px]  rounded-lg flex flex-col gap-3 py-5 px-5 "
          >
            <p className="font-bold text-gray-800 text-[14px]">
              Saver <sup className="text-red-600">*</sup>
            </p>
            <div className="flex justify-between items-center">
              <div className="font-bold flex justify-center items-center">
                <MdCurrencyRupee></MdCurrencyRupee>
                {data.economicalFare}{" "}
                <span className="text-[12px] font-thin text-gray-500">
                  {" "}
                  /Adult
                </span>{" "}
              </div>
              <div className="text-gray-500 text-[13px]">
                Earn {`${data.economicalFare / 20}`} 6E Rewards
              </div>
            </div>
            <p className="text-gray-700">
              Hand Baggage (7Kg) + Check-In Baggage (15Kg)
            </p>
            <button
              onClick={economyHandler}
              className=" w-full py-2 bg-slate-400 rounded-lg text-white font-bold hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        </div>

        <p className="font-bold">{passenger * data.economicalFare}</p>
        <button
          onClick={economyHandler}
          className={`${
            flightClass === "economy" ? "bg-blue-900" : "bg-blue-500 "
          }  py-1 px-6 bg-blue-700 rounded-md text-white font-bold`}
        >
          Book
        </button>
      </div>

      <div className="w-1/3 flex flex-col justify-center items-center">
        <div className="group cursor-pointer relative">
          <p>Premium</p>
          <div className="invisible absolute transition-all ease-in-out duration-150 group-hover:visible group-hover:translate-y-2 z-20 bg-gray-300 rounded-md w-[30px] h-[30px] top-[80%] translate-y-8 left-[40%] rotate-45"></div>
          <div
            className="invisible absolute transition-all ease-in-out duration-150 group-hover:visible border group-hover:translate-y-4  border-gray-600  bg-gray-300 z-10 top-[100%] translate-y-8 -translate-x-[35%]
                      w-[300px]  rounded-lg flex flex-col gap-3 py-5 px-5 "
          >
            <p className="font-bold text-gray-800 text-[14px]">
              Saver <sup className="text-red-600">*</sup>
            </p>
            <div className="flex justify-between items-center">
              <div className="font-bold flex justify-center items-center">
                <MdCurrencyRupee></MdCurrencyRupee>
                {data.premiumFare}{" "}
                <span className="text-[12px] font-thin text-gray-500">
                  {" "}
                  /Adult
                </span>{" "}
              </div>
              <div className="text-gray-500 text-[13px]">
                Earn {`${data.premiumFare / 20}`} 6E Rewards
              </div>
            </div>
            <p className="text-gray-700">
              Hand Baggage (7Kg) + Check-In Baggage (15Kg) + Free meal and Free
              seat and more...
            </p>
            <button
              onClick={premiumHandler}
              className=" w-full py-2 bg-slate-400 rounded-lg text-white font-bold hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        </div>
        <p className="font-bold">{passenger * data.premiumFare}</p>
        <button
          onClick={premiumHandler}
          className={`${
            flightClass === "premium" ? "bg-blue-900" : "bg-blue-500 "
          }  py-1 px-6 bg-blue-700 rounded-md text-white font-bold`}
        >
          Book
        </button>
      </div>

      {/* Bussiness */}

      <div className="w-1/3 flex flex-col justify-center items-center">
        <div className="group cursor-pointer relative">
          <p>Bussiness</p>
          <div className="invisible absolute transition-all ease-in-out duration-150 group-hover:visible group-hover:translate-y-2 z-20 bg-gray-300 rounded-md w-[30px] h-[30px] top-[80%] translate-y-8 left-[40%] rotate-45"></div>
          <div
            className="invisible absolute transition-all ease-in-out duration-150 group-hover:visible group-hover:translate-y-4 border border-gray-600  bg-gray-300 z-10 top-[100%] translate-y-8 -translate-x-[65%]
                      w-[300px]  rounded-lg flex flex-col gap-3 py-5 px-5 "
          >
            <p className="font-bold text-gray-800 text-[14px]">
              Saver <sup className="text-red-600">*</sup>
            </p>
            <div className="flex justify-between items-center">
              <div className="font-bold flex justify-center items-center">
                <MdCurrencyRupee></MdCurrencyRupee>
                {data.businessFare}{" "}
                <span className="text-[12px] font-thin text-gray-500">
                  {" "}
                  /Adult
                </span>{" "}
              </div>
              <div className="text-gray-500 text-[13px]">
                Earn {`${data.businessFare / 20}`} 6E Rewards
              </div>
            </div>
            <p className="text-gray-700">
              Hand Baggage (7Kg) + Check-In Baggage (25Kg) Free meal,Free
              seat,Fast Forward,Airport service and more...
            </p>
            <button
              onClick={businessHandler}
              className=" w-full py-2 bg-slate-400 rounded-lg text-white font-bold hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        </div>
        <p className="font-bold">{passenger * data.businessFare}</p>
        <button
          onClick={businessHandler}
          className={`${
            flightClass === "business" ? "bg-blue-900" : "bg-blue-500 "
          }  py-1 px-6 bg-blue-700 rounded-md text-white font-bold`}
        >
          Book
        </button>
      </div>
    </div>
  );
};
export default UserCardOfFlight;
