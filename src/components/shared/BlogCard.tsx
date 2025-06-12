import React from 'react';
import Image from 'next/image';
import { Badge } from '../ui/badge';

interface BlogCardProps {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  category: string;
}



export function BlogCard({ imageSrc, title, description, date, category }: BlogCardProps) {
  return (
    <div className="relative p-4 bg-card text-card-foreground rounded-[20px] shadow overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-[12px]"
      />
      <Badge variant="default" className='bg-[#06B6D4] absolute top-6 left-5 text-md'>{category}</Badge>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-2">{date}</p>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
      </div>
    </div>
  );
}