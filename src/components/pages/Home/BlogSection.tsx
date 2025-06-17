// components/sections/BlogSection.tsx - YENİ VERSİYA
'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ButtonMore from '@/components/shared/ButtonMore';
import { BlogCard } from '@/components/pages/Blog/BlogCard';
import Link from 'next/link';
import { BlogPost } from '@/types/alltype'; 

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8 text-foreground">Blog</h2>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {posts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.slug}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>

        <div className="md:hidden mb-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {posts.map((post) => (
                <div className="basis-full shrink-0 grow-0 p-2" key={post.slug}>
                  <Link href={`/blogs/${post.slug}`}>
                    <BlogCard post={post} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Link href="/blogs">
            <ButtonMore />
          </Link>
        </div>
      </div>
    </section>
  );
}