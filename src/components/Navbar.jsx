"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Items", url: "/items" },
    { title: "About", url: "/about" },
  ];

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = resolvedTheme || theme;

  return (
    <nav className="sticky top-0 z-40 h-16 bg-slate-100 text-gray-800 flex items-center justify-between shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between py-4">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.url}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(current === "light" ? "dark" : "light")}
            className="p-2 rounded-full border border-gray-300 hover:bg-blue-100 hover:border-blue-400 dark:hover:bg-blue-900 dark:hover:border-blue-500 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {mounted ? (
              current === "light" ? (
                <Moon size={18} className="text-gray-800" />
              ) : (
                <Sun size={18} className="text-yellow-400" />
              )
            ) : (
              <span className="inline-block w-4 h-4" />
            )}
          </button>

          {/* Auth Button */}
          <Link
            href="/signin"
            className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
