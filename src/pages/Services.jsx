import React from "react";
import ServicesCard from "../layouts/ServicesCard";
import { FaRobot, FaCalendarCheck, FaComments } from "react-icons/fa"; 

const Services = () => {
  const services = [
    {
      title: "Medical Chat Bot",
      icon: <FaRobot />,
      description: "Smart medical chatbot ready to answer your health inquiries anytime."
    },
    {
      title: "Quick Appointment",
      icon: <FaCalendarCheck />,
      description: "Book your doctor appointments quickly and easily with just a few clicks."
    },
    {
      title: "Premium Consultations",
      icon: <FaComments />,
      description: "Get expert medical consultations and personalized advice from specialists."
    }
  ];

  return (
    <section className="mt-10 px-5">
      {/* العنوان */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1b3f41]">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Discover the services we offer to improve your health and well-being.
        </p>
      </div>

      {/* الكروت */}
      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

