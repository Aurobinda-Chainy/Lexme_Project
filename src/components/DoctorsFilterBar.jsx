import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import doctorsData from "../assets/Doctors/doctorsData";

const DoctorFilterBar = ({ onSelectDoctor }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if(value.trim() === ""){
            setFilteredDoctors([]);
        }else{
            const results = doctorsData.filter((doctor) => doctor.name.toLowerCase().includes(value.toLowerCase()));
            setFilteredDoctors(results);
        }
    };

    return (
       <div className="relative w-full md:w-1/2">
            <div className="flex items-center border rounded-md px-3 py-2">
                <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search doctor" className="w-full outline-none"/>
                <FaSearch className="text-gray-600 ml-2"/>
            </div>

            {filteredDoctors.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-md">
                    {filteredDoctors.map((doctor) => (
                        <li
                        key={doctor.id}
                        className="p-2 hover:bg-gray-100 cursor-pointer" 
                        onClick={() => {
                            onSelectDoctor(doctor);
                            setSearchTerm("");
                            setFilteredDoctors([]);
                        }}
                        > {doctor.name}
                    </li>
                    ))}
                </ul>
            )}
       </div>
    )
}

export default DoctorFilterBar;