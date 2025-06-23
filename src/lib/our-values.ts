import { OurValuesType } from '@/types/alltype';
import {cookies} from 'next/headers'


export async function getOurValues(): Promise<OurValuesType[]> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/our-values`, {
    headers: {
      "Accept-Language": localeFromCookie, 
    },
     next: {
      evalidate: 5 
    }
  });

  const json = await res.json();
  return json.data; 
}
