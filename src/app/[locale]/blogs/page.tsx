
import BlogPage from '@/components/pages/Blog/BlogPage';
import { getBlogs } from '@/lib/blog';
import { getMetaTags } from '@/lib/metatags';
import { getTags } from '@/lib/tags';
import { MetaTagsType } from '@/types/alltype';
import React from 'react';

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Blogs') || {
    meta_title: 'EcoSoft | Blogs meta',
    meta_description: 'EcoSoft | Blogs meta',
    meta_keywords: 'EcoSoft | Blogs meta',
    
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}

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