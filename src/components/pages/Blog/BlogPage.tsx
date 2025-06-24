'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

import { BlogCard } from '@/components/pages/Blog/BlogCard';
import { TagType, BlogPost } from '@/types/alltype'; 
import { useTranslations } from 'next-intl';

type BlogPageProps = {
  filterTags: TagType[];
  initialPosts: BlogPost[];
};

export default function BlogPage({ filterTags, initialPosts }: BlogPageProps) {
  const t = useTranslations("blogs");
  const [activeTag, setActiveTag] = useState(t('allblogs'));


  const filteredPosts = useMemo(() => {
    if (activeTag === t('allblogs')) {
      return initialPosts;
    }
    return initialPosts.filter((post) => post.tag === activeTag);
  }, [activeTag, initialPosts]);

  const allDisplayTags = [{ name: t('allblogs'), slug: 'all' }, ...filterTags];

  return (
    <main className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-foreground">
          {t('blog')}
        </h1>

        <div className="flex items-center gap-2 flex-wrap mb-10">
          {allDisplayTags.map((tag) => (
            <button
              key={tag.slug}
              onClick={() => setActiveTag(tag.name)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors bg-[#F4F4F5] ${
                activeTag === tag.name
                  ? 'bg-white text-gray-800 shadow border-1 border-[#06B6D4]'
                  : 'text-gray-500 hover:bg-gray-200 '
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.slug}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <p className="text-muted-foreground">
              {t('no_posts_found')}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}