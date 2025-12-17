"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/images/logo-full.png"
              alt="QuickFusion Innovations Logo"
              width={250}
              height={60}
              priority
              className="h-14 md:h-16 w-auto"
              style={{ maxWidth: "250px" }}
            />
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 font-medium transition-all hover:-translate-y-0.5"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 font-medium transition-all hover:-translate-y-0.5"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-600 font-medium transition-all hover:-translate-y-0.5"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 hover:scale-105 font-medium transition-all"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 bg-green-600 text-white hover:bg-green-700 rounded-md font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
