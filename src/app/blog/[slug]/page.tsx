import { Badge } from '@/components/ui/badge';
import { getPostBySlug } from '@/utils/blog';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Ana səhifə</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/blog" className="hover:text-primary">Bloglar</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          {post.title}
        </h1>

        <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-6">
          <Image
            src={post.imageSrc}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-between items-center text-muted-foreground text-sm mb-8">
      <Badge variant="default" className='bg-[#06B6D4] text-base'>{post.category}</Badge>

          
          <span>{post.date}</span>
        </div>

        <article 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
      </div>
    </main>
  );
}