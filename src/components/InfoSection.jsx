import React from "react";
import {
  FaHeadset,
  FaLock,
  FaShippingFast,
  FaShoppingCart,
  FaTag,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

function InfoSection() {
  const infoItems = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      desorption: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset />,
      title: "Support 24/7",
      desorption: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBill1Wave />,
      title: "100% Mony Back",
      desorption: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock />,
      title: "Payment Secure",
      desorption: "Your payment information is safe with us",
    },
    {
      icon: <FaTag />,
      title: "Discount",
      desorption: "Enjoy the best prices on our products",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="text-red-600 text-3xl">{item.icon}</span>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desorption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection;
