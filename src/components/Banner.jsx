import React from "react";
import bannerImage from "../assets/headphone-M8ndZJ0u.png";
import "./banner.css";

function Banner() {
  return (
    <div>
      <div className="main-banner w-full h-full p-10  rounded-3xl opacity-1  items-center container ">
        <div className="container">
        <div className="lg:flex m-auto  relative items-center justify-center sm:justify-between  px-10">
        <div className="relative flex ">
          <img
            src={bannerImage}
            alt="banner"
            className="rounded-md object-cover w-auto "
          />
          </div>
          <div className="row justify-center order-2 sm:order-1 sm:w-full relative pr-4">
            <h4 className="text-2xl  md:text-3xl font-bold text-gray-50 w-full sm:text-center ">
              تلفیق زیبایی و کیفیت
            </h4>
        
            <h1 className="sm:text-5xl font-bold text-5xl  text-gray-50 uppercase animate-pulse sm:w-full  ">HEADPHONE</h1>
            <button className="bg-primary  hover:text-primary hover:bg-white duration-300 text-center text-white px-3 py-2 rounded-md font-semibold my-5 ">مشاهده همه</button>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
