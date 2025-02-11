// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import Button from "../ui/Button";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Services", href: "/services" },
//   { name: "Blog", href: "/blog" },
//   { name: "Become a Partner", href: "/partner/register" },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-black shadow-md">
//       <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/assets/helperbuddy-logo.svg"
//             alt="HelperBuddy"
//             width={60}
//             height={60}
//           />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white focus:outline-none"
//         >
//           {isOpen ? (
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           )}
//         </button>

//         {/* Mobile Menu (Dropdown) */}
//         {isOpen && (
//           <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 p-4 md:hidden">
//             <a href="#" className="text-white">Home</a>
//             <a href="#" className="text-white">Services</a>
//             <a href="#" className="text-white">About</a>
//             <a href="#" className="text-white">Contact</a>
//           </div>
//         )}

//         {/* Navbar Links */}
//         <div className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} w-full md:w-auto mt-2 md:mt-0`}>
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="block text-white hover:text-gray-400 md:inline-block"
//             >
//               {item.name}
//             </Link>
//           ))}

//           {/* Login / Signup */}
//           <div className="flex space-x-4">
//             <Link href="/register">
//               <button type="button" className="text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2 me-2 mb-2">Sign Up</button>
//             </Link>
//             <Link href="/register">
//               <button type="button" className="text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2 me-2 mb-2">Sign Up</button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Become a Partner", href: "/partner/register" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-md">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/assets/helperbuddy_logo.jpeg" alt="HelperBuddy" width={120} height={120} />
        </Link>

        {/* Mobile Menu Button (Toggles Open/Close) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col space-y-4 p-6 md:hidden">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="nav-link text-white text-lg hover:text-gray-400">
                {item.name}
              </Link>
            ))}

            {/* Login / Signup Buttons for Mobile */}
            <div className="flex flex-row space-x-3 w-full mt-4">
              <Link href="/login" >
                <button type="button" className="w-full text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2">
                  Login
                </button>
              </Link>
              <Link href="/register" >
                <button type="button" className="w-full text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link text-white hover:text-gray-400">
              {item.name}
            </Link>
          ))}

          {/* Login / Signup Buttons for Desktop */}
          <div className="flex space-x-4">
            <Link href="/login">
              <button type="button" className="text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button type="button" className="text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}






