import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export function BlogCard({ imageSrc, title, description, date, category }: BlogCardProps) {
  return (
    <div className="relative px-4 bg-card text-card-foreground rounded-[20px] shadow overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="w-full h-48 object-cover rounded-[12px] mb-4"
        />
        <p className='absolute top-2 left-2 py-[2px] px-3 rounded-[6px] bg-[#06B6D4] text-white text-[14px] '>{category}</p>
      </div>
      <div className="py-4 flex flex-col flex-grow justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-medium mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}