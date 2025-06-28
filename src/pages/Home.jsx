import React from "react";
import DepartmentCard from "../components/DepartmentCard";
import { FaStethoscope, FaCalendarAlt, FaBed, FaUserMd } from "react-icons/fa";
import PatientStoriesSection from "../components/PatientStoriesSection"
import Footer from "../components/Footer.jsx";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    description: "Heart-related treatments and surgeries",
    icon: "❤️",
  },
  {
    id: 2,
    name: "Neurology",
    description: "Brain and nervous system care",
    icon: "🧠",
  },
  {
    id: 3,
    name: "Orthopedics",
    description: "Bone and joint treatments",
    icon: "🦴",
  },
];

const Home = () => {
  return (
    <main className="p-6 space-y-12">
      <section className="text-center py-16 bg-blue-50 rounded">
        <h1 className="text-4xl font-bold text-green-700 --font-display">
          Welcome to Lexme Hospital
        </h1>
        
        <p className="text-lg text-gray-600 mt-4">
          Your Health, Our Priority — Advanced Care, Trusted Doctors.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="/doctors"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Book Appointment
          </a>
          <a
            href="/health-checkup"
            className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50"
          >
            Get Health Checkup
          </a>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          We can help you book
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-green-100 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transtion">
            <FaCalendarAlt className="text-4xl text-green-600 mx-auto" />
            <h3 className="font-semibold text-lg mt-4"><a href="/doctors">Book Appointment</a></h3>
            <p className="text-gray-600">With the country’s leading experts</p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <FaBed className="text-4xl text-blue-600 mx-auto" />
            <h3 className="font-semibold text-lg mt-4"><a href="/hospitals">Hospitals</a></h3>
            <p className="text-gray-600">Health needs under one roof</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <FaStethoscope className="text-4xl text-yellow-600 mx-auto"/>
            <h3 className="font-semibold text-lg mt-4"><a href="/">Specialities</a></h3>
            <p className="text-gray-600">Our expertise in Healthcare</p>
          </div>

          <div className="bg-pink-100 p-6 rounded-xl shadow-lg text-center ">
            <FaUserMd className="text-4xl text-pink-600 mx-auto"/>
            <h3 className="font-semibold text-lg mt-4"><a href="/doctors">Doctors</a></h3>
            <p className="text-gray-600">Top experts for your health</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Our Specialities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} department={dept} />
          ))}
        </div>
      </section>
        <PatientStoriesSection/>
          <Footer/>
    </main>
  );
};

export default Home;
