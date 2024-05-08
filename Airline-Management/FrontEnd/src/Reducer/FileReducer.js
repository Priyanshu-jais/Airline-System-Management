import authReducer from "../Slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../Slices/profile";
import modyfyReducer from "../Slices/modifySlice";
import flightReducer  from "../Slices/flightSlice"
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  modify: modyfyReducer,
  flight: flightReducer
});

export default rootReducer;
