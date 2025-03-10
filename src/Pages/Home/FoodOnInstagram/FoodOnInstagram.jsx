import React from "react";
import { BsThreeDots } from "react-icons/bs"; // Three dots icon for options
import { FaInstagram } from "react-icons/fa";

const FoodOnInstagram = () => {
  return (
    <div className="bg-sky-50 mb-14 py-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 py-3">
            Check out our Latest Foods on Instagram
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-500">
            Explore our latest mouthwatering creations! Follow us on Instagram
            for delicious food updates, irresistible flavors, and culinary inspiration.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Instagram Post Layout */}
          {[
            {
              img: "https://i.ibb.co/bpKdcm0/derek-duran-Jz4-QMh-Lv-Ggw-unsplash.jpg",
              date: "December 26",
            },
            {
              img: "https://i.ibb.co/F4qfTwB/krista-stucchio-2-CZ0-Zpuj-g-U-unsplash.jpg",
              date: "October 21",
            },
            {
              img: "https://i.ibb.co/8LPsRwM/chris-tweten-FK-UKNip0p-E-unsplash.jpg",
              date: "September 11",
            },
            {
              img: "https://i.ibb.co/MDx3xC4/pancake.jpg",
              date: "September 21",
            },
          ].map((post, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-lg">
              {/* Post Header */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://i.pravatar.cc/50"
                    alt="Profile"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-900">FoodieDelight</h2>
                    <p className="text-gray-500 text-sm">New York, USA</p>
                  </div>
                </div>
                <BsThreeDots className="text-gray-600 text-xl cursor-pointer" />
              </div>

              {/* Post Image */}
              <img
                className="w-full h-64 md:h-72 object-cover rounded-lg"
                src={post.img}
                alt="Delicious food"
              />

              {/* Post Description */}
              <div className="p-4">
                <p className="text-gray-700">
                  Savor the flavors of our latest dish! 🍽️✨ #Delicious #FoodLover
                </p>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Button */}
        <div className="text-center mt-8">
          <button className="bg-black text-white font-bold px-5 py-3 rounded-lg flex items-center gap-2 mx-auto">
            Visit Our Instagram <FaInstagram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodOnInstagram;
