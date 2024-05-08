import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oneFlightData: localStorage.getItem("oneFlightData")
    ? JSON.parse(localStorage.getItem("oneFlightData"))
    : "",
  allFlightData: localStorage.getItem("allFlightData")
    ? JSON.parse(localStorage.getItem("allFlightData"))
    : "",
  allbookingDetails: localStorage.getItem("allbookingDetails")
    ? JSON.parse(localStorage.getItem("allbookingDetails"))
    : [],
  bookingFlightDetail: localStorage.getItem("bookingFlightDetail")
    ? JSON.parse(localStorage.getItem("bookingFlightDetail"))
    : "",
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlightData(state, value) {
      state.allFlightData = value.payload;
    },
    setOneFlightData(state, value) {
      state.oneFlightData = value.payload;
    },
    setAllBookingDetails(state, value) {
      state.allbookingDetails = value.payload;
    },
    setBookingDetails(state, value) {
      state.bookingFlightDetail = value.payload;
    },
  },
});
export const {
  setFlightData,
  setOneFlightData,
  setAllBookingDetails,
  setBookingDetails,
} = flightSlice.actions;
export default flightSlice.reducer;
