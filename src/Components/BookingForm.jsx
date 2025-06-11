import React from "react";

const BookingForm = ({ doctorName, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Book Appointment with {doctorName}</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 rounded-md"
          />
          <textarea
            placeholder="Any notes..."
            className="border p-2 rounded-md"
          />
          <button
            type="submit"
           className="bg-[#315e61] text-white px-4 py-3 rounded-full text-lg font-semibold hover:bg-[#1b3f41] transition duration-300 ease-in-out"
          >
            Confirm Booking
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 text-sm mt-2 hover:underline"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
