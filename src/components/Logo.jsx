import Link from "next/link";
import React from "react";
import { FiBox, FiMapPin, FiSearch } from "react-icons/fi"; // or FiMapPin, FiSearch, etc.

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-all"
    >
      <FiBox className="text-blue-600 text-3xl" />
      <span>
        Item<span className="text-blue-600">Tracker</span>
      </span>
    </Link>
  );
}
