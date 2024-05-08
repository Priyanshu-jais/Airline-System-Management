import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createPayment } from "../../../Service/Operation/payment";
import { setCusDetail } from "../../../Slices/profile";
const BookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookingFlightDetail } = useSelector((state) => state.flight);
//   console.log("BookingFlightDet...........", bookingFlightDetail);
    // const {cusData} = useSelector((state)=> state.profile);

  const [formData, setFormData] = useState({
    cusFirstName: "",
    cusLastName: "",
    gender: "",
    age: "",
    country: "",
  });
  const changeHandler = (event) => {
    setFormData((old) => ({
      ...old,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("formData", formData);
    const userData ={
        ...formData,
    }
    // console.log("finalData", userData);
    // dispatch(setCusDetail(formData));
    // localStorage.setItem("cusData", JSON.stringify(formData));

    dispatch(createPayment(bookingFlightDetail, navigate,userData));
  };
  return (
    <div className="w-10/12 mx-auto py-10 ">
      <form
        onSubmit={submitHandler}
        className="w-9/12 relative mx-auto   border border-gray-400 rounded-lg"
      >
        <div className="w-[45%] h-[45%] top-[45%] left-[50%] absolute z-0 bg-[url(https://res.cloudinary.com/dkoezhi9u/image/upload/v1713451845/UploadOnly/on-white-background-plane-vector-logo-2RYCFG8_htozq6.png)] bg-contain bg-no-repeat"></div>
        <div className="w-11/12 mx-auto py-5 flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            Customer First Name:-
            <input
              type="text"
              required
              name="cusFirstName"
              onChange={changeHandler}
              placeholder="Enter Customer First Name"
              value={formData.cusFirstName}
              className="w-11/12 rounded-lg h-10 px-2 bg-gray-300 border border-black"
            ></input>
          </label>
          <label className="flex flex-col gap-2">
            Customer Last Name:-
            <input
              type="text"
              required
              name="cusLastName"
              onChange={changeHandler}
              placeholder="Enter Customer Last Name"
              value={formData.cusLastName}
              className="w-11/12 rounded-lg h-10 px-2 bg-gray-300 border border-black"
            ></input>
          </label>
          <div className="flex gap-3">
            <label className="flex flex-col gap-2 ">
              Gender :
              <select
                required
                onChange={changeHandler}
                name="gender"
                id="pet-select"
                className="w-full bg-gray-300 px-3 border border-black rounded-lg h-10"
              >
                <option value="None">--Please choose an option--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="Transgender">Transgender</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              Age:-
              <input
                type="number"
                min={1}
                max={120}
                required
                name="age"
                onChange={changeHandler}
                placeholder="Enter Age"
                value={formData.age}
                className="w-full rounded-lg h-10 px-2 bg-gray-300 border border-black"
              ></input>
            </label>
          </div>

          <label className="flex flex-col gap-2">
            Country:-
            <input
              type="text"
              required
              name="country"
              onChange={changeHandler}
              placeholder="Enter Country Name"
              value={formData.country}
              className="w-1/2 rounded-lg h-10 px-2 bg-gray-300 border border-black"
            ></input>
            <button
              type="submit"
              className="bg-blue-500 py-2 my-5 px-3 border border-black rounded-lg  font-bold"
            >
              Book
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};
export default BookingForm;
