import React from "react";
import CardLayout from "../components/CardLayout";
import AboutSec from "../components/AboutSec";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
    <main className="p-6 space-y-12">
    <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden ">
  <img
    src="../images/career.jpg"
    alt="Careers Banner"
    className="absolute inset-0 w-full h-full object-cover "
  />
  <div className="absolute top-[240px] left-6 bg-white/30 backdrop-blur-md rounded-lg px-6 py-4 shadow-lg text-white text-bold">
    <h3 className="text-3xl md:text-4xl font-bold">Careers at Lexme</h3>
  </div>
</div>
    <div className="max-w-7xl mx-auto py-5 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
  {/* Left Side: Text */}
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-2">Healthcare for Good</h2>
    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Today. Tomorrow. Always</h3>
    <p className="text-gray-700 leading-relaxed">
      At Lexme, our vision is to create a world-class integrated healthcare delivery system in India, entailing
      the finest medical skills combined with compassionate patient care. <br /><br />
      Empowered by our values – Patient centricity, Teamwork, Ownership, Innovation, and Integrity – we are
      transforming care across our hospital network.
    </p>
  </div>

  {/* Right Side: Profile & Application Box */}
  <div className="bg-white border border-gray-200 rounded-lg shadow-md">
    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
      <p className="text-gray-600">Edit your profile</p>
      <button className="bg-green-200 text-gray-900 font-medium py-2 px-4 rounded  hover:bg-green-300 transition">Edit Profile</button>
    </div>
    <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
     
      <p className="text-gray-600 text-sm">Review status of your job application</p>
       <button className="bg-green-200 text-black font-semibold py-3 px-6 rounded w-full md:w-auto  hover:bg-green-300 transition">
        Review Your Application
      </button>
    </div>
  </div>
</div>
    <CardLayout/>
    <AboutSec/>

    <Footer/>
    </main>
    </>
  )
};
export default Career;