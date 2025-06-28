import React from "react";
import { FaHospitalAlt, FaBed, FaUserMd,FaBullseye,FaGlobe  } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import ValuesSection from "../components/ValuesSection ";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-12">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="../images/About.webp"
          alt="Healthcare Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[240px] left-6 bg-white/30 backdrop-blur-md rounded-lg px-6 py-4 shadow-lg text-black">
          <h1 className="text-3xl md:text-4xl font-bold">Lexme Healthcare</h1>
          <p className="text-lg mt-2">Leading Integrated Healthcare Services Provider in India</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-50 p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">4 JCI & 26 NABH</p>
          <p className="text-gray-600 mt-1 text-sm">ACCREDITED HOSPITALS</p>
        </div>

        <div className="bg-yellow-50 p-6 rounded shadow text-center">
          <MdLocalHospital className="text-3xl mx-auto text-yellow-600" />
          <p className="text-2xl font-bold mt-2">28</p>
          <p className="text-gray-600 text-sm">Healthcare Facilities</p>
        </div>

        <div className="bg-blue-50 p-6 rounded shadow text-center">
          <FaBed className="text-3xl mx-auto text-blue-600" />
          <p className="text-2xl font-bold mt-2">4,500+</p>
          <p className="text-gray-600 text-sm">Operational Beds</p>
        </div>

        <div className="bg-red-50 p-6 rounded shadow text-center">
          <FaUserMd className="text-3xl mx-auto text-red-600" />
          <p className="text-2xl font-bold mt-2">12,500+</p>
          <p className="text-gray-600 text-sm">Healthcare Professionals</p>
        </div>
      </div>

      {/* About Description */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 leading-7">
          <strong>Lexme Healthcare Limited</strong> – an IHH Healthcare Berhad Company – is a leading integrated healthcare
          services provider in India. It is one of the largest healthcare organizations in the country with 28 healthcare
          facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (including JVs).
          Lexme is present in India, the United Arab Emirates (UAE), Nepal & Sri Lanka. The Company is listed on the BSE Ltd
          and National Stock Exchange (NSE) of India. It draws strength from its partnership with global major and parent
          company - IHH, to build upon its culture of world-class patient care and superlative clinical excellence.
          <br /><br />
          Lexme employs ~23,000 people (including Agilus Diagnostics Limited) who share its vision of becoming the world’s
          most trusted healthcare network. Lexme offers a full spectrum of integrated healthcare services ranging from clinics
          to quaternary care facilities and a wide range of ancillary services.
        </p>
      </div>
       <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Vision Card */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center border border-purple-100 hover:shadow-lg transition duration-300">
          <FaBullseye className="text-5xl mx-auto text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To create a world-class integrated healthcare delivery system in India, entailing the finest medical skills combined with compassionate patient care.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center border border-purple-100 hover:shadow-lg transition duration-300">
          <FaGlobe className="text-5xl mx-auto text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To be a globally respected healthcare organisation known for Clinical Excellence and Distinctive Patient Care.
          </p>
        </div>
        
      </div>
    </div>
    <ValuesSection/>
    <Footer/>
    </div>
  

  );
};

export default About;
