// app/blogs/page.tsx - YENİ VERSİYA

import BlogPage from '@/components/pages/Blog/BlogPage';
import { getBlogs } from '@/lib/blog'; // Yaratdığınız API funksiyasını import edirik
import { getTags } from '@/lib/tags'; // Bu funksiyanız olduğu kimi qalır
import React from 'react';

const Blog = async () => {
  // Eyni anda həm tag-ları, həm də blog yazılarını çəkirik
  const [filterTags, allPosts] = await Promise.all([
    getTags(),
    getBlogs()
  ]);

  return (
    <div>
      {/* Datanı props ilə client komponentinə ötürürük */}
      <BlogPage filterTags={filterTags} initialPosts={allPosts} />
    </div>
  );
};

export default Blog;