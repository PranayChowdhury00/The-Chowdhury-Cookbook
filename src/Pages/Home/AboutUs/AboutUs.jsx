import React from "react";

const AboutUs = () => {
  return (
    <section id="aboutUs" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          About <span className="text-sky-400">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img
              src="https://www.caterermiddleeast.com/2021/05/iLcb7T8Z-Asia-Asia-1.jpg"
              alt="About Us"
              className="w-full h-auto max-w-lg rounded-lg shadow-lg"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg mb-6">
              Our mission is to provide the best culinary experiences through healthy, delicious,
              and easy-to-make recipes that inspire people to live a vibrant and fulfilling life.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Who We Are</h3>
            <p className="text-gray-600 text-lg">
              We are a passionate team of chefs, food enthusiasts, and nutritionists who believe that
              food is the key to a healthy and happy life. We strive to make the world a better place by
              sharing our love for wholesome and tasty food with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
