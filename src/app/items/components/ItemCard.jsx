"use client";

import React from "react";
import { format } from "date-fns";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";

export default function ItemCard({ item }) {
  const {
    _id,
    image,
    postType,
    itemName,
    location,
    category,
    createdAt,
    status,
  } = item;

  const formattedDate = format(new Date(createdAt), "PPP"); // e.g., Oct 21, 2025

  // Badge color based on post type
  const postTypeColor = postType === "Lost" ? "bg-red-500" : "bg-green-500";

  // Status color
  const statusColor =
    status === "recovered"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <div data-aos="zoom-in" className="group">
      <div className="card bg-white h-[450px] mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-200">
        {/* Image Section */}
        <figure className="relative h-[240px] overflow-hidden">
          <img
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            src={image}
            alt={itemName}
          />
          <div className="absolute inset-0 from-black/60 via-black/20 to-transparent opacity-80"></div>

          {/* Post Type Badge */}
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white font-semibold text-sm shadow-md ${postTypeColor}`}
          >
            {postType}
          </span>

          {/* Category Badge */}
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-blue-500 text-white font-medium text-sm shadow-md">
            {category}
          </span>
        </figure>

        {/* Card Body */}
        <div className="card-body px-4 py-3 flex flex-col justify-between h-[210px]">
          <div>
            <h2 className="card-title text-lg font-semibold group-hover:text-blue-500 transition-colors duration-300">
              {itemName}
            </h2>

            {/* Location & Date */}
            <div className="text-gray-600 text-sm space-y-1 mt-2">
              <p className="flex gap-1 items-center">
                <SlLocationPin size={16} className="text-blue-500" />
                {location}
              </p>
              <p className="text-gray-500">Posted: {formattedDate}</p>
              <p
                className={`inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}
              >
                {status.replace("-", " ")}
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="card-actions justify-end mt-3">
            <Link href={`/items/${_id}`}>
              <button className="btn btn-blue text-white font-medium rounded-lg px-4 py-2 shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
