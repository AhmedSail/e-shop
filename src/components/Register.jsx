import React from "react";

function Register({ OpenLogin }) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form action="">
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700 mb-1">
            Name
          </label>
          <input
            placeholder="Enter Name"
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            placeholder="Enter Password"
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700 mr-1">Already Have an Account?</span>
        <button className="text-red-800" onClick={OpenLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
