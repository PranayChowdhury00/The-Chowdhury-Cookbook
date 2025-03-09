import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import { FaPlayCircle, FaReceipt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";

const BannerSlider = () => {
  const swiperRef = useRef(null); 
  return (
    <Swiper
      navigation
      modules={[Navigation, Autoplay]} 
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      loop={true} 
      className="mySwiper max-w-7xl mx-auto mt-10 "
      onSwiper={(swiper) => {
        swiperRef.current = swiper; // Store the Swiper instance in the ref
      }}
      onMouseEnter={() => {
        // Pause autoplay on hover
        if (swiperRef.current) swiperRef.current.autoplay.stop();
      }}
      onMouseLeave={() => {
        // Resume autoplay on mouse leave
        if (swiperRef.current) swiperRef.current.autoplay.start();
      }}
    >
      <SwiperSlide className="rounded-2xl overflow-hidden mb-14">
        <div className="h-[500px] flex">
          {/* Text */}
          <div className="w-1/2 px-7 py-7 bg-gradient-to-r from-sky-200 to-sky-300">
            <p className="flex items-center justify-center gap-2 bg-base-100 w-34 py-2 rounded-2xl text-[17px] font-medium">
              <FaReceipt /> Hot Recipes
            </p>
            <h1 className="text-6xl font-bold mt-2 mb-4 leading-tight">
              Spicy delicious <br /> chicken wing
            </h1>
            <p className="text-gray-600 text-[17px] leading-tight">
              This sweet and spicy baked chicken wings recipe is packed with flavor – perfect for parties or game day! Honey, sriracha, and soy create a delicious wing sauce.
            </p>
            {/* Time and food type */}
            <div className="w-1/2 flex gap-5 py-6">
              <p className="flex gap-2 items-center text-gray-700 font-medium mt-2 text-[18px] bg-base-300 px-3 py-1 rounded-2xl">
                <IoIosTime className="text-[18px]" /> 30 Minutes
              </p>
              <p className="flex gap-2 items-center text-gray-700 font-medium mt-2 text-[18px] bg-base-300 px-4 py-1 rounded-2xl">
                <ImSpoonKnife /> Chicken
              </p>
            </div>
            {/* person & video */}
            <div className=" mt-5 flex gap-10 ">
              {/* person and date */}
              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://i.ibb.co.com/2fXWJYZ/360-F-243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  alt=""
                />
                {/* name & date */}
                <div className="">
                  <p className="text-[18px] font-bold">John Smith</p>
                  <p className=" text-gray-700">15 March 2024</p>
                </div>
              </div>
              {/* video */}
              <div className="">
                <button className="flex gap-3 items-center justify-center text-white font-medium bg-black rounded-2xl py-2 px-4">
                  View Recipes <FaPlayCircle />
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 overflow-hidden">
            <img
              className="object-cover w-full h-full "
              src="https://i.ibb.co/fg78pHp/chickenwing.jpg"
              alt="Chicken Wing"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Repeat for other slides */}
      <SwiperSlide className="rounded-2xl overflow-hidden">
        <div className="h-[500px] flex">
          {/* Text */}
          <div className="w-1/2 px-7 py-7 bg-gradient-to-r from-sky-200 to-sky-300">
            <p className="flex items-center justify-center gap-2 bg-base-100 w-34 py-2 rounded-2xl text-[17px] font-medium">
              <FaReceipt /> Hot Recipes
            </p>
            <h1 className="text-6xl font-bold mt-2 mb-4 leading-tight">
              Spicy delicious <br /> Mutton curry
            </h1>
            <p className="text-gray-600 text-[17px] leading-tight">
              Mutton curry is a dish of slow cooked mutton (goat or lamb) in a spicy gravy. This Indian style mutton curry recipe is a step by step guide to make it tasty.
            </p>
            {/* Time and food type */}
            <div className="w-1/2 flex gap-5 py-6">
              <p className="flex gap-2 items-center text-gray-700 font-medium mt-2 text-[18px] bg-base-300 px-3 py-1 rounded-2xl">
                <IoIosTime className="text-[18px]" /> 60 Minutes
              </p>
              <p className="flex gap-2 items-center text-gray-700 font-medium mt-2 text-[18px] bg-base-300 px-4 py-1 rounded-2xl">
                <ImSpoonKnife /> Mutton
              </p>
            </div>
            {/* person & video */}
            <div className=" mt-5 flex gap-10 ">
              {/* person and date */}
              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full"
                  src="https://i.ibb.co.com/3yRzg3nD/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.jpg"
                  alt=""
                />
                {/* name & date */}
                <div className="">
                  <p className="text-[18px] font-bold">Otila Smith</p>
                  <p className=" text-gray-700">6 May 2024</p>
                </div>
              </div>
              {/* video */}
              <div className="">
                <button className="flex gap-3 items-center justify-center text-white font-medium bg-black rounded-2xl py-2 px-4">
                  View Recipes <FaPlayCircle />
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 overflow-hidden">
            <img
              className="object-cover w-full h-full "
              src="https://i.ibb.co.com/DDjBRshs/sanket-shah-eEWlcfydzQ4-unsplash.jpg"
              alt="Mutton Curry"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Additional slides follow the same structure */}
    </Swiper>
  );
};

export default BannerSlider;