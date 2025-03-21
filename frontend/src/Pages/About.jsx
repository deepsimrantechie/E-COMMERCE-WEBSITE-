import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* About Us Title */}
      <div className="text-center mb-12">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>

      {/* About Us Content */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={assets.about_img}
            alt="About Us"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h3 className="text-xl font-semibold text-gray-800">OUR MISSION</h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We are dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Title */}
      <div className="text-center my-16">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>

      {/* Why Choose Us Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quality Assurance Card */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quality Assurance
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>

        {/* Convenience Card */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Convenience
          </h3>
          <p className="text-gray-600 leading-relaxed">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        {/* Customer Service Card */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Exceptional Customer Service
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our team of dedicated professionals is here to assist you every step
            of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
