import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-white text-xl font-semibold mb-2">Airline Management</h2>
            <p className="text-gray-400">© 2024 Airline Management. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Contact Us</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">support@airlinemanagement.com</a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">123-456-7890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
