const BookingCard = ({ data }) => {
  console.log("Data", data);
  const departureTime = new Date(
    data.bookinFlightId[0]?.departureTime
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const arrivalTime = new Date(
    data.bookinFlightId[0]?.arrivalTime
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // console.log("efjnejfd",departureTime , arrivalTime);
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="w-10/12 mx-auto border rounded-2xl  flex">
        <div className="w-8/12 border-r rounded-2xl border-dashed border-black  bg-slate-300 flex flex-col gap-5 items-center justify-between">
          <div className="w-full px-5  h-16 rounded-t-2xl bg-[rgb(116,151,205)] flex justify-evenly items-center ">
            <p className="font-extrabold text-xl">Boarding Paass</p>
            <img
              className="w-40 h-12"
              alt="..."
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1713451845/UploadOnly/on-white-background-plane-vector-logo-2RYCFG8_htozq6.png"
            ></img>
          </div>

          {/* Name */}
          <div className="w-11/12 mx-auto flex items-center ">
            <div className="w-8/12 flex flex-col gap-3">
              <div>
                Name:{" "}
                <span className="font-bold">{`${data.cusFirstName} ${data.cusLastName}`}</span>{" "}
              </div>

              <div className="flex justify-between ">
                <div className="w-1/2">
                  From:{" "}
                  <span className="font-bold">{`${data.bookinFlightId[0]?.flightFrom}`}</span>{" "}
                </div>
                <div className="w-1/2">
                  Gender: <span className="font-bold"> {data.gender}</span>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="w-1/2">
                  To:{" "}
                  <span className="font-bold">{`${data.bookinFlightId[0]?.flightTo}`}</span>
                </div>
                <div className="w-1/2">
                  Fare:{" "}
                  <span className="font-bold">{`${
                    data.bookinFlightId[0]?.fare / 100
                  }`}</span>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <img
                alt="..."
                className="w-[80px] h-[80px]"
                src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
              ></img>
            </div>
          </div>

          {/* Time */}
          <div className="w-11/12 mx-auto flex justify-between">
            <div className="w-1/3">
              Departure: <span className="font-bold">{departureTime}</span>
            </div>
            <div className="w-1/3">
              Arrival: <span className="font-bold">{arrivalTime}</span>
            </div>
            <div className="w-1/3">
              Seat: <span className="font-bold">1</span>{" "}
            </div>
          </div>
          <div className="w-full h-8 rounded-b-2xl bg-[rgb(116,151,205)]  flex items-center justify-center"></div>
        </div>
        <div className="w-4/12 flex flex-col gap-5  bg-slate-300">
          <div className="w-full h-16 rounded-t-2xl bg-[rgb(116,151,205)]  flex items-center justify-center">
            <p className="font-extrabold text-xl">Boarding Paass</p>
          </div>
          <div className="w-11/12 mx-auto">
            <p>
              Name:{" "}
              <span className="font-bold">{`${data.cusFirstName} ${data.cusLastName}`}</span>{" "}
            </p>
            <p>
              From:{" "}
              <span className="font-bold">{`${data.bookinFlightId[0]?.flightFrom}`}</span>
            </p>
            <p>
              To:{" "}
              <span className="font-bold">{`${data.bookinFlightId[0]?.flightTo}`}</span>
            </p>
          </div>
          <div>
            <div className="flex justify-between w-11/12 mx-auto">
              <p className="W-1/2">
                Gender: <span className="font-bold"> {data.gender}</span>
              </p>
              <p className="w-1/2">
                Fare:{" "}
                <span className="font-bold">{`${
                  data.bookinFlightId[0]?.fare / 100
                }`}</span>
              </p>
            </div>
            <div className="w-11/12 mx-auto flex justify-between">
              <div className="w-1/3">
                Departure: <span className="font-bold">{departureTime}</span>
              </div>
              <div className="w-1/3">
                Arrival: <span className="font-bold">{arrivalTime}</span>
              </div>
              <div className="w-1/3">
                Seat: <span className="font-bold">1</span>{" "}
              </div>
            </div>
          </div>
          <div className="w-full h-8 rounded-b-2xl bg-[rgb(116,151,205)]  flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
};
export default BookingCard;
