'use client'; 

import React, { useState, useMemo } from 'react';
import Link from 'next/link'; 
import { ServiceCard } from '@/components/shared/ServiceCard';
import { allBlogPosts } from '@/utils/blog';

const filterTags = ['Bütün yazılar', 'Filtrlər', 'Məsləhətlər', 'Sənaye'];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('Bütün yazılar');

  const filteredPosts = useMemo(() => {
    if (activeTag === 'Bütün yazılar') {
      return allBlogPosts;
    }
    return allBlogPosts.filter((post) => post.category === activeTag);
  }, [activeTag]);

  return (
    <main className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-foreground">
          Bloglar
        </h1>

        <div className="flex items-center gap-2 flex-wrap mb-10">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTag === tag
                  ? 'bg-primary text-primary-foreground shadow' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <ServiceCard
                imageSrc={post.imageSrc}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </Link>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <p className="text-muted-foreground">
              Bu kateqoriyaya uyğun yazı tapılmadı.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}