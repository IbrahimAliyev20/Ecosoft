import { TagType } from '@/types/alltype'; 
import { cookies } from 'next/headers';

export async function getTags(): Promise<TagType[]> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tags`, {
    headers: {
      "Accept-Language": localeFromCookie,
    },
    next: {
      revalidate: 5 
    }
  });

  const json = await res.json();
  return json.data;
}