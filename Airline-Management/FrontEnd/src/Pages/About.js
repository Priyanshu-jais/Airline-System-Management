import React, { useState } from "react";
import Footer from "../Components/Common/Footer";
const AboutUs = () => {
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
    <div className="w-[100vw] min-w-[450px] relative text-white pt-14  bg-gradient-to-br from-cyan-400 to-black overflow-hidden">
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
     {/* <img
        src="https://res.cloudinary.com/dppgyjdcg/image/upload/v1713214751/240_F_628871603_bK65eiNv6viD8mLfrWBYHSCijUk8rrfb-removebg-preview_tjp0jd.png"
        alt="Background"
        className="absolute bottom-6 left-3 w-65 h-55 bg-transparent"
      /> */}
      <div className='h-4/5 w-11/12 mt-2 ml-12'>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 mt-16 font-serif text-black">About Us Page</h1>
          <p className="text-center pt-10 mb-8 mt-14 text-black "><pre>"Welcome to our airline management system! Your safety is our priority as we dedicate ourselves to revolutionizing the way airlines operate,</pre> <pre>ensuring seamless efficiency and unparalleled customer service. Our comprehensive platform offers advanced scheduling, robust inventory management,</pre>  and streamlined passenger booking processes.With powerful analytics tools, we empower airlines to make data-driven decisions for optimal performance and profitability. Whether you're a small regional carrier or a global airline giant, our intuitive system is tailored to meet your unique needs, elevating your operations to new heights. Join us as we soar towards a future of innovation and excellence in aviation management."</p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 font-serif text-black underline">Our Team</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-10 ">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-10 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://res.cloudinary.com/du6cdpmzi/image/upload/v1710073017/samples/WhatsApp_Image_2023-12-20_at_01.53.34_jg6cyv.jpg" alt="Ankul" className="w-full " />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900 font-serif">Ankul Raja Patel</h2>
                <p className="text-gray-600 mb-2 font-serif">Backend Designer</p>
                <p className="text-gray-700 mb-4 font-semibold">
Ankul, the meticulous backend designer, crafts the intricate framework powering an airline system website, ensuring seamless functionality and reliability for travelers worldwide.</p>
                <p className="text-gray-700 mb-2 font-bold">ankulraja2002@gmail.com</p>
                <button className="bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition duration-300 ease-in-out">Contact</button>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://res.cloudinary.com/dppgyjdcg/image/upload/b_rgb:FFFFFF/c_crop,ar_1:1/v1713292641/pic3_nfvmpc.jpg" alt="Priyanshu" className="w-full " />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2  text-gray-900 font-serif">Priyanshu Jaiswal</h2>
                <p className="text-gray-600 mb-2 font-serif">Frontend Designer</p>
                <p className="text-gray-700 mb-4 font-semibold">
Priyanshu, the creative force behind the frontend, weaves intuitive interfaces and captivating designs for the airline system website, delivering a seamless user experience and simplifies the journey for every visitor.</p>
                <p className="text-gray-700 mb-2 font-bold">priyanshujaiswal184@gmail.com</p>
                <button className="bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition duration-300 ease-in-out">Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-10'>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://res.cloudinary.com/dppgyjdcg/image/upload/c_crop,ar_1:1/v1713293058/supriya_xdp5m0.jpg" alt="supriya" className="w-full " />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900 font-serif">Supriya</h2>
                <p className="text-gray-600 mb-2 font-serif">WebPage Designer</p>
                <p className="text-gray-700 mb-4 font-semibold">Supriya, the visionary designer, infuses the airline system website with elegance and functionality, harmonizing aesthetics with user experience to create a captivating digital journey through the skies.</p>
                <p className="text-gray-700 mb-2 font-bold">supriyakorrayi319@gmail.com</p>
                <button className="bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition duration-300 ease-in-out">Contact</button>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://res.cloudinary.com/dppgyjdcg/image/upload/c_crop,ar_1:1/v1713293058/puneeth_tze9lc.jpg" alt="puneeth" className="w-full " />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900 font-serif">Avula Puneeth Kumar Reddy</h2>
                <p className="text-gray-600 mb-2 font-serif">Website Tester</p>
                <p className="text-gray-700 mb-4 font-semibold">
Puneeth, the UI designer, blends aesthetics and usability, crafting the airline system website into an intuitive and visually appealing experience. With artistic ingenuity and technical finesse.</p>
                <p className="text-gray-700 mb-2 font-bold">puneethkumarreddy.avula@gmail.com</p>
                <button className="bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition duration-300 ease-in-out">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;