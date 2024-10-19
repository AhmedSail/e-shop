import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">e-Shop</h3>
          <p className="mt-4">
            Your one-step fot your needs. Shop with use and experience the best
            online shopping experiences
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-bold ">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold ">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank" // يفتح الرابط في نافذة جديدة
              rel="noopener noreferrer" // يحمي من الثغرات الأمنية
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
          <form action="" className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-l-lg"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600 hover:bg-red-700 transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 e-shop All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a className="hover:underline" href="">
              Privacy Policy
            </a>
            <a className="hover:underline" href="">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
