import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images/products/d5e7e9f0032a200b806b64d86a20bc6c.gif";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Alert, Slide } from "@mui/material"; // Import Alert and Slide for animation
import GoTop from "../components/GoTop";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Street, 0012");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to show the alert
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide alert after 3 seconds
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {showAlert && ( // Conditionally render the alert
        <Slide direction="left" in={showAlert} mountOnEnter unmountOnExit>
          <Alert severity="success" className="fixed top-4 right-4 z-50">
            Product removed from cart successfully!
          </Alert>
        </Slide>
      )}

      {cart.products.length > 0 ? (
        <div className="mt-5">
          <h3 className="text-3xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between items-center mt-4 font-bold">
                <p className="text-sm font-semibold">PRODUCTS</p>
                <div className="flex justify-around items-center space-x-8">
                  <p className="text-sm font-semibold">PRICE</p>
                  <p className="text-sm font-semibold">QUANTITY</p>
                  <p className="text-sm font-semibold">SUBTOTAL</p>
                  <p className="text-sm font-semibold">REMOVE</p>
                </div>
              </div>
              <div className="border-t-[1px] border-b-[1px] mt-3">
                {cart.products.map((p) => (
                  <div
                    key={p.id}
                    className="flex justify-between items-center p-3"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-20 h-20 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="font-semibold text-lg">{p.name}</h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center space-x-12">
                      <p className="text-gray-500">${p.price}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          onClick={() => dispatch(decreaseQuantity(p.id))}
                          className="text-xl px-1.5 border-r"
                        >
                          -
                        </button>
                        <p className="text-xl px-1">{p.quantity}</p>
                        <button
                          className="text-xl px-1.5 border-l"
                          onClick={() => dispatch(increaseQuantity(p.id))}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-gray-500">
                        ${(p.quantity * p.price).toFixed(2)}
                      </p>
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(p.id));
                          handleShowAlert(); // Show alert when product is removed
                        }}
                      >
                        <FaTrashAlt className="text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="font-semibold text-sm mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Item: </span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shopping: </p>
                <div className="flex items-center space-x-2">
                  <p className="ml-2">Shopping to</p>
                  <span className="text-xs font-bold">{address}</span>
                </div>
                <button
                  className="block text-blue-500 hover:underline transition-all duration-300 mt-1 ml-2"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="font-semibold w-full bg-red-600 text-white py-2 hover:bg-red-800 transition-all duration-300"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModelOpen}
              initialAddress={address}
            />
          </Modal>
        </div>
      ) : (
        <div>
          <img src={EmptyCart} alt="" className="mx-auto mt-5" />
          <Link
            to="/"
            className="block bg-[#ec6369] p-3 text-white rounded-md mx-auto mt-5 w-52 h-12 text-center hover:bg-white hover:text-[#ec6369] transition-all duration-300 font-bold"
          >
            Back To Home
          </Link>
        </div>
      )}
      <GoTop />
    </div>
  );
}

export default Cart;
