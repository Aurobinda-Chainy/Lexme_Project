import React, { useState } from "react";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  const [form, setForm] = useState({
    queryType: "",
    firstName: "",

    lastName: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    hospital: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Query submitted successfully");
  };

  return (
    <section className="p-6 space-y-12">
      <img
        src="../images/contact.jpg"
        alt="Contact Us"
        className="w-full h-64 object-cover"
      />
      <div className="max-w-6xl mx-auto px-4 py-2 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We’re here to help you with all your queries and feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p>
              Lexme Hospital
              <br />
              Tower A, Block F, Sector-41, Gurgaon, Haryana - 122001{" "}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p>Appointments: +91 9205 010 100</p>
            <p>Corporate: +91-124 4921021 / 1041</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>
              Appointments:{" "}
              <a
                href="mailto:reachus@lexmehospital.com"
                className="text-blue-600"
              >
                reachus@lexmehospital.com
              </a>
            </p>
            <p>
              Feedback:{" "}
              <a
                href="mailto:feedback@lexmehospital.com"
                className="text-blue-600"
              >
                feedback@lexmehospital.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 sm:p-6 rounded-lg shadow"
          >
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Types of Query</label>
              <select
                name="queryType"
                value={form.queryType}
                onChange={handleChange}
                className="w-full border p-2 rounded required"
              >
                <option value="">Select Type of Query</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Country Code</label>
              <input
                type="text"
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mobile Number *</label>
              <input
                type="text"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Hospitals *</label>
              <select
                name="hospital"
                value={form.hospital}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Select Hospital</option>
                <option value="mulund">Fortis Mulund</option>
                <option value="delhi">Fortis Delhi</option>
                <option value="bangalore">Fortis Bangalore</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Query</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Write your query here..."
              ></textarea>
            </div>

            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </section>
  );
};
export default Contact;
