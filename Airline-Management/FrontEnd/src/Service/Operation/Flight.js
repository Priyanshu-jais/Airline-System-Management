import { toast } from "react-hot-toast";
// import { setAllFlightData } from "../../Slices/flightSlice";
import { apiConnector } from "../apiConnector";
import { FlightEndpoint } from "../apis";
import { setAllBookingDetails, setFlightData } from "../../Slices/flightSlice";
import { navigate } from "react-router-dom";

const {
  GET_ALL_FLIGHT_DATA,
  CREATE_FLIGHT_DATA,
  MODIFY_FLIGHT_DATA,
  DELETE_FLIGHT_DATA,
  SEARCH_FLIGHT_DATA,
  GET_BOOKING_DETAILS,
} = FlightEndpoint;

export function createFlightData(formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Creating New Flight Route");
    try {
      const result = await apiConnector("POST", CREATE_FLIGHT_DATA, formData);
      // console.log("Response while creating flight.......", result.data);
      toast.dismiss(toastId);
      navigate("/dashboard/admin/flight-data");
    } catch (e) {
      toast.dismiss(toastId);
      console.log("error while creating flight", e);
    }
  };
}

export function getAllFlightData(navigate) {
  return async (dispatch) => {
    try {
      var toastId = toast.loading("Fetching Data...");
      //   console.log("Fetching All Flight Data");
      const result = await apiConnector("GET", GET_ALL_FLIGHT_DATA);
      //   console.log("Response of all Flight Data", result.data);
      if (!result.data?.success) {
        throw new Error(result.data?.message);
      }
      dispatch(setFlightData(result.data.response));
      localStorage.setItem(
        "allFlightData",
        JSON.stringify(result.data.response)
      );
      navigate("/dashboard/admin/flight-data");
      toast.dismiss(toastId);
    } catch (e) {
      console.log("Error while fetching the Data", e);
      toast.dismiss(toastId);
    }
  };
}

export function modifyFlightData(formData, navigate) {
  return async (dispathc) => {
    const toastId = toast.loading("Data Modification on the process...");
    try {
      const result = await apiConnector("POST", MODIFY_FLIGHT_DATA, formData);
      //  console.log("Response after ModifyFlightData...........", result);
      localStorage.removeItem("oneFlightData");
      toast.dismiss(toastId);
      toast.success("Modified Successfully");
      navigate("/dashboard/admin/flight-data");
    } catch (e) {
      console.log("Error while ModifyingFlightData", e);
      toast.dismiss(toastId);
    }
  };
}

export function deleteFlightData(flightId, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Data Modification on the process...");
    try {
      const result = await apiConnector("POST", DELETE_FLIGHT_DATA, {
        flightId,
      });
      console.log("Response while deletingflight....", result.data);
      toast.dismiss(toastId);
      toast.success("Deleted Successfully");
      navigate("/dashboard/admin/flight-data");
    } catch (e) {
      console.log("Error while deleting the flight", e);
      toast.dismiss(toastId);
    }
  };
}

export function searchFlightData(formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Searching flight");
    try {
      console.log("formData", formData);
      const response = await apiConnector("POST", SEARCH_FLIGHT_DATA, formData);
      console.log("Response After getting the flight data", response);
      dispatch(setFlightData(response?.data?.result));
      localStorage.setItem(
        "allFlightData",
        JSON.stringify(response?.data?.result)
      );
      console.log("afsdiakgf", response?.data?.result);
      toast.dismiss(toastId);
      navigate("/dashboard/user/flight-data");
    } catch (e) {
      console.log("Error while searching for flight data", e);
      toast.dismiss(toastId);
    }
  };
}

export function getBookinDetail(formData,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Getting details...");
    try {
      const result = await apiConnector("POST", GET_BOOKING_DETAILS, formData);
      console.log(
        "Response After getting the booking data...............................................",
        result.data
      );
      dispatch(setAllBookingDetails(result.data?.userDetail.customerBooking));
      localStorage.setItem(
        "allbookingDetails",
        JSON.stringify(result.data?.userDetail.customerBooking)
      );
      console.log("...............................................................................................................................................2nd")
      navigate("/dashboard/user/my-booking");
      toast.dismiss(toastId);
    } catch (e) {
      console.log("errr", e);
      toast.dismiss(toastId);
    }
  };
}
