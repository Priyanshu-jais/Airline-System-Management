import React, { useState } from "react";
import Footer from "./Footer";
const ContactForm = () => {
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
    <div className="w-full min-h-[100vh] flex flex-col relative pt-32 items-center" style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
      }}>
      {/* Contact Us */}
      <div
        className="w-[600px] p-6 bg-gray-900 bg-opacity-45 rounded-lg shadow-md "
        
      >
        <h2 className="text-2xl font-semibold mb- ml-48">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-white bg-transparent px-3 py-2 mt-1 text-gray-800 border border-white rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-white  bg-transparent px-3 py-2 mt-1 text-gray-800 border border-white rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-bold ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full text-white  bg-transparent px-3 py-2 mt-1 text-gray-800 border border-white rounded-md focus:outline-none focus:border-indigo-500"
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
      <div className="w-full mt-12">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ContactForm;
