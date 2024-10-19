import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import GoTop from "../components/GoTop";

function Order({ order }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="mt-5 pt-4">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold mb-4">
            Thank you for your order
          </h1>
          <p className="text-gray-500">
            Your order has been placed successfully. You will receive an email
            confirmation shortly.
          </p>
        </div>
        <div className="flex flex-col space-y-4 bg-gray-100 p-4 rounded-md">
          <div>
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <p className="text-gray-500">Order Number: {order.orderNumber}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
            <p className="text-gray-500">{order.shippingInformation.city}</p>
            <div className="flex items-center justify-start space-x-1">
              <p className="text-gray-500">
                {order.shippingInformation.address},
              </p>
              <p className="text-gray-500">{order.shippingInformation.zip}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Items Ordered</h3>
            {order.products.map((p, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center justify-between">
                  <div className="flex justify-start items-center">
                    <p className="text-gray-500">{p.name}</p>
                    <p className="text-gray-500">(x{p.quantity})</p>
                  </div>
                  <div>
                    <p className="font-semibold">${p.price * p.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 mt-4">Total Price:</p>
            <p className="font-semibold">${order.totalPrice}</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-green-500 p-2 text-white transition-all duration-300 hover:bg-green-800 mr-4">
            Track Order
          </button>
          <button
            className="bg-red-500 p-2 text-white transition-all duration-300 hover:bg-red-800"
            onClick={() => navigate("/")}
          >
            Continuo Shopping
          </button>
        </div>
      </div>
      <GoTop />
    </div>
  );
}

export default Order;
