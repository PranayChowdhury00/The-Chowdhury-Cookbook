import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-sky-400 mb-3">The Chowdhury Cookbook</h2>
          <p className="text-gray-400">
            Discover delicious recipes, cooking tips, and food inspiration for every meal.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-sky-400 transition duration-300">Home</a></li>
            <li><a href="#recipes" className="hover:text-sky-400 transition duration-300">Recipes</a></li>
            <li><a href="#blog" className="hover:text-sky-400 transition duration-300">Blog</a></li>
            <li><a href="#contact" className="hover:text-sky-400 transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-sky-400 text-gray-400 text-2xl transition duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400 text-gray-400 text-2xl transition duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-sky-400 text-gray-400 text-2xl transition duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400 text-gray-400 text-2xl transition duration-300"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} <span className="text-sky-400">Foodie Delight</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
