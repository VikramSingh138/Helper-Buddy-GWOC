"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Become a Partner", href: "/partner/register" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/helperbuddy-logo.svg"
            alt="HelperBuddy"
            width={75}
            height={75}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navbar Links */}
        <div className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} w-full md:w-auto mt-4 md:mt-0`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-blue-500 md:inline-block"
            >
              {item.name}
            </Link>
          ))}

          {/* Dropdown Menu
          <div className="relative">
            <Button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              Dropdown ▼
            </Button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <ul className="py-2">
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="border-gray-200" />
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div> */}

          {/* Search Bar
          <form className="hidden md:flex items-center border rounded-md overflow-hidden">
            <input
              className="px-4 py-2 w-40 md:w-64 outline-none"
              type="search"
              placeholder="Search..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
              Search
            </button>
          </form> */}

          {/* Login / Signup */}
            <div className="flex space-x-4">
            <Link href="/login">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Log In</button>
                </Link>
                <Link href="/register">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}



