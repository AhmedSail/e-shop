import React from "react";
import MenImg from "../assets/Images/58e10935d843225effc3396f5e1ee4bc-removebg-preview.png";
import WomanImg from "../assets/Images/ff944de73b920bb2db2058ccdcd70cae-removebg-preview.png";
import KidsImg from "../assets/Images/0afe3826545e18154063087e3f178d12-removebg-preview.png";
import GoTop from "./GoTop";
function CategorySection() {
  const categories = [
    {
      title: "Men",
      imageURl: MenImg,
    },
    {
      title: "Woman",
      imageURl: WomanImg,
    },
    {
      title: "Kids",
      imageURl: KidsImg,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-64 ">
      {categories.map((c, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer max-sm:mt-48"
        >
          <img
            src={c.imageURl}
            alt=""
            className="w-full h-96 object-cover rounded-lg shadow-sm object-top"
          />
          <div className="absolute top-16 left-12">
            <p className="text-2xl font-bold">{c.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
