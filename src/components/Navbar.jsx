import React, { useState } from "react";
import { Link } from "react-router-dom";
import elnllogo from "../assets/elnlmainlogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed bg-[#f6f8fb] shadow-md py-4 z-20 font-sans w-full opacity-90">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center sm:ml-4">
          <Link
            to="/"
            className="text-[#464646] text-2xl font-bold flex items-center"
          >
            <img src={elnllogo} alt="Logo" className="w-20 sm:w-30 h-10 mr-2" />
            <div className="md:flex-col ">
              <span className="text-[#e36414]">Elektrische-</span>
              <span className="md:inline">Lease.nl</span>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex mr-auto ml-[24vw] items-center space-x-14">
          <Link
            to="/"
            className="text-[#464646] font-bold hover:text-[#e36414]"
          >
            Aanbod
          </Link>
          <Link
            to="/Elektrische-Autos"
            className="text-[#464646] font-bold hover:text-[#e36414]"
          >
            Auto's
          </Link>
          <Link
            to="/Over-ons"
            className="text-[#464646] font-bold hover:text-[#e36414]"
          >
            Over ons
          </Link>
          <Link
            to="/Contact"
            className="text-[#464646] font-bold hover:text-[#e36414]"
          >
            Contact
          </Link>
          <Link
            to="/Blogs"
            className="text-[#464646] font-bold hover:text-[#e36414]"
          >
            Blogs
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            className="text-[#464646] focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <GrFormClose size={40} />
            ) : (
              <GiHamburgerMenu size={25} className="mr-2 mt-2" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 transform transition-transform ease-in duration-300">
          <div className="bg-white pt-4 pk-4 space-y-4">
            <div className="flex justify-end">
              <button
                className="text-[#464646] focus:outline-none"
                onClick={toggleMenu}
              >
                <GrFormClose size={40} />
              </button>
            </div>
            <Link
              to="/"
              className="text-4xl font-bold text-[#464646] hover:text-[#e36414] block"
            >
              Home
            </Link>
            <Link
              to="/Elektrische-Autos"
              className="text-4xl font-bold text-[#464646] hover:text-[#e36414] block"
            >
              Auto's
            </Link>
            <Link
              to="/Over-ons"
              className="text-4xl font-bold text-[#464646] hover:text-[#e36414] block"
            >
              Over ons
            </Link>
            <Link
              to="/contact"
              className="text-4xl font-bold text-[#464646] hover:text-[#e36414] block"
            >
              Contact
            </Link>
            <Link
              to="/Blogs"
              className="text-4xl font-bold text-[#464646] hover:text-[#e36414] block"
            >
              Blogs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
