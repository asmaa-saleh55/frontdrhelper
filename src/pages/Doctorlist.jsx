import React from "react";
import {Link} from "react-router-dom";

const doctors = [
  {
    name: "Dr.tark mohmed selem",
    title: "Dentist",
    experience: "16 years experience overall",
    price: "450 L.E",
    services: "Extractions, Cleanings, Orthodontics, Fillings",
    address: "Asyut el gomhorla street",
    rating: "✔ 99%",
    stories: "23 Patient Stories",
    availability: "Available Today",
    image: "public/Model/doctor-pictures-l5y1qs2998u7rf0x.jpg",
  },
  {
    name: "Dr.lina farouk",
    title: "Orthodontist",
    experience: "10 years experience overall",
    price: "500 L.E",
    services: "Braces, Invisalign, Jaw Correction",
    address: "Cairo - Nasr City",
    rating: "✔ 97%",
    stories: "40 Patient Stories",
    availability: "Available Today",
    image: "public/Model/02.jpg",
  },
  {
    name: "Dr.hatem ali",
    title: "Prosthodontist",
    experience: "12 years experience overall",
    price: "600 L.E",
    services: "Crowns, Bridges, Dentures",
    address: "Giza - Dokki",
    rating: "✔ 95%",
    stories: "18 Patient Stories",
    availability: "Available Today",
    image: "public/Model/OIP (1).jpg",
  },
  {
    name: "Dr.sara mostafa",
    title: "Periodontist",
    experience: "8 years experience overall",
    price: "400 L.E",
    services: "Gum Treatment, Scaling, Root Planing",
    address: "Alexandria - Smouha",
    rating: "✔ 96%",
    stories: "15 Patient Stories",
    availability: "Available Today",
    image: "public/OIP.jpg",
  },
];

const features = [
];

export default function MedicalCarePage() {
  return (
    <div className="bg-white min-h-screen font-sans p-4">
      {/* Specialists Section */}
      <div className="max-w-3xl mx-auto py-10 px-5 text-center">
        <h2 className="text-3xl font-bold text-[#0b1f45] mb-4">Meet Our Specialists</h2>
        <p className="text-gray-600 mb-10">
          We use only the best quality materials on the market in order to provide
          the best products to our patients.
        </p>
        <div className="space-y-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 flex items-center"
            >
              <img
                src={doctor.image}
                alt="Doctor"
                className="w-36 h-36 rounded-lg object-cover mr-5"
              />
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold text-[#0b1f45]">
                  <span className="text-blue-500">{doctor.name.split(" ")[0]}</span>{" "}
                  {doctor.name.split(" ").slice(1).join(" ")}
                  <span className="text-blue-500 ml-2">✔️</span>
                </h3>
                <p className="text-gray-700 mt-1">{doctor.title}</p>
                <p className="text-gray-600 mt-1">{doctor.experience}</p>
                <p className="text-green-600 text-lg font-bold mt-1">{doctor.price}</p>
                <p className="text-gray-800 font-medium mt-1">{doctor.services}</p>
                <p className="text-gray-600 mt-1">{doctor.address}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 font-bold">{doctor.rating}</span>
                    <span className="text-gray-600 text-sm">{doctor.stories}</span>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-md w-24 text-center">
                      {doctor.availability}
                    </span>
                    <Link to="/Appointment" className="bg-teal-600 text-white px-4 py-2 rounded-md w-44 hover:bg-[#49adcc] transition font-bold">
                      Book Clinic Visit
                   </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
