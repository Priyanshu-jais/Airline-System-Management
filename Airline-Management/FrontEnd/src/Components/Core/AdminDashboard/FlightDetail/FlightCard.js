import { MdFlightLand } from "react-icons/md";
import { MdFlightTakeoff } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOneFlightData } from "../../../../Slices/flightSlice";
import UserCardOfFlight from "../../UserDashboard/UserCardFlight";
const FlightCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const data = props.data;
  const pathOfPage = location.pathname.split("/").at(-2);
  
  // console.log("kdbadfiaievk",modifyData)
  
  const departureTime = new Date(data.departureTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const arrivalTime = new Date(data.arrivalTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date1 = new Date(data.departureTime);
  const date2 = new Date(data.arrivalTime);

  const timeDifferenceInMilliseconds = Math.abs(
    date2.getTime() - date1.getTime()
  );

  // Convert milliseconds to hours and minutes
  const hoursDifference = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60)
  );
  let minutesDifference = Math.floor(
    (timeDifferenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
  // minutesDifference = minutesDifference.toString().padStart(2, "0");
  if (minutesDifference < 10) {
    minutesDifference = "0" + minutesDifference;
  }

  const modifyClickHandler = () => {
    // console.log("................",data);
    dispatch(setOneFlightData(data));
    localStorage.setItem("oneFlightData", JSON.stringify(data));
    navigate("/dashboard/admin/create-flight");
  };

  return (
    <div>
      <div
        className="w-full h-full border border-gray-300 py-3 flex flex-row items-center my-3 rounded-lg
     shadow-[0px_3px_10px_rgb(128,128,128)] transition-all duration-300 hover:bg-blue-300"
      >
        <div className="w-2/5 h-full flex flex-row items-center">
          <div className="w-2/12 text-center">
            <div className="font-bold">{departureTime}</div>
            <div>{data.flightFrom} </div>
          </div>
          <div className="w-6/12 h-full flex flex-row items-center justify-center ">
            <MdFlightTakeoff></MdFlightTakeoff>
            <div className=" w-14 mr-1 border-[0.1px] border-dashed border-red-800"></div>
            <div>{`${hoursDifference}:${minutesDifference}`}</div>
            <div className=" w-14 ml-1 border-[0.1px] border-dashed border-red-800"></div>
            <MdFlightLand></MdFlightLand>
          </div>

          <div className="w-2/12 text-center">
            <div className="font-bold">{arrivalTime}</div>
            <div>{data.flightTo} </div>
          </div>
        </div>

        {/* second Part */}
        <div className="w-1/5 h-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <MdFlight></MdFlight>
            {data.flightName}
          </div>
          <div>{data.flightMode}</div>
        </div>
   

    {/* Third Part */}
        {pathOfPage === "user" ? (
          <div className="w-2/5 h-full">
            <UserCardOfFlight data={data}></UserCardOfFlight>
          </div>
        ) : (
          <div className="w-2/5 h-full flex justify-around items-center">
            <div className="flex gap-3">
              <div>
                <p>Eco.</p>
                <div>{(data.economicalFare)}</div>
              </div>
              <div>
                <p>Pre.</p>
                <div>{data.premiumFare}</div>
              </div>
              <div>
                <p>Bus.</p>
                <div>{data.businessFare}</div>
              </div>
            </div>
            <button
              onClick={modifyClickHandler}
              className="py-3 px-5 bg-blue-600 rounded-lg text-white font-bold"
            >
              Modify
            </button>
          </div>
        )}
      </div>
      {/* <div>
        ljfbefbs
      </div> */}
    </div>
  );
};
export default FlightCard;
