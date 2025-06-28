import React from "react";
import { FaSearch,FaCalendarAlt, FaRupeeSign } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <div className="flex gap-4 items-center mb-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h3 className="font-bold text-lg">{doctor.name}</h3>
          <p className="text-sm text-gray-600">{doctor.designation}</p>
          <p className="text-sm text-gray-500">{doctor.hospital}</p>
        </div>
      </div>

      <div>
        {doctor.specialties.map((spec, idx) => (
          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
            {spec}
          </span>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-700 mt-2 mb-4">
        <div className="flex items-center gap-1">
          <FaCalendarAlt /> {doctor.experience} Years
        </div>
        <div className="flex items-center gap-1">
            <FaRupeeSign /> {doctor.fee}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="border border-gray-400 text-sm py-1 rounded hover:bg-gray-100 cursor-pointer">View Full Profile</button>
        <button className="bg-green-200 text-sm py-1 rounded hover:bg-green-300 cursor-pointer">Book An Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;
