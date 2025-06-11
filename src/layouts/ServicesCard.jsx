import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-3 p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-4 rounded-full group-hover:bg-[#ade9dc] transition-colors duration-300 text-4xl">
        {icon}
      </div>
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
        {description}
      </p>
      <h3 className="text-backgroundColor font-semibold cursor-pointer hover:text-[#ade9dc] transition duration-300">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;




