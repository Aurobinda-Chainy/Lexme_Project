import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div className="hidden md:block">
          <img
            src="../images/Logo.png"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Register</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="flex gap-4">
              <input
                type="password"
                placeholder="Password"
                className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-green-600 underline">
                  Terms and Conditions
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Login here{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
