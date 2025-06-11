import React from 'react'
import img from "../assets/img/about.jpg";
const AboutSection = () => {
  return (
         <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-10 lg:pt-0 gap-10 animate-fade-in-up">
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
             <img className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" src={img} alt="About" />
           </div>
         </div>
  )
}

export default AboutSection
