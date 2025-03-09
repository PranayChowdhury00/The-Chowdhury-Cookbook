import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaReceipt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";

const BannerSlider = () => {
  return (
    <Swiper navigation modules={[Navigation]} className="mySwiper max-w-7xl mx-auto mt-10 ">
      <SwiperSlide className="">
        <div className="bg-gradient-to-r from-sky-200 to-sky-500 h-[400px]">
            {/* text */}
            <div className="w-1/2 px-5 py-5">
                <p className="flex items-center justify-center gap-2 bg-base-100 w-34 py-2 rounded-2xl text-[17px] font-medium"><FaReceipt /> Hot Recipes</p>
                <h1 className="text-6xl font-bold mt-2 mb-4 leading-tight">Spicy delicious <br /> chicken wing</h1>
                <p className="text-gray-600 text-[17px] leading-tight">This sweet and spicy baked chicken wings recipe is packed with flavor – perfect for parties or game day! Honey, sriracha, and soy create a delicious wing sauce </p>
                {/* time and food type */}
                <div className="w-1/2">
                    <p className="flex gap-2 items-center text-gray-700 font-medium mt-2 text-[18px]"><IoIosTime className="text-[18px]"/> 30 Minutes</p>
                    <p><ImSpoonKnife /> Chicken</p>
                </div>
            </div>
            {/* img */}
            <div className=""></div>
        </div>
        </SwiperSlide>
      <SwiperSlide><img src="banner2.jpg" alt="Banner 2" /></SwiperSlide>
      <SwiperSlide><img src="banner3.jpg" alt="Banner 3" /></SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
