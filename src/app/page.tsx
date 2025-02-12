"use client";

import SearchBar from "@/components/ui/SearchBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Service } from "@/lib/types";
import ServiceCard from "@/components/ui/ServiceCard";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET!;
import Image from 'next/image';


// Sample data - Replace with actual API call
const sampleServices: Service[] = [
  {
    id: "1",
    title: "House Cleaning",
    description: "Professional house cleaning services",
    price: 999,
    category: "Cleaning",
    availablePincodes: ["400001", "400002"],
  },
  {
    id: "2",
    title: "Plumbing",
    description: "Expert plumbing services",
    price: 599,
    category: "Plumbing",
    availablePincodes: ["400001", "400003"],
  },
  {
    id: "3",
    title: "Carpenting",
    description: "Expert carpentry services",
    price: 1099,
    category: "Carpenting",
    availablePincodes: ["400001", "400005"],
  },
  {
    id: "4",
    title: "Appliences Repairing",
    description: "Repairing and Service of Appliances",
    price: 1099,
    category: "Repairing",
    availablePincodes: ["400003", "400005"],
  },
];

export default function Home() {
  const [services, setServices] = useState<Service[]>(sampleServices);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
        const user = JSON.parse(userData);
        setUser(user);

        // Redirect service providers to their dashboard
        if (user.userType === 'serviceProvider') {
          router.push('/provider/dashboard');
        }

        // Extend token expiration to 20 days
        const newToken = jwt.sign(
          { id: decoded.id, email: decoded.email, userType: decoded.userType },
          JWT_SECRET,
          { expiresIn: "20d" }
        );
        localStorage.setItem("token", newToken);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, [router]);

  const handleSearch = (query: string) => {
    if (!query) {
      setServices(sampleServices);
      return;
    }

    const filtered = sampleServices.filter(
      (service) =>
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()) ||
        service.category.toLowerCase().includes(query.toLowerCase())
    );
    setServices(filtered);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <div className="container">
        {/* Background Image with Search Section Overlay */}
        <section className="relative w-full h-auto my-10">
          {/* This is old Searchbar */}
          {/* Search Section Overlaid on Background */}
          {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 p-6 rounded-lg w-3/4 mx-auto mt-12">
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
              Find Trusted Service Providers
            </h1>
            <p className="text-2xl text-600 mb-4 drop-shadow-lg">
              Book reliable services at your doorstep
            </p>
            <div className="max-w-2xl w-full">
              <SearchBar
                onSearch={handleSearch}
                suggestions={["Cleaning", "Plumbing", "Electrical", "Painting"]}
              />
            </div>
          </div> */}

          {/* This is new temporary Searchbar */}
          {/* <div className="container d-flex flex-row">
            <div className="p-6">
              <h1 className="text-center mt-10">Find Trusted Service Providers</h1>
              <h5 className="text-center mt-3">Book reliable services at your doorstep</h5>
              <div className="container-fluid mt-5">
                <form className="d-flex " role="search">
                  <input className="form-control me-2 rounded-start-5" type="search" placeholder="What are you looking for?" aria-label="Search" />
                  <button className="btn btn-outline-success rounded-end-5" type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
                </form>
              </div>
            </div>
            <div className="d-flex flex-fill p-6 justify-content-center align-items-center w-auto">
              <Image src="/assets/undraw_booking_1ztt.svg" alt="book" width={500} height={500} />
            </div>
          </div> */}
          <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
            {/* Search Bar (55% width on medium+ screens, full width on small screens) */}
            <div className="w-full md:w-7/12 text-center">
              <h1 className="mt-10 text-3xl font-bold">Find Trusted Service Providers</h1>
              <h5 className="mt-3 text-lg text-gray-600">Book reliable services at your doorstep</h5>
              <div className="mt-5 flex justify-center">
                <form className="flex w-3/4" role="search">
                  <input
                    className="flex-grow p-2 rounded-l-lg border border-gray-300"
                    type="search"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                  />
                  <button className="px-4 py-2 bg-green-500 text-white rounded-r-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Image (45% width on medium+ screens, hidden on small screens) */}
            <div className="hidden md:flex md:w-5/12 justify-center">
              <Image src="/assets/undraw_booking_1ztt.svg" alt="book" width={500} height={500} />
            </div>
          </div>
        </section>

        {/* Service Cards Section (Now Positioned Below the Background Image) */}
        <section className="relative mt-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Available Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
