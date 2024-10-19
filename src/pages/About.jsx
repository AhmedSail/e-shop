// About.js
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto my-10 px-4">
      {/* عنوان الصفحة */}
      <h1 className="text-3xl font-semibold mb-6">About Our Shop</h1>

      {/* وصف المحل */}
      <p className="text-lg text-gray-700 mb-8">
        Welcome to our e-shop, your ultimate destination for the latest in
        fashion, electronics, and home essentials. Our mission is to provide
        high-quality products with exceptional customer service, ensuring a
        seamless shopping experience.
      </p>

      {/* ميزات المحل */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* ميزة 1 */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">High Quality Products</h2>
          <p>
            We carefully select and test our products to ensure they meet the
            highest quality standards.
          </p>
        </div>

        {/* ميزة 2 */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 shadow-lg rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Customer Satisfaction</h2>
          <p>
            Your satisfaction is our priority. We go the extra mile to meet your
            expectations.
          </p>
        </div>

        {/* ميزة 3 */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Fast & Reliable Shipping</h2>
          <p>
            Enjoy fast and reliable delivery with every order, no matter where
            you are located.
          </p>
        </div>
      </div>

      {/* قسم الشكر */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Thank You for Choosing Us!
        </h3>
        <p className="text-gray-600">
          We are grateful for your trust and are committed to providing you with
          the best shopping experience possible.
        </p>
      </div>
    </div>
  );
}
