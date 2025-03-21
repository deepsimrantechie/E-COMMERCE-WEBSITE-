import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={assets.exchange_icon}
            className="w-12 h-12 mb-4"
            alt="Exchange Icon"
          />
          <p className="font-semibold text-lg mb-2">Easy Exchange Policy</p>
          <p className="text-gray-500">
            We offer a hassle-free exchange policy
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={assets.quality_icon}
            className="w-12 h-12 mb-4"
            alt="Quality Icon"
          />
          <p className="font-semibold text-lg mb-2">
            7 Days Easy Return Policy
          </p>
          <p className="text-gray-500">We provide a 7-day free return policy</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={assets.support_img}
            className="w-12 h-12 mb-4"
            alt="Support Icon"
          />
          <p className="font-semibold text-lg mb-2">Best Customer Support</p>
          <p className="text-gray-500">We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
