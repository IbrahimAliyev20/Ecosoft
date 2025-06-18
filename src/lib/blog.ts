import { BlogPost } from '@/types/alltype';
import { cookies } from 'next/headers'

export async function getBlogs(): Promise<BlogPost[]> {
    const cookieStore = await cookies()
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

    const initialUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`;

    const firstPageRes = await fetch(initialUrl, {
        headers: {
            "Accept-Language": localeFromCookie,
        },
        cache: "no-store",
    });

    if (!firstPageRes.ok) {
        throw new Error('Failed to fetch blogs');
    }

    const firstPageJson = await firstPageRes.json();
    const allPosts: BlogPost[] = firstPageJson.data;
    const lastPage = firstPageJson.meta.last_page;

    if (lastPage <= 1) {
        return allPosts;
    }

    const pageRequests = [];
    for (let page = 2; page <= lastPage; page++) {
        const pageUrl = `${initialUrl}?page=${page}`;
        const request = fetch(pageUrl, {
            headers: {
                "Accept-Language": localeFromCookie,
            },
             next: {
      revalidate: 60 
    }
        }).then(res => {
            if (!res.ok) {
                console.error(`Failed to fetch page ${page}`);
                return { data: [] }; 
            }
            return res.json();
        });
        pageRequests.push(request);
    }

    const remainingPagesResponses = await Promise.all(pageRequests);

    remainingPagesResponses.forEach(pageJson => {
        if (pageJson.data) {
            allPosts.push(...pageJson.data);
        }
    });

    return allPosts;
}


export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`, {
    headers: {
      "Accept-Language": localeFromCookie,
    },
     next: {
      revalidate: 60 
    }
  });
  const json = await res.json();
  return json.data; 
}