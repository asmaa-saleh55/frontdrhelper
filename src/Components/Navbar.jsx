import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/img/logo.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
    setServiceDropdown(false); // لما تفتح المينيو، نخلي الـ dropdown مقفول
  };

  const closeMenu = () => {
    setMenu(false);
    setServiceDropdown(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex flex-row items-center cursor-pointer">
          <RouterLink to="/" onClick={closeMenu}>
            <img src={logo} alt="DrHelper Logo" className="h-16 w-auto object-contain" />
          </RouterLink>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
          <RouterLink to="/" className="text-[#1b3f41] font-semibold hover:text-[#4e8893]">Home</RouterLink>
          <RouterLink to="/about" className="text-[#1b3f41] font-semibold hover:text-[#4e8893]">About us</RouterLink>

          <div className="relative group cursor-pointer">
            <RouterLink to="/services" className="flex items-center gap-1 text-[#1b3f41] font-semibold hover:text-[#4e8893]">
              <span>Services</span>
              <span className="text-sm mt-1">▼</span>
            </RouterLink>
            <div className="absolute left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-white shadow-lg rounded-md py-2 mt-2 w-48 z-50">
              <RouterLink to="/chatbot" className="block px-4 py-2 text-[#1b3f41] hover:bg-gray-100">Medical Chat Bot</RouterLink>
              <RouterLink to="/doctorlist" className="block px-4 py-2 text-[#1b3f41] hover:bg-gray-100">Quick Appointment</RouterLink>
              <RouterLink to="/services/premium" className="block px-4 py-2 text-[#1b3f41] hover:bg-gray-100">Premium Consultations</RouterLink>
            </div>
          </div>

          <RouterLink to="/doctors" className="text-[#1b3f41] font-semibold hover:text-[#4e8893]">Doctors</RouterLink>
          <RouterLink to="/contact" className="text-[#1b3f41] font-semibold hover:text-[#4e8893]">Contact</RouterLink>
          <RouterLink to="/blogs" className="text-[#1b3f41] font-semibold hover:text-[#4e8893]">Blogs</RouterLink>
          <RouterLink to="/Patient" className="text-[#1b3f41] font-semibold hover:text-[#4e8893]">Patient</RouterLink>
        </nav>

        <div className="hidden lg:flex">
          <RouterLink to="/authcard">
            <button className="ml-4 bg-[#4a9aa0] text-white font-semibold text-lg py-2 px-6 rounded-full hover:bg-[#1b3f41] transition-colors duration-300">
              Create free account
            </button>
          </RouterLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menu && (
        <div className="lg:hidden bg-white px-6 py-4 space-y-3 text-[#1b3f41] font-medium shadow-md z-50">
          <RouterLink to="/" onClick={closeMenu} className="block hover:text-[#4e8893]">Home</RouterLink>
          <RouterLink to="/about" onClick={closeMenu} className="block hover:text-[#4e8893]">About us</RouterLink>

          {/* Mobile Dropdown for Services */}
          <div>
            <button onClick={() => setServiceDropdown(!serviceDropdown)} className="w-full text-left flex items-center justify-between hover:text-[#4e8893]">
              <span>Services</span>
              <span className="text-sm">{serviceDropdown ? "▲" : "▼"}</span>
            </button>
            {serviceDropdown && (
              <div className="ml-4 mt-2 space-y-2">
                <RouterLink to="/chatbot" onClick={closeMenu} className="block hover:text-[#4e8893]">Medical Chat Bot</RouterLink>
                <RouterLink to="/services/appointment" onClick={closeMenu} className="block hover:text-[#4e8893]">Quick Appointment</RouterLink>
                <RouterLink to="/services/premium" onClick={closeMenu} className="block hover:text-[#4e8893]">Premium Consultations</RouterLink>
              </div>
            )}
          </div>

          <RouterLink to="/doctors" onClick={closeMenu} className="block hover:text-[#4e8893]">Doctors</RouterLink>
          <RouterLink to="/contact" onClick={closeMenu} className="block hover:text-[#4e8893]">Contact</RouterLink>
          <RouterLink to="/blogs" onClick={closeMenu} className="block hover:text-[#4e8893]">Blogs</RouterLink>

          <RouterLink to="/authcard" onClick={closeMenu}>
            <button className="mt-4 w-full bg-[#4a9aa0] text-white font-semibold text-lg py-2 rounded-full hover:bg-[#1b3f41] transition-colors duration-300">
              Create free account
            </button>
          </RouterLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
