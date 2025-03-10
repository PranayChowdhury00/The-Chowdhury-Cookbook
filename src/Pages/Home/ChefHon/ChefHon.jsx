import React from 'react';

export default function ChefHon() {
  return (
    <div className="max-w-7xl mx-auto mb-14 flex flex-col lg:flex-row items-center justify-between gap-5 px-5">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 py-5">
          Everyone can be a chef in their own kitchen
        </h1>
        <p className="text-gray-500 text-base sm:text-lg">
          Empower your inner chef at home with creative culinary adventures. Discover the joy of cooking as you master your kitchen. Cooking is for everyone, no experience needed!
        </p>
        <button className="btn w-full sm:w-40 bg-black text-white font-medium mt-5 py-2 px-4 rounded-lg">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 bg-sky-200 rounded-2xl overflow-hidden">
        <img
          className="w-full h-auto sm:h-[400px] lg:h-[500px] object-cover"
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_9c748adbebee2bd3b483454655a7ccd6.webp"
          alt="chef img"
        />
      </div>
    </div>
  );
}
