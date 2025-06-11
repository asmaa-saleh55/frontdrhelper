import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md animate-pulse flex flex-col md:flex-row gap-4 items-center">
      <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        <div className="flex gap-2">
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="h-8 bg-gray-300 rounded w-1/3 mt-2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
