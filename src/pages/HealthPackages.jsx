import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getHealthPackages } from "../assets/Health/packagesData";
import PackageCard from "../components/PackageCard";
import Footer from "../components/Footer";

const HealthPackages = () => {
  const packages = getHealthPackages();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPackages = packages.filter((pkg) =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center w-full md:w-1/2 border px-4 py-2 rounded-md">
          <input
            type="text"
            placeholder="Search By Packages"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full outline-none"
          />
          <FaSearch className="text-gray-600" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <h2 className="text-2xl font-semibold">Find Checkup By Hospital</h2>
        <select
          className="border px-4 py-2 rounded-md"
          value={selectedHospital}
          onChange={(e) => setSelectedHospital(e.target.value)}
        >
          <option value="">Filter by hospital</option>
          <option value="Aiims">Aiims</option>
          <option value="Apollo">Apollo</option>
          <option value="Sum">Sum</option>
        </select>

        <button className="bg-rose-100 text-black px-4 py-2 rounded-md">
          Find Checkup
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-purple-50 rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <PackageCard title={pkg.title} price={pkg.price} />
            </div>
          ))}
            
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HealthPackages;
