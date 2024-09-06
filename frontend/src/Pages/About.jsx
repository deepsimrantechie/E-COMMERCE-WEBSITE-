import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. our journey began with a
            sample idea : to provide a platform where customer cas easily
            discover,explore and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception ,we've worked tirelessly to curate a diverse
            selection of high -quality products that cate to every taste and
            prefernce .from fashion and beauty to electronics and home
            essentitals, we offer an extensive collection sourced from trusted
            brands and suppliers
          </p>
          <b className="text-gray-800">OUR MISSION </b>
          <p>
            our mission at forever is to empower customer with choice ,convience
            with choice ,convience and confidence ,We dedicated to providing a
            seamless shopping experinces that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US "} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each products to ensure it meets out
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>convience :</b>
          <p className="text-gray-600">
            with our user-friendly interface and hassale-free ordering process
            ,shopping has never been easier{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">
            our team of dedicated proffessional is here to assist you the way,
            ensuring your satisfaction is our top priority
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
