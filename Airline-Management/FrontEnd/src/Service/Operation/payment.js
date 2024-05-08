import { apiConnector } from "../apiConnector";
import { paymentEndPoint } from "../../Service/apis";
import { toast } from "react-hot-toast";
import { userFlight } from "../apis";
import { useSelector } from "react-redux";
import {getBookinDetail} from "./Flight"
const { CREATE_PAYMENT } = paymentEndPoint;

const { ADD_FLIGHT_ID_IN_USER } = userFlight;
export function createPayment(bookingDetail, navigate,userData, e) {

  return async (dispatch) => {
    const amount = bookingDetail.amount;
    const currency = bookingDetail.currency;
    const toastId = toast.loading("");
    try {
      const result = await apiConnector("POST", CREATE_PAYMENT, { bookingDetail });
      console.log("Response Commong for Create Payment ....", result.data);
      const order_Id = result.data.order.id;
      var response = result.data;
      toast.dismiss(toastId);
      var options = {
        key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: "APPS AirLine", //your business name
        description: "Flight Booking",
        image:
          "https://res.cloudinary.com/dkoezhi9u/image/upload/v1708422225/samples/Logo_llkrfe.png",
        order_id: order_Id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (result) {
          const body = {
            ...result,
          };

          const validateRes = await fetch(
            "http://localhost:4000/api/v1/payment/validateOrder",
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const jsonRes = await validateRes.json();
          console.log(jsonRes);
          //   console.log(jsonRes.success);
          if (jsonRes.success) {
            toast.success(jsonRes.message);
            // console.log(".......................", response);
            // console.log(".......................", response.order.amount);
            // console.log(".......................", response.order.receipt);
            // const formData =response.order.notes;

            const formData = { 
              flightId: response.order.notes.flightId,
              userId: response.order.notes.userId,
              amount: response.order.amount,
              receipt: response.order.receipt,
              userData: userData
             };
            updateFlightInUser(formData, navigate,dispatch);
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: "Web Dev Matrix", //your customer's name
          email: "webdevmatrix@example.com",
          contact: "7898631306", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
      });
      rzp1.open();
      e.preventDefault();
    } catch (e) {
      console.log("Error creating payment", e);
      toast.dismiss(toastId);
    }
  };
}

async function updateFlightInUser(formData, navigate,dispatch) {
  try {
    console.log(formData);
    // console.log(formData.flightId);
    // console.log(formData.userId);
    console.log("Yes.........................");
    try {
      const output = await apiConnector(
        "POST",
        ADD_FLIGHT_ID_IN_USER,
        formData
      );
      // console.log("Response", output);
      // console.log("Response", output.data);
      console.log("...............................................................................................................................................yes")
      dispatch(getBookinDetail(formData,navigate));
      // navigate("/dashboard/user/my-booking");
    } catch (e) {
      console.log("Error add flightId", e);
    }
  } catch (e) {
    console.log("err", e);
  }
}
