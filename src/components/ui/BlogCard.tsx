'use client';

import { Blog } from '@/lib/types/api';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {

  return (
    <div className='p-4 mt-3 w-75 border-bottom border-dark-subtle'>
      <div className="card-body">
        <h3 className="card-title">{blog.title}</h3>
        <h6 className="card-text">{blog.subtitle}</h6>
        <div className="d-flex justify-content-between">
          <p className="card-text"><small className="text-body-secondary">Posted on {blog.date}</small></p>
          {/* Expand the blog by clicking this link and show the content */}
          <a href="" style={{textDecoration:'None'}}>Read More</a>
        </div>
      </div>
    </div>
  );
}