
// import { Badge } from '@/components/ui/badge';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { BlogCard } from '@/components/pages/Blog/BlogCard';
// import { getBlogBySlug, getBlogs } from '@/lib/blog'; 

// interface BlogPostPageProps {
//   params: Promise<{ slug: string }>;
// }

// export default async function BlogPostPage({ params }: BlogPostPageProps) {
//   const { slug } = await params;

//   const [post, allPosts] = await Promise.all([
//     getBlogBySlug(slug),
//     getBlogs()
//   ]);

//   const formattedPost = post.blog

//   if (!formattedPost) {
//     notFound();
//   }

//   const otherBlogPosts = allPosts.filter((blogPost) => blogPost.slug !== slug);
//   console.log(formattedPost);
  
//   return (
//     <main className="pt-12">
//       <nav className="container mx-auto px-6 text-sm text-muted-foreground mb-8">
//         <Link href="/" className="hover:text-primary">Ana səhifə</Link>
//         <span className="mx-2">&gt;</span>
//         <Link href="/blogs" className="hover:text-primary">Bloglar</Link>
//         <span className="mx-2">&gt;</span>
//         <span className="text-foreground">{formattedPost.title}</span>
//       </nav>
//       <div className="container mx-auto px-4 max-w-4xl">
//         <h1 className="text-4xl md:text-2xl font-semibold text-center mb-8 text-foreground">
//           {formattedPost.title}
//         </h1>
//         <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-6">
//           <Image
//             src={formattedPost.image || ''} 
//             alt={formattedPost.title}
//             width={1000}  
//             height={1000}
//             priority={true}
//             className="object-cover"
//           />
//         </div>
//         <div className="flex justify-between items-center text-muted-foreground text-sm mb-8">
//           <Badge variant="default" className='bg-[#06B6D4] text-base'>
//             {formattedPost.tag} 
//           </Badge>
//           <span>{formattedPost.created_at}</span>
//         </div>
//         <article
//           className="prose dark:prose-invert max-w-none"
//           dangerouslySetInnerHTML={{ __html: formattedPost?.description || '' }} 
//         />
//       </div>

//       <hr className='my-16'/>

//       <div className='container mx-auto px-4 pt-0 pb-16'>
//         <h2 className='text-3xl font-semibold text-center mb-8 text-foreground'>Digər Bloglar</h2>
//         {otherBlogPosts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {otherBlogPosts.slice(0, 3).map((otherPost) => (
//               <Link href={`/blogs/${otherPost.slug}`} key={otherPost.slug}>

//                 <BlogCard post={otherPost} />
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-muted-foreground">Başqa blog yazısı tapılmadı.</p>
//         )}
//       </div>
//     </main>
//   );
// }