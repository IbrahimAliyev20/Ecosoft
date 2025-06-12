import { Badge } from '@/components/ui/badge';
import { allBlogPosts, getPostBySlug } from '@/utils/blog'; 
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogCard } from '@/components/shared/BlogCard'; // Import BlogCard for related posts

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherBlogPosts = allBlogPosts.filter((blogPost) => blogPost.slug !== slug);

  return (
    <main className="pt-12">
          <nav className="container mx-auto px-6 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Ana səhifə</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/blog" className="hover:text-primary">Bloglar</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-foreground">{post.title}</span>
        </nav>
      <div className="container mx-auto px-4 max-w-4xl">

    

        <h1 className="text-4xl md:text-2xl font-semibold text-center mb-8 text-foreground">
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

      ---

      <div className='container mx-auto px-4 pt-16'>
        <h2 className='text-3xl font-semibold text-center mb-8 text-foreground'>Digər Bloglar</h2>
        {otherBlogPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherBlogPosts.slice(0, 3).map((otherPost) => ( 
              <Link href={`/blog/${otherPost.slug}`} key={otherPost.slug}>
                <BlogCard
                  imageSrc={otherPost.imageSrc}
                  title={otherPost.title}
                  description={otherPost.description}
                  date={otherPost.date}
                  category={otherPost.category}
                />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Başqa blog yazısı tapılmadı.</p>
        )}
      </div>
    </main>
  );
}