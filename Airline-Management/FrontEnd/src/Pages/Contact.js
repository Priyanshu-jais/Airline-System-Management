import React, { useState } from "react";
import Footer from "../Components/Common/Footer";
const ContactUs = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="w-[100vw] h-[100vh] min-w-[450px] relative text-white py-12  bg-gradient-to-br from-cyan-500 to-black overflow-hidden">
     <img
        src="https://res.cloudinary.com/dppgyjdcg/image/upload/v1713213751/240_F_372163037_CMA1dWvud8j2K5mN0moCEjvTbneZHqHJ-removebg-preview_vsyp6d.png"
        alt="Background"
        className="absolute top-6 left-3 w-65 h-55 bg-transparent"
      />
     <img
        src="https://res.cloudinary.com/dppgyjdcg/image/upload/a_-90/a_90/a_hflip/v1713213751/240_F_372163037_CMA1dWvud8j2K5mN0moCEjvTbneZHqHJ-removebg-preview_vsyp6d.png"
        alt="Background"
        className="absolute top-6 right-3 w-65 h-55 bg-transparent "
      />
    
      <div className='h-4/5 w-11/12 mt-20 ml-12'>
         <div
        className="w-[600px] p-6 bg-gray-900 bg-opacity-45 rounded-lg shadow-md mx-auto">
        <h2 className="text-2xl font-semibold mb- ml-48 text-green-300">Ask any Query!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold text-green-300">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-white bg-transparent px-3 py-2 mt-1 hover:text-gray-800 border border-white rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-300 font-bold ">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-white  bg-transparent px-3 py-2 mt-1 hover:text-gray-800 border border-white rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-green-300 font-bold ">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full text-white  bg-transparent px-3 py-2 mt-1 hover:text-gray-800 border border-white rounded-md focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
     <div className="absolute bottom-0 w-full mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ContactUs;