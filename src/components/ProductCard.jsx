import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductCard({ product, index, handleShowAlert }) {
  // Accept handleShowAlert as prop
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));

    // Show alert when product is added
    handleShowAlert();
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="relative">
        <div
          key={index}
          className="bg-white border p-4 rounded-lg shadow-md flex flex-col mx-2 mt-5 relative"
          data-aos="zoom-in-right"
        >
          <img
            src={product.image}
            alt=""
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <div className="flex items-center mt-2">
            <FaStar className="text-yellow-500"></FaStar>
            <FaStar className="text-yellow-500"></FaStar>
            <FaStar className="text-yellow-500"></FaStar>
            <FaStar className="text-yellow-500"></FaStar>
          </div>
          <div
            className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-500 cursor-pointer"
            onClick={(e) => handleAddToCart(e, product)}
          >
            <span className="group-hover:hidden">+</span>
            <span className="hidden group-hover:block">Add to cart</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
