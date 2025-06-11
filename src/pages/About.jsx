import React from "react";
import img from "../assets/img/about.jpg";
import scheduleImg from "../assets/img/schedule.png";
import roomImg from "../assets/img/room.png";
import registerImg from "../assets/img/room.png";
import imgsection from "../assets/img/imgsection.jpg";

const About = () => {
  return (
    <div className="flex flex-col gap-24">
      {/* About Section - moved to top */}
      <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-16 gap-10 animate-fade-in-up">
        <div className="w-full lg:w-3/4 space-y-4">
          <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
          <p className="text-justify lg:text-start text-gray-700">
            In a world that prioritizes convenience and speed, our online platform stands out as an innovative tool for booking appointments with top specialists. The site features an easy-to-navigate interface, allowing you to search for doctors based on their specialties and locations, making it simple to choose the right professional for your health needs.
          </p>
          <p className="text-justify lg:text-start text-gray-700">
            With just a click, you can schedule an appointment that fits your timetable without the hassle of long waits. Additionally, the platform offers a quick inquiry service for health-related questions, enabling you to receive accurate responses from professionals, helping you make informed decisions for your well-being.
          </p>
          <p className="text-justify lg:text-start text-gray-700">
            Booking your healthcare appointments has never been easier; with our website, you can access the care you need with ease and speed.
          </p>
        </div>
        <div className="w-full lg:w-3/4 animate-slide-in-right">
          <img
            className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            src={img}
            alt="About"
          />
        </div>
      </div>

      {/* Hero Section - Hospital Booking - moved to bottom */}
      <div
        className="py-16 px-8 flex flex-col items-center text-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${imgsection})` }}
      >
        <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
          Seamless Hospital Booking for Your Health Needs
        </h2>
        <p className="text-lg text-white max-w-2xl mb-8 animate-fade-in-up delay-100">
          Book appointments easily with top hospitals and trusted doctors. Get fast access to medical services and expert care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-[#e3f2fd] shadow-md p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 animate-fade-in-up delay-200">
            <img
              src={scheduleImg}
              alt="Doctor Schedule"
              className="mb-4 w-20 h-20 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-700">Doctor Schedule</h3>
            <p className="text-gray-600 mt-2">
              Find and schedule appointments with your preferred doctors.
            </p>
          </div>

          <div className="bg-[#e8f5e9] shadow-md p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 animate-fade-in-up delay-300">
            <img
              src={roomImg}
              alt="Room Info"
              className="mb-4 w-20 h-20 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-700">Room Info</h3>
            <p className="text-gray-600 mt-2">
              Access emergency care information and hospital facilities.
            </p>
          </div>

          <div className="bg-[#fff3e0] shadow-md p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 animate-fade-in-up delay-400">
            <img
              src={registerImg}
              alt="Online Registration"
              className="mb-4 w-20 h-20 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-700">Online Registration</h3>
            <p className="text-gray-600 mt-2">
              Register online at your preferred hospital with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
