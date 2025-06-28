import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <img
        src={hospital.image}
        alt={hospital.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">{hospital.name}</h3>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
            <FcGoogle className="text-xl" />
            <span className="ml-1 text-gray-800">{hospital.rating}</span>
            <div className="ml-1 text-yellow-400">
              ★★★★☆
            </div>
          </div>

          <div className="flex gap-2">
            <button className="bg-gray-100 p-2 rounded-full">
              <FaPhoneAlt />
            </button>
            <button className="bg-gray-100 p-2 rounded-full">
              <FaMapMarkerAlt />
            </button>
          </div>
        </div>
      </div>

      <div className="flex border-t border-gray-200">
        <button className="w-1/2 py-2 text-gray-700 hover:bg-gray-50">
          Know More
        </button>
        <button className="w-1/2 bg-green-200 text-gray-900 hover:bg-green-300">
          Book An Appointment
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
