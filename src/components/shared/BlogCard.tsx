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
    <div className="relative p-4 bg-card text-card-foreground rounded-[20px] shadow overflow-hidden flex flex-col h-full"> {/* Added flex flex-col h-full */}
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-[12px] mb-4" // Added mb-4 for spacing
      />
      <Badge variant="default" className='bg-[#06B6D4] absolute top-6 left-5 text-md'>{category}</Badge>
      <div className="p-4 flex flex-col flex-grow"> {/* Added flex flex-col flex-grow */}
        <p className="text-sm text-muted-foreground mb-2">{date}</p>

        <h3 className="text-xl font-medium mb-2 line-clamp-2"> {/* Added line-clamp-2 */}
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3"> {/* Added line-clamp-3 */}
          {description}
        </p>
        {/* You can add a flex-grow div here if you want space to push content to bottom */}
        {/* <div className="flex-grow"></div> */}
      </div>
    </div>
  );
}