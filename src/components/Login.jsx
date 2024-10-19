import React from "react";

function Login({ OpenSignUp }) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form action="">
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            placeholder="Enter Email"
            type="email"
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
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="" className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-red-800">
            Forget Password?
          </a>
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700 mr-1">Don't Have an Account?</span>
        <button className="text-red-800" onClick={OpenSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
