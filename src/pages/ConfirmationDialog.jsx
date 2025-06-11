import React from 'react';

const ConfirmationDialog = ({ date, time, patientName, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-md shadow-lg overflow-hidden">
        <div className="bg-teal-900 text-white px-5 py-3 flex items-center justify-between text-lg font-semibold">
          <span className="mr-3">📋</span>
          <span>Your Order Is Success</span>
          <button
            onClick={onClose}
            className="text-white text-xl font-bold hover:text-gray-300"
          >
            ✖
          </button>
        </div>

        <p className="bg-gray-100 px-5 py-2 text-gray-600 text-sm">
          Your order is confirmed.
        </p>

        <div className="p-5">
          <h3 className="text-teal-900 text-lg font-semibold mb-4">
            Details Appointment
          </h3>

          <div className="flex justify-between items-center border-b border-gray-200 py-2 text-gray-700 text-sm">
            <span>{date}</span>
            <span className="text-xl">📅</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 py-2 text-gray-700 text-sm">
            <span>{time}</span>
            <span className="text-xl">⏰</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 py-2 text-gray-700 text-sm">
            <span>{patientName || 'No Patient Name'}</span>
            <span className="text-xl">👤</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 py-2 text-gray-700 text-sm">
            <span>Radiant Hospital</span>
            <span className="text-xl">🏥</span>
          </div>

          <div className="flex items-center gap-4 py-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Doctor"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <span className="font-semibold text-teal-900 block">
                Dr. Raze Invoker
              </span>
              <p className="text-xs text-gray-500 m-0">Internist Specialist</p>
            </div>
            <span className="text-xl">👨‍⚕️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;

