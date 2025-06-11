import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
}

export function ServiceCard({ imageSrc, title, description, date }: ServiceCardProps) {
  return (
    <div className="p-4 bg-card text-card-foreground rounded-[20px] shadow overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-[12px]"
      />
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-2">{date}</p>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
      </div>
    </div>
  );
}