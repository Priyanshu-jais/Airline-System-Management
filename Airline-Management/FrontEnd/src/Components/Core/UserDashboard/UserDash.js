import React, { useEffect, useState } from "react";
import { CgArrowsExchange } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setModifyData } from "../../../Slices/modifySlice";
import { modifyFlightData } from "../../../Service/Operation/Flight";
import { click } from "@testing-library/user-event/dist/click";
import { searchFlightData } from "../../../Service/Operation/Flight";

export const UserDash = () => {
  const { allFlightData } = useSelector((state) => state.flight);
  const { modifyData } = useSelector((state) => state.modify);

  // console.log("Inside user Dash", modifyData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formDataRow, setFormdataRow] = useState({
    flightFrom: `${
      modifyData?.flightFrom ?? allFlightData[0]?.flightFrom ?? ""
    }`,
    flightTo: `${modifyData?.flightTo ?? allFlightData[0]?.flightTo ?? ""}`,
    date: new Date().toISOString().substr(0, 10),
    passenger: `${modifyData?.passenger ?? 1}`,
    class: `${modifyData?.class ?? ""}`,
  });

  const [formDatacol, setFormdatacol] = useState({
    time: modifyData?.time ?? [],
    mode: modifyData?.mode ?? "",
    // returnTrip: "",
  });

  async function submitHandlerRow(event) {
    event.preventDefault();
    console.log("submitHandlerRow .................",formDataRow);
    if(formDataRow.flightFrom  !== allFlightData[0]?.flightFrom || formDataRow.flightTo !== allFlightData[0]?.flightTo ){
      const formData ={
        flightFrom:formDataRow.flightFrom,
        flightTo:formDataRow.flightTo 
      }
      dispatch(searchFlightData(formData,navigate));
    }
    
    const finalData = {
      ...formDataRow,
      ...formDatacol,
    };
    dispatch(setModifyData(finalData));
    localStorage.setItem("modifyData", JSON.stringify(finalData));
  }


  async function submitHandlercol(event) {
    event.preventDefault();
    // console.log("dsfoeufn submitHandlercol", formDatacol);
    const finalData = {
      ...formDataRow,
      ...formDatacol,
    };

    dispatch(setModifyData(finalData));
    localStorage.setItem("modifyData", JSON.stringify(finalData));
  }

  function changeHandlerRow(event) {
    setFormdataRow((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function changeHandlercol(event) {
    const { name, value, type, checked } = event.target;
    if (type === "radio") {
      // For radio buttons, directly update the mode value
      setFormdatacol((oldState) => ({
        ...oldState,
        mode: value,
      }));
    } else if (type === "checkbox") {
      // For checkboxes, toggle the value in the array
      setFormdatacol((oldState) => ({
        ...oldState,
        time: checked
          ? [...oldState?.time, value]
          : oldState?.time?.filter((item) => item !== value),
      }));
    }
  }
  const swapHandler =()=>{
    let temp = formDataRow.flightFrom;
    formDataRow.flightFrom = formDataRow.flightTo;
    formDataRow.flightTo = temp
  }

  return (
    <div className="bg-gray-200 relative border w-screen h-screen">
      {/* Left-right wala div tag */}
      <div className="border border-gray-400 py-4 w-full bg-gray-300 mt-10 ml-[0px] flex items-center justify-center ">
        <img
          src="https://res.cloudinary.com/dppgyjdcg/image/upload/v1712989256/priyanshu/flight_ye2cid.png"
          alt="kinare ka pic"
          className="h-[80px] -mb-2 -ml-10"
        ></img>
        <form
          className="flex item-center justify-between gap-6"
          onSubmit={submitHandlerRow}
        >
          <div className="mt-2 h-[50px] w-[182px] flex items-center justify-start gap-1 p-2  text-gray-900 rounded-xl border border-black ">
            <p className="font-bold">From:</p>
            <input
              className=" h-11 w-[120px] bg-gray-300 border-none rounded-lg pl-2 "
              required
              type="text"
              onChange={changeHandlerRow}
              value={formDataRow.flightFrom}
              name="flightFrom"
            ></input>
          </div>
          <button onClick={swapHandler} className="mt-5 text-4xl text-black">
            <CgArrowsExchange />
          </button>
          <div className="mt-2 h-[50px] w-[162px] flex items-center justify-start gap-1 p-1  text-gray-900 rounded-xl border border-black ">
            <p className="font-bold">To:</p>
            <input
              className=" h-11 w-[120px] bg-gray-300 border-none rounded-lg pl-2"
              required
              type="text"
              onChange={changeHandlerRow}
              value={formDataRow.flightTo}
              name="flightTo"
            ></input>
          </div>
          <label className="mt-2 p-2 flex items-center justify-center gap-1 h-[50px] w-[200px] rounded-xl border-2 border-blue-400 hover:border-blue-900 duration-200">
            <p className="text-[0.875rem] text-black leading-[1.375rem] font-serif">
              Date:
            </p>
            <input
              type="date"
              value={formDataRow.date}
              onChange={changeHandlerRow}
              name="date"
              className="bg-gray-300  text-black"
            />
          </label>
          <label className="mt-2 p-1 ml-2 flex items-center justify-center gap-1 w-[170px] h-[50px] rounded-xl border-2 border-blue-400 hover:border-blue-900 duration-200">
            <p className="text-[18px] leading-[1.375rem] ml-2 font-serif">
              Passenger:
            </p>
            <div className="flex justify-between text-[18px] w-[80px]">
              <input
                required
                type="number"
                value={formDataRow.passenger}
                onChange={changeHandlerRow}
                placeholder="1"
                name="passenger"
                min={1}
                max={15}
                className="rounded-[0.5rem] p-[12px] w-[4rem] h-10 bg-gray-300 border-x-black font-serif"
              />
            </div>
          </label>
          <label className="mt-2 flex items-center px-3 justify-between h-[50px] w-[190px] rounded-xl border-2 border-blue-400 hover:border-blue-900 duration-200">
            <p className="text-[18px] text-black leading-[1.375rem] font-serif ">
              Class:
            </p>
            <select
              value={formDataRow.class}
              onChange={changeHandlerRow}
              name="class"
              className="bg-gray-300 h-[90%] w-full mx-2 text-black"
            >
              <option value="all">All</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="premium">Premium</option>
            </select>
          </label>
          <button
            // onClick={ clickModifyHandler}
            type="submit"
            className="font-serif mt-2 border border-black flex justify-center items-center p-2 rounded-xl h-[50px] w-[100px] hover:bg-slate-800
             hover:text-gray-50 duration-200 transition-all active:scale-95"
          >
            Modify
          </button>
        </form>
      </div>

      {/* Left wala */}
      <div className=" flex h-[calc(100vh-19%)]">
        <form
          className="bg-gray-300 border-r border-r-gray-400 w-[180px] flex-col"
          onSubmit={submitHandlercol}
        >
          <div className="flex-col item-center px-4">
            <div className="flex flex-col first-line: items-start  rounded-xl  ">
              <p className="text-[2rem] mb-1 leading-[1.375rem] font-serif mt-6">
                Time:
              </p>
              <div className="flex flex-col px-3 py-2 text-[1.2rem] font-serif gap-3">
                <label className="p-1 rounded-lg">
                  <input
                    type="checkbox"
                    value="morning"
                    onChange={changeHandlercol}
                    name="time"
                    checked={formDatacol?.time.includes("morning")} 
                    className="mr-1"                     
                  />
                  Morning
                </label>
                <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="afternoon"
                    onChange={changeHandlercol}
                    name="time"
                    checked={formDatacol?.time.includes("afternoon")}
                    className="mr-1"
                  />
                  Afternoon
                </label>
                <label className="rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="evening"
                    onChange={changeHandlercol}
                    name="time"
                    checked={formDatacol?.time.includes("evening")}
                    className="mr-1"
                  />
                  Evening
                </label>
                <label className=" rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="checkbox"
                    value="night"
                    onChange={changeHandlercol}
                    name="time"
                    checked={formDatacol?.time.includes("night")}
                    className="mr-1"
                  />
                  Night
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <p className="text-[2rem] leading-[1.375rem] mx-4 my-4 font-serif">
                Mode:
              </p>
              <div className="flex flex-col text-[1.2rem] font-serif ml-8 gap-3">
                <label className="rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="radio"
                    value="All"
                    onChange={changeHandlercol}
                    name="mode"
                    checked={formDatacol.mode === "All"}
                    className="mr-1 "
                  />
                   All
                </label>
                <label className="rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="radio"
                    value="Non-Stop"
                    onChange={changeHandlercol}
                    name="mode"
                    className="mr-1 "
                    checked={formDatacol.mode === "Non-Stop"}
                  />
                  Non-Stop
                </label>
                <label className="rounded-lg p-1 duration-150 transition-all">
                  <input
                    type="radio"
                    value="Connect"
                    onChange={changeHandlercol}
                    name="mode"
                    className="mr-1 "
                    checked={formDatacol.mode === "Connect"}
                  />
                  Connect
                </label>
              </div>
            </div>
            {/* <div>
              <p className="text-[1.2rem] leading-[1.375rem] ml-4 font-serif my-4 font-bold">Add Return Trip:</p>
              <input type="date" value={formDatacol.returnTrip} onChange={changeHandlercol} name="returnTrip" className="bg-gray-300 text-black ml-3 mt-3 border-2 border-blue-400 p-2 rounded-lg hover:border-blue-900" />
            </div> */}
            <button
              type="submit"
              className="font-serif ml-3 mt-[2rem] border border-black flex justify-center items-center p-2 rounded-xl h-[40px] w-[150px] hover:bg-slate-800
               hover:text-gray-50 duration-200 transition-all active:scale-95"
            >
              Modify
            </button>
          </div>
        </form>

        {/* Flight availability */}
        <div className="bg-gray-200 w-11/12 mx-auto overflow-y-scroll">
          <Outlet />
        </div>
      </div> 

    </div>
  );
};

export default UserDash;
