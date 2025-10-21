"use client";

import React, { useState, useMemo } from "react";
import ItemCard from "./ItemCard";

export default function Container({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortPostType, setSortPostType] = useState("");
  const [sortCategory, setSortCategory] = useState("");

  // Filter items
  const filteredItems = useMemo(() => {
    return items
      .filter(
        (item) =>
          item?.itemName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item?.location?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((item) => (sortPostType ? item.post_type === sortPostType : true))
      .filter((item) => (sortCategory ? item.category === sortCategory : true));
  }, [items, searchTerm, sortPostType, sortCategory]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Controls */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={sortPostType}
          onChange={(e) => setSortPostType(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Types</option>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>

        <select
          value={sortCategory}
          onChange={(e) => setSortCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Categories</option>
          {Array.from(new Set(items.map((i) => i.category))).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Items List */}
      {filteredItems.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No items match your search.</p>
      )}
    </div>
  );
}
