import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-3 pt-5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Company Info */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">HelperBuddy</h2>
          <p className="mt-4 text-sm">
            HelperBuddy makes it simple and hassle-free to connect users with top-quality services for home and office.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:text-pink-600" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer hover:text-white" size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:text-blue-600" size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="cursor-pointer hover:text-red-600" size={20} />
            </a>
          </div>
        </div>

        {/* Product Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">Product</h3>
          <ul className="mt-4 space-y-2 text-sm pl-0">
            {["Features", "Agencies", "Secure Payments", "Service Booking", "E-Commerce", "Affiliates"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:shadow-lg hover:text-blue-500 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CMS Security Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="mt-4 space-y-2 text-sm pl-0">
            {["About", "Our Story", "Service Partners", "Eco-Friendly", "Media", "Careers"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:shadow-lg hover:text-blue-500 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">Support</h3>
          <ul className="mt-4 space-y-2 text-sm pl-0">
            {["FAQs", "Customers", "Service Guarantee", "Contact Us", "Testimonials", "Help"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:shadow-lg hover:text-blue-500 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-2 px-6 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-center">
          <p className="mt-2">Made with ❤️ in 🇮🇳</p>
          <p className="mt-2 sm:mt-0">© 2025 HelperBuddy. All Rights Reserved.</p>
          <div className="mt-2 mb-2 sm:mt-0 flex gap-4">
            {["Privacy Policy", "Terms of Service", "Report a vulnerability"].map((link) => (
              <a
                key={link}
                href="#"
                className="no-underline hover:text-blue-400 hover:shadow-lg transition duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
