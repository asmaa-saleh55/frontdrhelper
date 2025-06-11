import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#315e61] text-white rounded-t-3xl mt-20">
      {/* محتوى الفوتر الرئيسي */}
      <div className="flex flex-col md:flex-row justify-between gap-10 p-8 md:px-32 px-5">
        {/* العمود الأول: معلومات عامة */}
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">WellnessVista</h1>
          <p className="text-sm leading-relaxed">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology,
            dermatology, and more.
          </p>
        </div>

        {/* العمود الثاني: About Us */}
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2 text-sm">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>

        {/* العمود الثالث: Services */}
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2 text-sm">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </Link>
          </nav>
        </div>

        {/* العمود الرابع: Contact Us */}
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2 text-sm leading-relaxed">
            <p>123 Elm Street, Suite 456 Springfield, IL 62701 United States</p>
            <p>support@care.com</p>
            <p>+123-456-7890</p>
          </nav>
        </div>
      </div>

      {/* النص السفلي */}
      <div className="border-t border-white/20 mt-6">
        <p className="text-center py-4 text-sm text-gray-200">
          ©copyright developed by
          <span className="text-hoverColor font-medium"> champion programmers</span> | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
