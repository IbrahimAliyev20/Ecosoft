// components/pages/Blog/BlogCard.tsx - YENİ VERSİYA

import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types/alltype'; // Əvvəl yaratdığınız BlogPost tipini import edirik

// Props-ları tək-tək yazmaq əvəzinə, bütün post obyektini qəbul edirik
interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  // Statik datadakı "description" sahəsi API-də də "description" olaraq gəlir,
  // ancaq içində HTML teqləri var. line-clamp-3 bunu mətn kimi göstərib kəsəcək.
  // Bu, ilkin mərhələ üçün kifayətdir.
  const plainDescription = post.description.replace(/<[^>]*>?/gm, ''); 

  return (
    <div className="relative bg-card text-card-foreground rounded-[20px] shadow overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-48">
        <Image
          src={post.image} // DƏYİŞİKLİK: imageSrc -> post.image
          alt={post.title}
          fill
          className="w-full h-48 object-cover rounded-[12px] mb-4"
        />
        <p className='absolute top-2 left-2 py-[2px] px-3 rounded-[6px] bg-[#06B6D4] text-white text-[14px] '>
          {post.tag} {/* DƏYİŞİKLİK: category -> post.tag */}
        </p>
      </div>
      <div className="py-4 px-4 flex flex-col flex-grow justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{post.created_at}</span> {/* DƏYİŞİKLİK: date -> post.created_at */}
        </div>
        <h3 className="text-xl font-medium mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {plainDescription} {/* HTML teqlərindən təmizlənmiş təsvir */}
        </p>
      </div>
    </div>
  );
}