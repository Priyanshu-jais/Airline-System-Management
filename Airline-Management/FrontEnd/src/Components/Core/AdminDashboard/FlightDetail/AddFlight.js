import React, { useState } from "react";
import { CgArrowsExchange } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createFlightData,
  modifyFlightData,
  deleteFlightData,
} from "../../../../Service/Operation/Flight";

function AddFlight() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { oneFlightData } = useSelector((state) => state.flight);
  // console.log("DATA", oneFlightData);
  // console.log("DATA 2.................",oneFlightData.departureTime);

  // State for selected days
  const [selectedDays, setSelectedDays] = useState([]);

  // Dropdown change handler
  function handleDropdownChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDays([...selectedDays, value]);
    } else {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    }
  }


  function isDaySelected(day) {
    return selectedDays.includes(day);
  }

  const [formData, setFormData] = useState({
    flightFrom: `${oneFlightData?.flightFrom ?? ""}`,
    flightTo: `${oneFlightData?.flightTo ?? ""}`,
    flightName: `${oneFlightData?.flightName ?? ""}`,
    departureTime: oneFlightData?.departureTime
      ? oneFlightData?.departureTime.slice(0, -5)
      : "",
    arrivalTime: oneFlightData?.arrivalTime
      ? oneFlightData?.arrivalTime.slice(0, -5)
      : "",
    flightMode: `${oneFlightData?.flightMode ?? ""}`,
    businessFare: `${oneFlightData?.businessFare ?? ""}`,
    economicalFare: `${oneFlightData?.economicalFare ?? ""}`,
    premiumFare: `${oneFlightData?.premiumFare ?? ""}`,
    days: oneFlightData?.days ?? [],
  });

  // function changeDaysHandler(event) {
  //   const { name, value, type, checked } = event.target;
  //   if (type === "checkbox") {
  //     setFormData((oldState) => ({
  //       ...oldState,
  //       days: checked
  //         ? [...oldState?.days, value]
  //         : oldState?.days?.filter((item) => item !== value),
  //     }));
  //   }
  // }
  // function changeDaysHandler(event) {
  //   const { value, checked } = event.target;
  //   setFormData((oldState) => ({
  //     ...oldState,
  //     days: checked
  //       ? [...oldState.days, value]
  //       : oldState.days.filter((item) => item !== value),
  //   }));
  // }

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      // For checkboxes, toggle the value in the array
      setFormData((oldState) => ({
        ...oldState,
        days: checked
          ? [...oldState.days, value]
          : oldState.days.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    if (oneFlightData) {
      formData.days = selectedDays;
      const finalData = {
        ...formData,
        flightId: oneFlightData._id,
      };
      console.log("sdfjnsd", formData);
      console.log("sdfjnsd", formData.days);
      // console.log("selectedDays",selectedDays);
      dispatch(modifyFlightData(finalData, navigate));
    } else {
      // console.log("sdfjnsd",formData);
      // console.log("selectedDays",selectedDays);
      formData.days = selectedDays;
      dispatch(createFlightData(formData, navigate));
    }
  }

  const deleteHandler = () => {
    const flightId = oneFlightData._id;
    dispatch(deleteFlightData(flightId, navigate));
  };

  return (
    <div className="flex items-center justify-center bg-transparent w-full h-full">
      <div className="relative  min-w-[420px] bg-transparent bg-slate-300 rounded-3xl p-2 border border-gray-600 hover:border-black duration-200">
        <form
          className="px-5 flex flex-col  justify-center"
          onSubmit={submitHandler}
        >
          <div className="flex justify-center my-2">
            <label className="w-full flex flex-col items-start ">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-3">
                From<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="flightFrom"
                onChange={changeHandler}
                placeholder="From"
                value={formData.flightFrom}
                className="bg-gray-800 rounded-[0.5rem] ml-2 font-serif text-gray-50 p-[10px] w-[150px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
            <CgArrowsExchange className="text-[100px] mr-5" />
            <label className="w-full flex flex-col items-start ">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-3">
                To<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="flightTo"
                onChange={changeHandler}
                placeholder="To"
                value={formData.flightTo}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[150px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
          </div>

          {/* Flight Name */}

          <div className="w-full -mt-[30px] ml-2">
            <label className="w-1/2  flex flex-col ">
              <p className="text-[0.875rem] text-gray-900 bold font-serif leading-[1.375rem] ">
                Flight Name<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="flightName"
                onChange={changeHandler}
                placeholder="Indigo"
                value={formData.flightName}
                className="bg-gray-800 rounded-[0.5rem] font-serif text-gray-50 p-[10px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
          </div>

          {/* Flight Time */}
          <div className="flex justify-between ml-2">
            <label className=" flex flex-col items-start">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-1">
                departure<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="datetime-local"
                name="departureTime"
                onChange={changeHandler}
                value={formData.departureTime}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[180px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
            <label className="absolute right-2  flex flex-col items-start mx-auto mt-1">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-1">
                arrival<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="datetime-local"
                name="arrivalTime"
                onChange={changeHandler}
                value={formData.arrivalTime}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[180px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
          </div>

          {/* Flight Mode */}
          <div className="py-4">
            <label className=" flex flex-col items-start mx-auto">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-2">
                Flight Mode<sup className="text-pink-500">*</sup>
              </p>
              <select
                required
                name="flightMode"
                onChange={changeHandler}
                value={formData.flightMode}
                className="bg-gray-800 rounded-[0.5rem] ml-2 font-serif text-gray-50 p-[10px] w-[180px] h-10 border-b-2 border-b-blue-200"
              >
                <option value="">Select Flight Mode</option>
                <option value="Non-Stop">Non-Stop</option>
                <option value="Connect">Connect</option>
              </select>
            </label>
          </div>

          {/* Dropdown with checkboxes for days */}

          <div className="flex justify-start m-2">
            <div className="dropdown">
              <span>Select days:</span>
              <div className="dropdown-content flex gap-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        value={day}
                        name="days"
                        // checked={formData?.days.includes(day)}
                        onChange={handleDropdownChange}
                      />
                      {day}
                    </label>
                  )
                )}
                {/* <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="Sunday"
                    onChange={handleDropdownChange}
                    name="days"
                    checked={formData?.days.includes("Sunday")}
                    className="mr-1"
                  />
                  Sunday
                </label>
                <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="Monday"
                    onChange={handleDropdownChange}
                    name="days"
                    checked={formData?.days.includes("Monday")}
                    className="mr-1"
                  />
                  Monday
                </label>
                <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="Tuesday"
                    onChange={handleDropdownChange}
                    name="days"
                    checked={formData?.days.includes("Tuesday")}
                    className="mr-1"
                  />
                  Tuesday
                </label>
                <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="Wednesday"
                    onChange={handleDropdownChange}
                    name="days"
                    checked={formData?.days.includes("Wednesday")}
                    className="mr-1"
                  />
                  Wednesday
                </label>
                <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="Thursday"
                    onChange={handleDropdownChange}
                    name="days"
                    checked={formData?.days.includes("Thursday")}
                    className="mr-1"
                  />
                  Thursday
                </label>
                <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="Friday"
                    onChange={handleDropdownChange}
                    name="days"
                    checked={formData?.days.includes("Friday")}
                    className="mr-1"
                  />
                  Friday
                </label>
                <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="Saturday"
                    onChange={handleDropdownChange}
                    name="days"
                    checked={formData?.days.includes("Saturday")}
                    className="mr-1"
                  />
                  Saturday
                </label> */}
              </div>
            </div>
          </div>

          {/* Fare */}
          <div className=" flex ml-2 ">
            <label className=" w-full flex flex-col items-start mx-auto mt-1">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-2 ">
                Economy<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="number"
                name="economicalFare"
                onChange={changeHandler}
                placeholder="10,000"
                value={formData.economicalFare}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[100px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
            <label className="ml-[15%] w-full flex flex-col items-start mx-auto mt-1">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-2">
                Premium<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="number"
                name="premiumFare"
                onChange={changeHandler}
                placeholder="20,000"
                value={formData.premiumFare}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[100px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
            <label className="ml-[15%] w-full flex flex-col items-start mx-auto mt-1">
              <p className="text-[0.875rem] text-gray-900 bold font-serif mb-1 leading-[1.375rem] ml-2">
                Business <sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="number"
                name="businessFare"
                onChange={changeHandler}
                placeholder="15,000"
                value={formData.businessFare}
                className="bg-gray-800 rounded-[0.5rem] mr-2 font-serif text-gray-50 p-[10px] w-[100px] h-10 border-b-2 border-b-blue-200"
              />
            </label>
          </div>
          {/* Add other form fields similarly */}
          {oneFlightData ? (
            <div className=" flex flex-row justify-between my-6 ">
              <div
                onClick={deleteHandler}
                className="flex items-center justify-center w-[150px]  left-[8%] bottom-2 rounded-2xl border-2 p-2 border-gray-600 hover:border-gray-950 duration-200 hover:bg-slate-400"
              >
                Delete
              </div>
              <button
                type="submit"
                className="flex items-center  justify-center w-[150px]  right-[8%] bottom-2 rounded-2xl border-2 p-2 border-gray-600 hover:border-gray-950 duration-200 hover:bg-slate-400"
              >
                Modify
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center w-[400px] mt-4 ml-5 bottom-2 rounded-2xl border-2 p-2 border-gray-600 hover:border-gray-950 duration-200 hover:bg-slate-400"
            >
              Create
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddFlight;
