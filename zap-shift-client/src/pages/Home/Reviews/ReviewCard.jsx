import React from "react";
import { FaQuoteRight } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;

  return (
    <div className="card max-w-sm bg-base-100 rounded-xl shadow-lg border border-gray-200">
      <div className="card-body p-6 md:p-8">

        {/* Quote Icon */}
        <div className="mb-5">
          <FaQuoteRight className="text-3xl text-cyan-300" />
        </div>

        {/* Quote */}
        <p className="text-lg md:text-xl leading-[1.8] text-gray-600 font-normal">
            {testimonial}
        </p>

        {/* Dashed Divider */}
        <div className="border-t-2 border-dashed border-cyan-700/70 my-5"></div>

        {/* User Info */}
        <div className="flex items-center gap-6">

          {/* Avatar */}
          <div className="avatar placeholder">
            <div className="rounded-full w-16 h-16">
              <img src={user_photoURL} alt={userName} />
            </div>
          </div>

          {/* Name & Designation */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-950">
              {userName}
            </h3>

            <p className="text-lg text-gray-500 mt-1">
              Senior Product Designer
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ReviewCard;