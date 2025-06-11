import React from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import img7 from "../assets/img/blog7.jpg"; 
import img8 from "../assets/img/blog8.jpg"; 
import img9 from "../assets/img/blog9.jpg"; 
import avatar1 from '../assets/img/avatar1.jpg';
import avatar2 from '../assets/img/avatar2.jpg';
import avatar3 from '../assets/img/avatar3.jpg';

const Blogs = () => {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left side content */}
          <div className="w-full md:w-1/2 pt-8 md:pr-8">
            <div className="inline-block bg-white rounded-full px-4 py-2 mb-6 text-sm font-medium text-gray-800 transition transform hover:scale-105">
              World's Most Adopted Healthcare AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transform transition duration-500 hover:text-blue-500">
              Revolutionizing<br/>Healthcare with AI
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Transform health with AI. Diagnostics, treatments, and care, innovatively designed by Fluttertop.
              Explore the future of medicine. Empower healthcare professionals and patients alike.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 transition transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Book a call
              </button>
              <button className="bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Appointment
              </button>
            </div>
            {/* Ratings section */}
            <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
  <img src={avatar1} alt="Avatar 1" className="w-8 h-8 rounded-full border border-white" />
  <img src={avatar2} alt="Avatar 2" className="w-8 h-8 rounded-full border border-white" />
  <img src={avatar3} alt="Avatar 3" className="w-8 h-8 rounded-full border border-white" />
  <img src={avatar1} alt="Avatar 1" className="w-8 h-8 rounded-full border border-white" />
</div>
              <div>
                <div className="font-medium">Rated 5/5 & Trusted by</div>
                <div className="text-gray-600">1000+ Patients</div>
              </div>
            </div>
          </div>
          {/* Right side with robot image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
            <img 
              src={img8} 
              alt="Robot arm"
              className="w-full h-auto transition-transform duration-500 transform hover:scale-105"
            />
            {/* 300+ Experts badge */}
            <div className="absolute top-24 right-8 bg-white rounded-xl p-2 shadow-lg flex items-center gap-3 transition transform hover:scale-105">
            <div className="flex -space-x-2">
  <img src={avatar1} alt="Avatar 1" className="w-8 h-8 rounded-full border border-white" />
  <img src={avatar2} alt="Avatar 2" className="w-8 h-8 rounded-full border border-white" />
  <img src={avatar3} alt="Avatar 3" className="w-8 h-8 rounded-full border border-white" />
</div>
              <div>
                <div className="font-bold text-lg">300+</div>
                <div className="text-xs text-gray-500">Expert doctors</div>
              </div>
            </div>
            {/* 5,000+ Designs badge */}
            <div className="absolute bottom-36 right-8 bg-white rounded-xl p-2 shadow-lg flex items-center gap-3 transition transform hover:scale-105">
              <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
              <img src={avatar1} alt="Avatar 1" className="w-8 h-8 rounded-full border border-white" />
              </div>
              <div>
                <div className="font-bold text-lg">5,000+</div>
                <div className="text-xs text-gray-500">Design by Fluttertop</div>
              </div>
            </div>
            {/* Robot arm image */}
            {/* <div className="absolute bottom-64 left-0">
              <img 
                src={img9} 
                alt="Robot arm"
                className="w-full h-auto transition-transform duration-500 transform hover:scale-105"
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Blogs section */}
      <div className="flex flex-col justify-center lg:px-32 px-5 pt-24">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-center">
          Latest Post
        </h1>
        {/* Blog Cards */}
        <div className="my-8">
          <div className="flex flex-wrap justify-center gap-5">
            <BlogCard 
              img={img1} 
              headlines="How to Choose the Right Doctor for Your Condition" 
              description="Tips on finding the best doctor for your needs through our booking platform."
            />
            <BlogCard 
              img={img2} 
              headlines="5 Benefits of Booking Medical Appointments Online" 
              description="Discover how online booking saves you time and simplifies your healthcare journey."
            />
            <BlogCard 
              img={img3} 
              headlines="What to Prepare Before Your Doctor’s Appointment" 
              description="A quick checklist to get ready for your upcoming doctor visit."
            />
            <BlogCard 
              img={img4} 
              headlines="The Importance of Regular Health Check-ups" 
              description="Understand why regular medical checkups keep you healthier in the long run."
            />
            <BlogCard 
              img={img5} 
              headlines="Telemedicine: Consult a Doctor from Home" 
              description="Learn the benefits of remote consultations and how to book easily from home."
            />
            <BlogCard 
              img={img6} 
              headlines="How Our Platform Helps You Track Your Medical History" 
              description="See how managing appointments and medical records online makes life easier."
            />
          </div>
        </div>

        {/* Text + Button under blog cards */}
        <div className="flex flex-col items-center mt-8 space-y-4">
          <p className="text-center max-w-2xl">
            Discover expert tips and guides to make your healthcare journey easier and more informed.
          </p>
          <Link to="/blog">
            <Button title="Our Articles" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
