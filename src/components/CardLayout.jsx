import React from "react";
import { opportunities } from "../assets/Departments/Opportunity";

const CardLayout = () => {
    return(
        <div className="max-w-7xl mx-auto px-6 py-5">
  <h2 className="text-3xl font-bold mb-8 text-gray-900">Explore Opportunities</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {opportunities.map((item, index) => (
      <div
        key={index}
        className="relative rounded-xl overflow-hidden h-[280px] shadow-lg group"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-70 p-6 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
          <button className="mt-4 self-start bg-green-200 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-300 transition">
            Click Here to Apply
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    )
}

export default CardLayout;