import { useEffect, useState } from "react";
import { PiArrowsLeftRightThin } from "react-icons/pi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLocation,matchPath } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import {setOneFlightData} from "../../../Slices/flightSlice"
import { searchFlightData } from "../../../Service/Operation/Flight";
import { getAllFlightData } from "../../../Service/Operation/Flight";
import { toast } from "react-hot-toast";


const AdminDash = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {allFlightData} = useSelector((state)=>state.flight)
  console.log("ghjkl",allFlightData[0])
  const [referesh,setRefersh] = useState(true);
  const [formData, setFormData] = useState({
    flightFrom: allFlightData[0]?.flightFrom ?? "",
    flightTo: allFlightData[0]?.flightTo ?? "",
  });
  const getAllFlight = async () => {
    try {
       dispatch(getAllFlightData());
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    if (location.pathname.split("/").at(-2) !== "user") {
      getAllFlight();
      console.log("idhar")
    }
  }, []);
  const changeHandler = (event) => {
    setFormData((old) => ({
      ...old,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submit", formData);
    dispatch(searchFlightData(formData));
  };

  const backHandler =()=>{
    setRefersh(!referesh)
    localStorage.removeItem("oneFlightData");
    dispatch(setOneFlightData(null))

  }
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };


  // useEffect(()=>{
  // },[referesh])

  const swapHandler =()=>{
    let temp = formData.flightFrom;
    formData.flightFrom = formData.flightTo;
    formData.flightTo = temp
  }

  return (
    <div className="w-screen min-h-screen bg-slate-200 pt-8 border border-blu-500">
      <div className="w-full mx-auto py-12 relative">
        
        <form
          onSubmit={submitHandler}
          className="w-full bg-indigo-500 py-2 mt-3  relative mx-auto flex flex-row justify-center items-center"
        >
          <div className="w-1/2 flex flex-row items-center justify-center">
          <input
            onChange={changeHandler}
            placeholder="From"
            name="flightFrom"
            value={formData.flightFrom}
            className="h-10 shadow shadow-fuchsia-200  rounded-lg px-3 w-40 "
          ></input>
          <button onClick={swapHandler} className="w-1/2 flex justify-center items-center text-5xl">
            <PiArrowsLeftRightThin></PiArrowsLeftRightThin>
          </button>
          <input
            onChange={changeHandler}
            placeholder="TO"
            name="flightTo"
            value={formData.flightTo}
            className="h-10 shadow shadow-fuchsia-200   rounded-lg px-3 w-40"
          ></input>
          <button
            type="submit"
            className="  ml-10 py-2 active:scale-95 hover:bg-yellow-400 px-4 bg-yellow-300 text-black rounded-lg font-bold"
          >
            Submit
          </button>
          </div>
        </form>
        <Link to={"/dashboard/admin/create-flight"}>
          <button onClick={backHandler} className="absolute right-16 bottom-3 ml-10 py-3 px-4 bg-blue-900 text-white rounded-lg font-bold  hover:bg-blue-600 hover:border-blue-800 active:scale-95">
            Add Flight
          </button>
        </Link>
        <Link to={"/dashboard/admin/flight-data"}>
          <button onClick={backHandler} className={`${matchRoute("/dashboard/admin/create-flight") ? ("font-bold flex justify-center items-center gap-2"):("invisible")} `}>
            <FaArrowLeftLong></FaArrowLeftLong> Back
          </button>
        </Link>
      </div>
      <div className="w-full h-[570px] bg-slate-200  pt-10 mx-auto overflow-y-scroll">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default AdminDash;
