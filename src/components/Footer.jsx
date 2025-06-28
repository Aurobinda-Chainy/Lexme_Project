import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-4">Lexme Hospital</h3>
          <p className="text-sm text-gray-300">
            Dedicated to providing world-class healthcare with compassion and excellence.
          </p>
        </div>

 
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/departments" className="hover:text-white">Departments</a></li>
            <li><a href="/appointments" className="hover:text-white">Book Appointment</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/cardiology" className="hover:text-white">Cardiology</a></li>
            <li><a href="/neurology" className="hover:text-white">Neurology</a></li>
            <li><a href="/orthopedics" className="hover:text-white">Orthopedics</a></li>
            <li><a href="/emergency" className="hover:text-white">Emergency</a></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" /> +91 12345 67890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" /> contact@lexmehospital.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" /> Mumbai, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Lexme Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
