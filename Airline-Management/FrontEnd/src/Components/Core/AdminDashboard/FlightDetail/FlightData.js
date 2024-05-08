import FlightCard from "./FlightCard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { getAllFlightData } from "../../../../Service/Operation/Flight";
import { useLocation } from "react-router-dom";
import NodataFound from "../../UserDashboard/NodataFound";
const FlightData = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { modifyData } = useSelector((state) => state.modify);

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

  const { allFlightData } = useSelector((state) => state.flight);
  console.log("allFlightData", allFlightData);

  if (location.pathname.split("/").at(-2) === "admin") {
    return (
      <div>
        {allFlightData?.map((value, index) => {
          return <FlightCard data={value} key={index}></FlightCard>;
        })}
        {allFlightData?.length === 0 && (
          <div>
            <NodataFound></NodataFound>
          </div>
        )}
      </div>
    );
  }

  // console.log("............Data", modifyData);
  // console.log("Flight Data", allFlightData);
  return (
    <div className="w-full px-4  ">
      {allFlightData?.map((value, index) => {
        if (modifyData !== null) {
          if (modifyData.time.length === 0) {
            if (modifyData.mode === "" || modifyData.mode === "All") {
              return <FlightCard data={value} key={index}></FlightCard>;
            } else {
              if (value.flightMode === modifyData.mode) {
                return <FlightCard data={value} key={index}></FlightCard>;
              }
            }
          } else {
            const departureTime = new Date(
              value.departureTime
            ).toLocaleTimeString([], {
              hour: "2-digit",
            });

            var time = "";
            if (departureTime < 10 && departureTime >= 4) {
              time = "morning";
            } else if (departureTime < 16 && departureTime >= 10) {
              time = "afternoon";
            } else if (departureTime < 22 && departureTime >= 16) {
              time = "evening";
            } else {
              time = "night";
            }
            if (modifyData?.time.includes(time)) {
              if (modifyData.mode === "" || modifyData.mode === "All") {
                return <FlightCard data={value} key={index}></FlightCard>;
              } else {
                if (value.flightMode === modifyData.mode) {
                  return <FlightCard data={value} key={index}></FlightCard>;
                }
              }
            } else {
            }
          }
        } else {
          return <FlightCard data={value} key={index}></FlightCard>;
        }
      })}
      {allFlightData?.length === 0 && (
        <div>
          <NodataFound></NodataFound>
        </div>
      )}
    </div>
  );
};
export default FlightData;
