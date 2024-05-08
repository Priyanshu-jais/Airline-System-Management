// import logo from './logo.svg';
// import "./App.css";
import NavBar from "./Components/Common/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Otp from "./Pages/Otp";
import { Toaster } from "react-hot-toast";
import { SignupDataIdProvider } from "./Context/SignupData";
import AdminDashboard from "./Components/Core/AdminDashboard/AdminDash";
import AddFlight from "./Components/Core/AdminDashboard/FlightDetail/AddFlight.js";
import { useState } from "react";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import Error from "./Components/Common/Error";
import { UserDash } from "./Components/Core/UserDashboard/UserDash";
import FlightData from "./Components/Core/AdminDashboard/FlightDetail/FlightData";
import Payment from "../src/Pages/Payment";
import MyBooking from "./Pages/MyBooking";
import BookingForm from "./Components/Core/UserDashboard/BookingForm";
import About from "./Pages/About";
import OpenRoute from "./Components/Core/Auth/OpenRoute";

function App() {
  const [isLoggedIn, setISLoggedIn] = useState(false);

  return (
    <SignupDataIdProvider>
      <div>
        <div className="w-screen h-full flex flex-col ">
          <Toaster></Toaster>
          <NavBar isLoggedIn={isLoggedIn} setISLoggedIn={setISLoggedIn} />

          <Routes>
            <Route path="/" element={<Home setISLoggedIn={setISLoggedIn} />} />
            <Route
              path="/login"
              element={
                // <OpenRoute>
                  <Login />
                // {/* </OpenRoute> */}
              }
            />
            <Route path="/about" element={<About></About>} />
            <Route
              path="/contact"
              element={<Contact setISLoggedIn={setISLoggedIn} />}
            />
            <Route
              path="/signup"
              element={
                // <OpenRoute>
                  <Signup />
                //</OpenRoute> 
              }
            />

            <Route
              path="/verify-email"
              element={
                // <OpenRoute>
                  <Otp />
                // </OpenRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                // <PrivateRoute>
                  <Dashboard />
                // </PrivateRoute>

              }
            />

            <Route
              element={
                // <PrivateRoute>
                  <AdminDashboard></AdminDashboard>
                // </PrivateRoute>
              }
            >
              <Route
                path="/dashboard/admin/flight-data"
                element={<FlightData></FlightData>}
              ></Route>
              <Route
                path="/dashboard/admin/create-flight"
                element={<AddFlight></AddFlight>}
              ></Route>
            </Route>

            {/* User Dashboard */}
            <Route
              element={
                // <PrivateRoute>
                  <UserDash></UserDash>
                // </PrivateRoute>
              }
            >
              <Route
                path="/dashboard/user/flight-data"
                element={<FlightData></FlightData>}
              ></Route>
              <Route
                path="dashboard/user/my-booking"
                element={<MyBooking></MyBooking>}
              />
              <Route
                path="dashboard/user/booking-form"
                element={<BookingForm></BookingForm>}
              />
            </Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
        </div>
      </div>
    </SignupDataIdProvider>
  );
}

export default App;
