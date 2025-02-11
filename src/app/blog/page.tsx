'use client';

import { Blog } from "@/lib/types/api";
import BlogCard from '@/components/ui/BlogCard';

const sampleBlogs: Blog[] = [
  {
    _id: '1',
    title: 'House Cleaning',
    content: 'Professional house cleaning services',
    imageUrl: '/images/cleaning.jpg',
    createdAt: '2021-08-01T12:00:00.000Z'
  },
  // Add more sample blogs
];

export default function ServicesPage() {

    return (
        <div className="container">
            {/* intro */}
            <div className="container mt-5">
                <h1 className="text-center">Your Home, Our Expertise</h1>
                <h3 className="text-center mt-4">Expert Tips, Maintenance Guides & Solutions for a Better Home</h3>
            </div>

            {/* searchbar */}
            <div className="container w-50 mt-4">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search Keywords" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            {/* main page */}
            <div className="container">

            </div>

        </div>
    );
}
