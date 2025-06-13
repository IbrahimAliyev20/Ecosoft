'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ButtonMore from '@/components/shared/ButtonMore';
import { allBlogPosts } from '@/utils/blog';
import { BlogCard } from '@/components/pages/Blog/BlogCard';
import Link from 'next/link'; 

export function BlogSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-0 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8 text-foreground">Blog</h2>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {allBlogPosts.map((post,) => (
            <Link href={`/blogs/${post.slug}`} key={post.slug}>
              <BlogCard
                imageSrc={post.imageSrc}
                title={post.title}
                description={post.description}
                date={post.date}
                category={post.category}
                
              />
            </Link>
          ))}
        </div>

        <div className="md:hidden mb-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {allBlogPosts.map((post) => ( 
                <div className="basis-full shrink-0 grow-0 p-2" key={post.slug}> 
                  <Link href={`/blogs/${post.slug}`}> 
                    <BlogCard
                      imageSrc={post.imageSrc}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      category={post.category}
                    />
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
          <Link href="/blogs">

        <div className="text-center">
          <ButtonMore />
        </div>
          </Link>
      </div>
    </section>
  );
}