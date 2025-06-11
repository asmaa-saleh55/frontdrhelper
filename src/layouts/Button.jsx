import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-[#315e61] text-white px-4 py-3 rounded-full text-lg font-semibold hover:bg-[#1b3f41] transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
};

export default Button;