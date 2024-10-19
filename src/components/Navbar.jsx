import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/ProductSlice";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لفتح وإغلاق القائمة

  const OpenSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };
  const OpenLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    dispatch(setSearchTerm(searchTerm)); // Dispatch the search term immediately
    navigate("filter-data"); // Navigate to the filter-data page
  };

  return (
    <nav className="bg-white shadow-sm">
      {/* upper nav */}
      <div className="container md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full border py-2 px-4"
            value={search}
            onChange={handleSearch} // Trigger search on every input change
          />
          <FaSearch className="absolute top-3 right-3 text-red-500" />
        </div>
        <div className="flex space-x-4 items-center relative">
          <Link to="/cart">
            <FaShoppingCart className="text-xl" />
            {products.length > 0 && (
              <span className="absolute top-0 text-sm bg-rose-600 w-3 left-3 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModelOpen(true)}
          >
            Login | Register
          </button>
          <button
            className="block md:hidden"
            onClick={() => {
              setIsModelOpen(true); // يفتح النموذج على الأجهزة المحمولة
              setIsMenuOpen(false); // يغلق القائمة (إذا كانت مفتوحة)
            }}
          >
            <FaRegUser />
          </button>
        </div>
      </div>

      {/* lower nav */}
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold md:hidden">
        <button
          onClick={() => toggleMenu()}
          className="transition-transform duration-300 transform active:rotate-90 focus:outline-none"
        >
          <IoMenu className="text-3xl" />
        </button>
      </div>

      {/* قائمة الروابط في الأجهزة المحمولة */}
      <div
        className={`md:hidden bg-white shadow-lg absolute left-0 right-0 z-10 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[168px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center py-2">
          <Link
            to="/"
            className=" font-semibold py-2 hover:bg-red-500 w-full text-center transition-all duration-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)} // إغلاق القائمة عند النقر
          >
            Home
          </Link>
          <Link
            to="/shop"
            className=" font-semibold py-2 hover:bg-red-500 w-full text-center transition-all duration-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)} // إغلاق القائمة عند النقر
          >
            Shop
          </Link>
          <Link
            to="/"
            className=" font-semibold py-2 hover:bg-red-500 w-full text-center transition-all duration-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)} // إغلاق القائمة عند النقر
          >
            Contact
          </Link>
          <Link
            to="/"
            className=" font-semibold py-2 hover:bg-red-500 w-full text-center transition-all duration-300 hover:text-white"
            onClick={() => setIsMenuOpen(false)} // إغلاق القائمة عند النقر
          >
            About
          </Link>
        </div>
      </div>
      {/* قائمة الروابط في الأجهزة الكبيرة */}
      <div className="hidden md:flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </div>

      <Modal setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen}>
        {isLogin ? (
          <Login OpenSignUp={OpenSignUp} />
        ) : (
          <Register OpenLogin={OpenLogin} />
        )}
      </Modal>
    </nav>
  );
}

export default Navbar;
