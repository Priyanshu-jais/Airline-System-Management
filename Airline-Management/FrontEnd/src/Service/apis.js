const BASE_URL = process.env.REACT_APP_BASE_URL;

export const categories ={
    CATEGORIES_API:BASE_URL + "/course/showAllCategory"
}


// AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/OtpGenerator",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/resetPasswordToken",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  }



//   FLIGHT-API


export const FlightEndpoint ={
    GET_ALL_FLIGHT_DATA: BASE_URL + "/flight/getAllFlightData",
    CREATE_FLIGHT_DATA: BASE_URL + "/flight/createFlightData",
    MODIFY_FLIGHT_DATA: BASE_URL + "/flight/modifyFlightData",
    DELETE_FLIGHT_DATA: BASE_URL + "/flight/deleteFlightData",
    SEARCH_FLIGHT_DATA: BASE_URL + "/flight/searchFlightData",
    GET_BOOKING_DETAILS: BASE_URL + "/flight/getAllBookedFlightDetail "
}



// Payment API
export const paymentEndPoint = {
  CREATE_PAYMENT: BASE_URL + "/payment/createOrder"
}
  

// User-FLight
export const userFlight = {
  ADD_FLIGHT_ID_IN_USER: BASE_URL + "/flight/addFlightIdInUser"
}


// CONTACT-US API
export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
  }


// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_All_USER_DETAILS_API: BASE_URL + "/profile/getAllUserDetails",
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}


// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateProfilePhoto",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteAccount",
}
