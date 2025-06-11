import React from "react";

const BookingButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#315e61] text-white px-2 py-2 rounded-full text-base font-semibold hover:bg-[#1b3f41] transition duration-300 ease-in-out"


    >
      Book Clinic Visit
    </button>
  );
};

export default BookingButton;

