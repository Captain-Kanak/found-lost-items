"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Items", url: "/items" },
    { title: "About", url: "/about" },
  ];

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  const current = resolvedTheme || theme;

  return (
    <nav className="sticky top-0 z-50 bg-slate-100 shadow-md transition-all duration-300 py-4">
      <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-800">
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

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(current === "light" ? "dark" : "light")}
            className="p-2 rounded-full border border-gray-300 hover:bg-blue-100 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {mounted ? (
              current === "light" ? (
                <Moon size={18} className="text-gray-800" />
              ) : (
                <Sun size={18} className="text-orange-800" />
              )
            ) : (
              <span className="inline-block w-4 h-4" />
            )}
          </button>

          {/* Auth Button */}
          <Link
            href="/signin"
            className="hidden sm:inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all 
            duration-200"
          >
            Sign In
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-800 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col p-4 space-y-3 text-gray-800 dark:text-gray-300">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.url}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/signin"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 
                transition"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
