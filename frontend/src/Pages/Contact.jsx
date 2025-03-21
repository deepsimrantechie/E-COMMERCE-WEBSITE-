import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Contact Us Title */}
      <div className="text-center mb-12">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>

      {/* Contact Content */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={assets.contact_img}
            alt="Contact Us"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-xl font-semibold text-gray-700">Our Store</h3>
          <p className="text-gray-600">
            548273 Willms Station <br />
            Gurgaon Sector-32, India
          </p>
          <p className="text-gray-500">
            Tel: 011-293898238 <br />
            Email: Shopify@gmail.com
          </p>

          <h3 className="text-xl font-semibold text-gray-700">
            Careers at Forever
          </h3>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-20">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;
