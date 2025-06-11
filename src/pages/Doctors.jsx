// import React, { useEffect, useState } from "react";
// import DoctorCard from "./DoctorCard";

// const Doctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // استبدل اللينك ده باللينك الحقيقي بتاع الـ API بتاعك
//     fetch("https://your-api-link.com/api/doctors")
//       .then((response) => response.json())
//       .then((data) => {
//         setDoctors(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching doctors:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl font-semibold text-primary">Loading doctors...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col justify-center px-5 lg:px-32 pt-16">
//       <h1 className="text-3xl font-bold text-center mb-10 text-primary">ALL doctors</h1>
//       <div className="flex flex-col gap-8">
//         {doctors.map((doctor, index) => (
//           <DoctorCard key={index} doctor={doctor} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Doctors;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DoctorCard from "../Components/DoctorCard";
import BookingForm from "../Components/BookingForm";
import SkeletonCard from "../Components/SkeletonCard";

import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const doctorsData = [
  { id: 1, img: doc1, name: "Dr. Layla Hamdy", experience: "10 years", specialties: "Cardiologist", price: 400, location: "Nasr City, Cairo", available: true, rating: 98, reviews: 52 },
  { id: 2, img: doc2, name: "Dr. Omar Adel", experience: "8 years", specialties: "Dermatologist", price: 350, location: "Heliopolis, Cairo", available: false, rating: 95, reviews: 41 },
  { id: 3, img: doc3, name: "Dr. Yasmine ElSayed", experience: "12 years", specialties: "Pediatrician", price: 300, location: "Maadi, Cairo", available: true, rating: 97, reviews: 58 },
  { id: 4, img: doc4, name: "Dr. Ahmed Mahmoud", experience: "9 years", specialties: "Dentist", price: 250, location: "6th October City, Giza", available: true, rating: 93, reviews: 39 },
  { id: 5, img: doc5, name: "Dr. Sara Mostafa", experience: "15 years", specialties: "Gynecologist", price: 500, location: "Zamalek, Cairo", available: false, rating: 99, reviews: 77 },
  { id: 6, img: doc6, name: "Dr. Mostafa Kamal", experience: "7 years", specialties: "Orthopedic Surgeon", price: 450, location: "Dokki, Giza", available: true, rating: 92, reviews: 34 },
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("All Specialties");
  const [sortOption, setSortOption] = useState("Highest Rating");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  const doctorsPerPage = 4;
  const specialties = ["All Specialties", ...new Set(doctorsData.map(doc => doc.specialties))];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredDoctors = doctorsData
    .filter(doctor =>
      (specialtyFilter === "All Specialties" || doctor.specialties === specialtyFilter) &&
      (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       doctor.specialties.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "Highest Rating") return b.rating - a.rating;
      if (sortOption === "Price: Low to High") return a.price - b.price;
      if (sortOption === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const resetFilters = () => {
    setSearchTerm("");
    setSpecialtyFilter("All Specialties");
    setSortOption("Highest Rating");
    setCurrentPage(1);
  };

  const searchDoctors = () => {
    setCurrentPage(1);
  };

  const handleBookClick = (doctor) => setSelectedDoctor(doctor);
  const handleCloseForm = () => setSelectedDoctor(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 pt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">All Doctors</h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-2xl mb-8">
        <input
          type="text"
          placeholder="Type Keywords"
          className="w-full p-4 pl-12 rounded-full bg-gradient-to-r from-[#d2e4e9] to-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </div>
      </div>

      {/* Filters Box */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-gray-600 font-semibold text-sm mb-6 uppercase tracking-widest">Advanced Search</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
            className="p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none"
          >
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>{specialty}</option>
            ))}
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none"
          >
            <option>Highest Rating</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{filteredDoctors.length} results</span>

          <div className="flex gap-4">
            <button onClick={resetFilters} className="text-blue-600 font-semibold hover:underline">
              RESET
            </button>
            <button onClick={searchDoctors} className="px-6 py-2 rounded-full bg-gradient-to-r from-[#61839d] to-[#a4c6d7] text-white font-semibold hover:opacity-90">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {loading ? (
          Array.from({ length: doctorsPerPage }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : currentDoctors.length > 0 ? (
          currentDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DoctorCard doctor={doctor} onBookClick={() => handleBookClick(doctor)} />
            </motion.div>
          ))
        ) : (
          <div className="text-center col-span-full text-gray-500 text-lg">
            No doctors found.
          </div>
        )}
      </div>

      {/* Pagination */}
      {!loading && filteredDoctors.length > 0 && (
        <div className="flex gap-2 mt-8">
          {Array.from({ length: Math.ceil(filteredDoctors.length / doctorsPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* Form */}
      {selectedDoctor && (
        <BookingForm doctor={selectedDoctor} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default Doctors;

