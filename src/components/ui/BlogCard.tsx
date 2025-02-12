'use client';

import { Blog } from '@/lib/types/api';
import { useState } from 'react';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const [expandedBlog, setExpandedBlog] = useState<string | null>(null);

  const toggleExpand = (id: string | null) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div className='p-4 mt-3 w-75 border-bottom border-dark-subtle'>
      <div className="card-body">
        <h3 className="card-title">{blog.title}</h3>
        <h6 className="card-text">{blog.subtitle}</h6>
        <p className="card-text"><small className="text-body-secondary">Posted on {blog.date}</small></p>
        <p className="text-gray-700">
          {expandedBlog === blog._id ? blog.content : ""}
        </p>
        <button
          onClick={() => toggleExpand(blog._id ?? null)}
          className="text-blue-500"
        >
          {expandedBlog === blog._id ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}