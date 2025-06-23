
import BlogPage from '@/components/pages/Blog/BlogPage';
import { getBlogs } from '@/lib/blog';
import { getTags } from '@/lib/tags';
import React from 'react';

const Blog = async () => {
  const [filterTags, allPosts] = await Promise.all([
    getTags(),
    getBlogs()
  ]);

  return (
    <div>
      <BlogPage filterTags={filterTags} initialPosts={allPosts} />
    </div>
  );
};

export default Blog;