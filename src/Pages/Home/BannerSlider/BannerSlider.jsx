import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
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
      className="mySwiper max-w-7xl mx-auto mt-10"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      {/* Slide 1 */}
      <SwiperSlide className="rounded-2xl overflow-hidden mb-14">
        <div className="h-auto md:h-[500px] flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-5 md:px-7 md:py-7 bg-gradient-to-r from-sky-200 to-sky-300 flex flex-col justify-center">
            <p className="flex items-center justify-center gap-2 bg-base-100 w-max py-2 px-4 rounded-2xl text-[15px] md:text-[17px] font-medium mx-auto md:mx-0">
              <FaReceipt /> Hot Recipes
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mt-3 md:mt-2 mb-4 leading-tight text-center md:text-left">
              Spicy delicious <br /> chicken wing
            </h1>
            <p className="text-gray-600 text-[15px] md:text-[17px] text-center md:text-left">
              This sweet and spicy baked chicken wings recipe is packed with
              flavor – perfect for parties or game day! Honey, sriracha, and soy
              create a delicious wing sauce.
            </p>
            {/* Time and Type */}
            <div className="flex flex-wrap gap-3 py-4 justify-center md:justify-start">
              <p className="flex gap-2 items-center text-gray-700 font-medium text-[14px] md:text-[18px] bg-base-300 px-3 py-1 rounded-2xl">
                <IoIosTime className="text-[18px]" /> 30 Minutes
              </p>
              <p className="flex gap-2 items-center text-gray-700 font-medium text-[14px] md:text-[18px] bg-base-300 px-4 py-1 rounded-2xl">
                <ImSpoonKnife /> Chicken
              </p>
            </div>
            {/* Profile & Video Button */}
            <div className="mt-5 flex flex-col md:flex-row gap-5 items-center">
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full"
                  src="https://i.ibb.co.com/2fXWJYZ/360-F-243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  alt="John Smith"
                />
                <div>
                  <p className="text-[16px] md:text-[18px] font-bold">
                    John Smith
                  </p>
                  <p className="text-gray-700 text-[14px] md:text-[16px]">
                    15 March 2024
                  </p>
                </div>
              </div>
              {/* Video Button */}
              <button className="flex gap-3 items-center justify-center text-white font-medium bg-black rounded-2xl py-2 px-4 text-[14px] md:text-[17px]">
                View Recipes <FaPlayCircle />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://i.ibb.co/fg78pHp/chickenwing.jpg"
              alt="Chicken Wing"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="rounded-2xl overflow-hidden">
        <div className="h-auto md:h-[500px] flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-5 md:px-7 md:py-7 bg-gradient-to-r from-sky-200 to-sky-300 flex flex-col justify-center">
            <p className="flex items-center justify-center gap-2 bg-base-100 w-max py-2 px-4 rounded-2xl text-[15px] md:text-[17px] font-medium mx-auto md:mx-0">
              <FaReceipt /> Hot Recipes
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mt-3 md:mt-2 mb-4 leading-tight text-center md:text-left">
              Spicy delicious <br /> Mutton curry
            </h1>
            <p className="text-gray-600 text-[15px] md:text-[17px] text-center md:text-left">
              Mutton curry is a dish of slow cooked mutton (goat or lamb) in a
              spicy gravy. This Indian-style mutton curry recipe is a step-by-step guide to making it tasty.
            </p>
            {/* Time and Type */}
            <div className="flex flex-wrap gap-3 py-4 justify-center md:justify-start">
              <p className="flex gap-2 items-center text-gray-700 font-medium text-[14px] md:text-[18px] bg-base-300 px-3 py-1 rounded-2xl">
                <IoIosTime className="text-[18px]" /> 60 Minutes
              </p>
              <p className="flex gap-2 items-center text-gray-700 font-medium text-[14px] md:text-[18px] bg-base-300 px-4 py-1 rounded-2xl">
                <ImSpoonKnife /> Mutton
              </p>
            </div>
            {/* Profile & Video Button */}
            <div className="mt-5 flex flex-col md:flex-row gap-5 items-center">
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full"
                  src="https://i.ibb.co.com/3yRzg3nD/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.jpg"
                  alt="Otila Smith"
                />
                <div>
                  <p className="text-[16px] md:text-[18px] font-bold">
                    Otila Smith
                  </p>
                  <p className="text-gray-700 text-[14px] md:text-[16px]">
                    6 May 2024
                  </p>
                </div>
              </div>
              {/* Video Button */}
              <button className="flex gap-3 items-center justify-center text-white font-medium bg-black rounded-2xl py-2 px-4 text-[14px] md:text-[17px]">
                View Recipes <FaPlayCircle />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://i.ibb.co.com/DDjBRshs/sanket-shah-eEWlcfydzQ4-unsplash.jpg"
              alt="Mutton Curry"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
