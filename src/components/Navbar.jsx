import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="Lexme HMS"
            className="h-10 w-auto object-contain rounded"
          />
        </Link>

        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-700 ">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/doctors" className="hover:text-green-600">
            Find a Doctor
          </Link>
          <Link to="/hospitals" className="hover:text-green-600">
            Hospitals
          </Link>
          <Link to="/career" className="hover:text-green-600">
            Career
          </Link>
          <Link to="/about" className="hover:text-green-600">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-green-600">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 py-4 bg-white shadow-lg border-b space-y-4 animate-slide-down">
          <nav className="flex flex-col gap-3 text-gray-700 text-base">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/doctors" onClick={closeMenu}>
              Find a Doctor
            </Link>
            <Link to="/departments" onClick={closeMenu}>
              Department
            </Link>
            <Link to="/career" onClick={closeMenu}>
              Career
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </nav>

          <div className="pt-4 border-t flex flex-col gap-2">
            <Link
              to="/login"
              onClick={closeMenu}
              className="bg-green-600 text-white py-2 rounded text-center"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={closeMenu}
              className="border border-green-600 text-green-600 py-2 rounded text-center"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
