'use client';

import { Blog } from "@/lib/types/api";
import BlogCard from '@/components/ui/BlogCard';

const sampleBlogs: Blog[] = [
    {
        _id: '1',
        title: 'House Cleaning',
        subtitle: 'Professional house cleaning services',
        content: 'Professional house cleaning services',
        imageUrl: '/images/cleaning.jpg',
        date: 'December 15, 2024'
    },
    {
        _id: '2',
        title: 'Plumbing Services',
        subtitle: 'Professional Plumbing services',
        content: 'Professional Plumbing services',
        imageUrl: '/images/cleaning.jpg',
        date: 'January 1, 2025'
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
                    <input className="form-control me-2" type="search" placeholder="Search Keywords" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            {/* main page */}
            <div className="container mt-5 d-flex flex-column align-items-center">
                {sampleBlogs.map(blog => (
                    <BlogCard
                        key={blog._id}
                        blog={blog}
                    />
                ))}
            </div>

        </div>
    );
}
