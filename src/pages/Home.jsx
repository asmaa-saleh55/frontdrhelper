
import React from "react";
import { FaStar, FaUserMd, FaCalendarAlt } from "react-icons/fa";
import backgroundImage from "../assets/img/home-background.png";
import ContactSection from "../Components/ContactSection";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import BlogsSection from "../Components/BlogsSection";
import DoctorsSection from "../Components/DoctorsSection";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-screen flex flex-col justify-center px-5 lg:px-32 text-[#1b3f41] relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

        <div className="relative flex flex-col items-center justify-center w-full gap-10 mt-10 text-center">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-3xl text-[#5f9ea0] font-semibold">For Healthcare</h2>
            <h1 className="text-5xl font-bold leading-tight text-black">
              DOCTOR HELPER
            </h1>
            <p className="text-gray-600">
              Take care of your health and start your journey to recovery with us,
              where we provide you with easy appointment booking for medical follow-ups
              to ensure the best care for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-[#5a8092] to-[#9ac4d2] text-white rounded-full font-semibold shadow-md hover:opacity-90">
                Get Started
              </button>
              <button className="px-6 py-3 bg-[#d4f5ef] text-[#1b3f41] rounded-full font-semibold shadow-md hover:bg-[#c1ebe2]">
                Join us
              </button>
            </div>

            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <FaStar className="text-[#f4b400]" />
                <span className="text-sm text-gray-700">High quality</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserMd className="text-[#34a853]" />
                <span className="text-sm text-gray-700">Comprehensive care</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#4285f4]" />
                <span className="text-sm text-gray-700">Organized appointments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* باقي الأقسام */}
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <BlogsSection />
      <ContactSection />
    </>
  );
};

export default Home;


