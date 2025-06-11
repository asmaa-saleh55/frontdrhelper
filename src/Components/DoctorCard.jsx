import React, { useState } from "react";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import StarRatings from "react-star-ratings";

import BookingButton from "./BookingButton";
import BookingForm from "./BookingForm";

const DoctorCard = ({ doctor }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [userRating, setUserRating] = useState(0); // ⭐ الوضع الافتراضي: مش متقيم
  const [hasRated, setHasRated] = useState(false); // علشان المستخدم يقيم مرة واحدة بس
  const [isFavorited, setIsFavorited] = useState(false);

  const handleRatingChange = (newRating) => {
    if (!hasRated) {
      setUserRating(newRating);
      setHasRated(true);
      console.log(`User rated: ${newRating}`);
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    console.log(`Favorite status: ${!isFavorited}`);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center w-full min-h-[300px] transition-all duration-300 hover:shadow-lg">
        {/* صورة الدكتور */}
        <img
          src={doctor.img}
          alt={doctor.name}
          className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-lg"
        />

        {/* بيانات الدكتور */}
        <div className="flex-1 flex flex-col justify-between w-full h-full">
          <div className="flex flex-col gap-3">
            {/* الاسم + علامة التوثيق + القلب */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full relative">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-primary">{doctor.name}</h2>
                <IoIosCheckmarkCircle className="text-primary" size={22} />
              </div>

              {/* زر القلب */}
              <button onClick={toggleFavorite} className="ml-auto p-1">
                <FaHeart
                  size={20}
                  className={`${isFavorited ? "text-red-500" : "text-gray-400"}`}
                />
              </button>
            </div>

            {/* سنوات الخبرة والخدمات */}
            <p className="text-gray-500 text-sm">{doctor.experience}</p>
            <div className="text-sm font-semibold">{doctor.services}</div>

            {/* السعر والتقييم وعدد القصص */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <span className="text-lg font-bold text-green-600">{doctor.price}</span>

              <div className="flex items-center gap-1">
                <StarRatings
                  rating={userRating}
                  changeRating={handleRatingChange}
                  numberOfStars={5}
                  starRatedColor="#22c55e"
                  starHoverColor={hasRated ? "#22c55e" : "#16a34a"}
                  starEmptyColor="#d1d5db"
                  starDimension="20px"
                  starSpacing="2px"
                  name="user-rating"
                />
              </div>

              <span className="text-xs text-gray-500">{doctor.reviews} Patient Stories</span>
            </div>

            {/* Available Today */}
            {doctor.available ? (
              <span className="bg-green-200 text-green-700 text-xs font-semibold px-2 py-1 rounded-md w-fit">
                Available Today
              </span>
            ) : (
              <div className="h-[28px]"></div>
            )}

            {/* الموقع */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FaMapMarkerAlt size={14} />
              <span>{doctor.location}</span>
            </div>
          </div>

          {/* زر الحجز */}
          <div className="mt-6">
            <BookingButton onClick={() => setIsBookingOpen(true)} />
          </div>
        </div>
      </div>

      {/* فورم الحجز */}
      {isBookingOpen && (
        <BookingForm doctorName={doctor.name} onClose={() => setIsBookingOpen(false)} />
      )}
    </>
  );
};

export default DoctorCard;
