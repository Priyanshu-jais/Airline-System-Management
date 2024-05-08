import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookinDetail } from "../Service/Operation/Flight";
import BookingCard from "../Components/Core/UserDashboard/BookingCard";

const MyBooking = () => {
  const { user } = useSelector((state) => state.profile);
  // console.log("............", user._id);
  const formData = {
    userId: user._id,
  };
  const dispatch = useDispatch();


  const getBookingDetails = () => {
    dispatch(getBookinDetail(formData));
    localStorage.removeItem("bookingFlightDetail");
    localStorage.removeItem("cusData");
  };
  useEffect(() => {
    getBookingDetails();
  }, []);

  const { allbookingDetails } = useSelector((state) => state.flight);
  console.log("allbookingDetails...",allbookingDetails)
  return <div className="w-11/12 mx-auto pt-12">
    {
      allbookingDetails?.map((value,index)=>{
       return <BookingCard key={index} data={value}></BookingCard>
      })
    }
  </div>;
};
export default MyBooking;
