import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-50 mt-40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">BigMarket</h1>
            <p className="text-gray-600">
              Lorem ipsum is simply a dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Company Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600">+12 3928901280</li>
              <li className="text-gray-600">ltcontact@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider and Copyright Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © 2024 BigMarket. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
