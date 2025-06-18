import { ContactType } from '@/types/alltype';
import {cookies} from 'next/headers'


export async function getContact(): Promise<ContactType> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
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
