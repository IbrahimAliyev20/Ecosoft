import { AttributeType } from '@/types/alltype';
import {cookies} from 'next/headers'


export async function getAttributes(): Promise<AttributeType[]> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/attributes`, {
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
