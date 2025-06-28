import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { hospitalDetails } from "../assets/Hospitals/Details";
import HospitalCard from "../components/HospitalCard";
import Footer from "../components/Footer";

const Hospitals = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-1">Our Hospital Network</h2>
      <p className="text-center text-gray-600 mb-6">Expert Care Near You</p>

      <div className="flex justify-center mb-6">
        <input type="text" placeholder="Search hospitals" className="border rounded-l-md px-4 py-2 w-80 focus:outline-none" />
     
      <button className="border border-1-0 rounded-r-md px-4 py-2 bg- white"><FaSearchLocation /></button>
       </div>

       <div className="flex flex-wrap gap-2 justify-center mb-8">
        {["All Locations", "Bangalore", "Delhi NCR", "Mumbai", "Amritsar", "Faridabad", "Gurgaon", "Manesar", "Jaipur"].map((loc, idx) =>(
          <button key={idx} className={`px-4 py-2 rounded border ${loc === "All Locations" ? "bg-green-200" : "bg-white"}`}>{loc}</button>
        ))}
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hospitalDetails.map((hospital, idx) => (
          <HospitalCard key={idx} hospital={hospital}/>
        ))}
       </div>
        <Footer/>
    </div>
  )
};
export default Hospitals;