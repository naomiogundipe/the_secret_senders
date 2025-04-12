import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png.png";
const Header = () => {
  return (
    <>
      <header className="bg-white shadow-md shadow-black">
        <div
          className="container mx-auto px-4 flex justify-center lg:justify-between items-center"
          style={{ background: {} }}
        >
          <div className="flex items-center space-x-2 py-6 lg:py-0 ">
            <img src={logo} alt="" className="w-40" />
            <h1 className="text-2xl font-bold text-[#5C5470] hidden lg:block">
              Secret Senders
            </h1>
          </div>
          <nav className="space-x-4 text-[#5C5470] font-medium text-xs lg:text-lg">
            <Link to="/" className="hover:text-[#d6b5ff] transition-colors">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#d6b5ff] transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-[#d6b5ff] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="hover:text-[#d6b5ff] transition-colors"
            >
              Gallery
            </Link>
            <Link to="/FAQs" className="hover:text-[#d6b5ff] transition-colors">
              FAQs
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#d6b5ff] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
