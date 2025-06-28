import React, { useState } from "react";
import doctorsData from "../assets/Doctors/doctorsData";
import DoctorCard from "../components/Doctorcard";
import Footer from "../components/Footer";
import DoctorFilterBar from "../components/DoctorsFilterBar";

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <DoctorFilterBar onSelectDoctor={setSelectedDoctor} />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(selectedDoctor ? [selectedDoctor] : doctorsData).map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Doctors;
