export const fetchServices = async (filters?: {
  category?: string;
  pincode?: string;
  search?: string;
}) => {
  // API fetching logic
};

export const bookService = async (
  serviceId: string, 
  dateTime: Date, 
  remarks?: string
) => {
  // Booking logic
};

export const createBlog = async (title: string, content: string, imageUrl: string) => {
  try {
    const response = await fetch('/api/admin/blogs', {
      method: 'POST',
      body: JSON.stringify({ title, content, imageUrl }),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  } catch (error) {
    throw new Error('Failed to create blog');
  }
};

export const fetchPaginatedBlogs = async (page = 1) => {
  try {
    const response = await fetch(`/api/blogs?page=${page}`);
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch blogs');
  }
};