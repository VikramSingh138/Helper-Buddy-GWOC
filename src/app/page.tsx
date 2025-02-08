// "use client";

// import SearchBar from "@/components/ui/SearchBar";
// import { useState, useEffect } from "react";
// import { Service } from "@/lib/types";
// import ServiceCard from "@/components/ui/ServiceCard";
// import jwt from "jsonwebtoken";
// const JWT_SECRET = process.env.JWT_SECRET!;

// // Sample data - Replace with actual API call
// const sampleServices: Service[] = [
//   {
//     id: "1",
//     title: "House Cleaning",
//     description: "Professional house cleaning services",
//     price: 999,
//     category: "Cleaning",
//     availablePincodes: ["400001", "400002"],
//   },
//   {
//     id: "2",
//     title: "Plumbing",
//     description: "Expert plumbing services",
//     price: 599,
//     category: "Plumbing",
//     availablePincodes: ["400001", "400003"],
//   },
//   // Add more sample services
// ];

// export default function Home() {
//   const [services, setServices] = useState<Service[]>(sampleServices);
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("user");
//     if (token && userData) {
//       try {
//         const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
//         setUser(JSON.parse(userData));

//         // Extend token expiration to 20 days
//         const newToken = jwt.sign(
//           { id: decoded.id, email: decoded.email, userType: decoded.userType },
//           JWT_SECRET,
//           { expiresIn: "20d" }
//         );
//         localStorage.setItem("token", newToken);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//       }
//     }
//   }, []);

//   const handleSearch = (query: string) => {
//     if (!query) {
//       setServices(sampleServices);
//       return;
//     }

//     const filtered = sampleServices.filter(
//       (service) =>
//         service.title.toLowerCase().includes(query.toLowerCase()) ||
//         service.description.toLowerCase().includes(query.toLowerCase()) ||
//         service.category.toLowerCase().includes(query.toLowerCase())
//     );
//     setServices(filtered);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <>
//       <div className="container mw-none">
//         <section className="container mw-none">
//           <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <img src="../../assets/home1.jpeg" className="d-block w-100" alt="home1.jpeg"/>
//               </div>
//               <div className="carousel-item">
//                 <img src="../../assets/home2.jpeg" className="d-block w-100" alt="home2.jpeg"/>
//               </div>
//               <div className="carousel-item">
//                 <img src="../../assets/home3.jpeg" className="d-block w-100" alt="home3.jpeg"/>
//               </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </section>
//         <section className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">
//             Find Trusted Service Providers
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Book reliable services at your doorstep
//           </p>
//           <div className="max-w-2xl mx-auto">
//             <SearchBar
//               onSearch={handleSearch}
//               suggestions={["Cleaning", "Plumbing", "Electrical", "Painting"]}
//             />
//           </div>
//         </section>

//         <section className="flex justify-end mb-4">
//           {user ? (
//             <div className="flex items-center space-x-4">
//               <span className="text-lg font-semibold">{user.name}</span>
//               <button onClick={handleLogout} className="text-blue-500">
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="flex space-x-4">
//               <a href="/login" className="text-blue-500">
//                 Login
//               </a>
//               <a href="/register" className="text-blue-500">
//                 Sign Up
//               </a>
//             </div>
//           )}
//         </section>

//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {services.map((service) => (
//             <ServiceCard key={service.id} service={service} />
//           ))}
//         </section>
//       </div>
//     </>
//   );
// }

// "use client";

// import SearchBar from "@/components/ui/SearchBar";
// import { useState, useEffect } from "react";
// import { Service } from "@/lib/types";
// import ServiceCard from "@/components/ui/ServiceCard";
// import jwt from "jsonwebtoken";
// const JWT_SECRET = process.env.JWT_SECRET!;

// // Sample data - Replace with actual API call
// const sampleServices: Service[] = [
//   {
//     id: "1",
//     title: "House Cleaning",
//     description: "Professional house cleaning services",
//     price: 999,
//     category: "Cleaning",
//     availablePincodes: ["400001", "400002"],
//   },
//   {
//     id: "2",
//     title: "Plumbing",
//     description: "Expert plumbing services",
//     price: 599,
//     category: "Plumbing",
//     availablePincodes: ["400001", "400003"],
//   },
// ];

