import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import GoTop from "../components/GoTop";

function Checkout({ setOrder }) {
  const [billingToggle, SetBillingToggle] = useState(true);
  const [shippingToggle, SetShippingToggle] = useState(false);
  const [paymentToggle, SetPaymentToggle] = useState(true);
  const [paymentMethod, SetPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const navigate = useNavigate();
  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "1234",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-conformation");
  };
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <div className="mt-5">
        <h3 className="text-3xl font-semibold mb-4">CHECK OUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className="md:w-2/3">
            <div className="border p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => SetBillingToggle(!billingToggle)}
              >
                <h3 className="text-lg font-semibold  mb-2">
                  Building Information
                </h3>
                {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={`space-y-4 ${billingToggle ? "" : "hidden"} pb-3`}
              >
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Phone
                  </label>
                  <input
                    className="w-full px-3 py-2 border"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone #"
                  />
                </div>
              </div>
            </div>
            {/* shipping */}
            <div className="border p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => SetShippingToggle(!shippingToggle)}
              >
                <h3 className="text-lg font-semibold  mb-2">
                  Shipping Information
                </h3>
                {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={`space-y-4 ${shippingToggle ? "" : "hidden"} pb-3`}
              >
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Address
                  </label>
                  <input
                    className="w-full px-3 py-2 border"
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    City
                  </label>
                  <input
                    className="w-full px-3 py-2 border"
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Zip Code
                  </label>
                  <input
                    className="w-full px-3 py-2 border"
                    type="number"
                    name="zip"
                    placeholder="Enter Zip Code"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        zip: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            {/* payment  */}
            <div className="border p-2 mb-6">
              <div
                className="flex items-center justify-between"
                onClick={() => SetPaymentToggle(!paymentToggle)}
              >
                <h3 className="text-lg font-semibold  mb-2">Payment Method</h3>
                {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={`space-y-4 ${paymentToggle ? "" : "hidden"} pb-3`}
              >
                <div className="flex items-center justify-start space-x-2 mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => SetPaymentMethod("cod")}
                  />
                  <label className="block text-gray-700" htmlFor="">
                    Cash On Delivery
                  </label>
                </div>
                <div className="flex items-center justify-start space-x-2 mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => SetPaymentMethod("dc")}
                  />
                  <label className="block text-gray-700" htmlFor="">
                    Debit Card
                  </label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit Card Information{" "}
                    </h3>
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Card #"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded"
                        placeholder="Enter Card Holder Name"
                        required
                      />
                    </div>
                    <div className="mb-4 flex items-center">
                      <div className="w-1/2">
                        <label
                          htmlFor=""
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          Expire Date
                        </label>
                        <input
                          type="text"
                          className="border p-2 w-full rounded"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="w-1/2 ml-2">
                        <label
                          htmlFor=""
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          className="border p-2 w-full rounded"
                          placeholder="CVV"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.products.map((p) => (
                <div className="flex justify-between" key={p.id}>
                  <div className="flex items-center">
                    <img
                      src={p.image}
                      alt=""
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="ml-4">
                      <h4 className="text-md font-semibold">{p.name}</h4>
                      <p className="text-gray-600">
                        &{p.price} * {p.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-800">&{p.price * p.quantity}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between ">
                <span>Total Price :</span>
                <span className="font-semibold">
                  &{cart.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <GoTop />
    </div>
  );
}

export default Checkout;