// export default function Home() {
//   const [services, setServices] = useState<Service[]>(sampleServices);
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("user");
//     if (token && userData) {
//       try {
//         const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
//         setUser(JSON.parse(userData));

//         // Extend token expiration to 20 days
//         const newToken = jwt.sign(
//           { id: decoded.id, email: decoded.email, userType: decoded.userType },
//           JWT_SECRET,
//           { expiresIn: "20d" }
//         );
//         localStorage.setItem("token", newToken);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//       }
//     }
//   }, []);

//   const handleSearch = (query: string) => {
//     if (!query) {
//       setServices(sampleServices);
//       return;
//     }

//     const filtered = sampleServices.filter(
//       (service) =>
//         service.title.toLowerCase().includes(query.toLowerCase()) ||
//         service.description.toLowerCase().includes(query.toLowerCase()) ||
//         service.category.toLowerCase().includes(query.toLowerCase())
//     );
//     setServices(filtered);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <>
//       <div className="container mw-none relative">
//         {/* Carousel Section (Background Layer) */}
//         <section className="relative w-full h-[400px]">
//           <div id="carouselExampleAutoplaying" className="carousel slide absolute inset-0 z-0" data-bs-ride="carousel">
//             <div className="carousel-inner h-full">
//               <div className="carousel-item active">
//                 <img src="../../assets/home1.jpeg" className="d-block w-full h-full object-cover" alt="home1.jpeg"/>
//               </div>
//               <div className="carousel-item">
//                 <img src="../../assets/home2.jpeg" className="d-block w-full h-full object-cover" alt="home2.jpeg"/>
//               </div>
//               <div className="carousel-item">
//                 <img src="../../assets/home3.jpeg" className="d-block w-full h-full object-cover" alt="home3.jpeg"/>
//               </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </section>

//         {/* Search Section (Above the Carousel) */}
//         <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-0 p-6 rounded-lg text-center">
//           <h1 className="text-4xl font-bold mb-4">
//             Find Trusted Service Providers
//           </h1>
//           <p className="text-2xl text-600 mb-4">
//             Book reliable services at your doorstep
//           </p>
//           <div className="max-w-2xl mx-auto">
//             <SearchBar
//               onSearch={handleSearch}
//               suggestions={["Cleaning", "Plumbing", "Electrical", "Painting"]}
//             />
//           </div>
//         </section>
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {services.map((service) => (
//             <ServiceCard key={service.id} service={service} />
//           ))}
//         </section>
//       </div>
//     </>
//   );
// }

"use client";

import SearchBar from "@/components/ui/SearchBar";
import { useState, useEffect } from "react";
import { Service } from "@/lib/types";
import ServiceCard from "@/components/ui/ServiceCard";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET!;

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
];

export default function Home() {
  const [services, setServices] = useState<Service[]>(sampleServices);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
        setUser(JSON.parse(userData));

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
  }, []);

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
      <div className="container mw-none">
        {/* Background Image with Search Section Overlay */}
        <section className="relative w-full h-[100vh]">
          {/* Background Image Carousel */}
          <div id="carouselExampleAutoplaying" className="carousel slide absolute inset-0 z-0 h-full" data-bs-ride="carousel">
            <div className="carousel-inner h-full">
              <div className="carousel-item active">
                <img src="../../assets/home1.jpeg" className="d-block w-full h-full object-cover" alt="home1.jpeg"/>
              </div>
              <div className="carousel-item">
                <img src="../../assets/home2.jpeg" className="d-block w-full h-full object-cover" alt="home2.jpeg"/>
              </div>
              <div className="carousel-item">
                <img src="../../assets/home3.jpeg" className="d-block w-full h-full object-cover" alt="home3.jpeg"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Search Section Overlaid on Background */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 p-6 rounded-lg w-3/4 mx-auto mt-12">
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
          </div>
        </section>

        {/* Service Cards Section (Now Positioned Below the Background Image) */}
        <section className="mt-16 px-4">
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
