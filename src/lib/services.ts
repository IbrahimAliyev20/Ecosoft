import { ServicesType } from '@/types/alltype';
import { cookies } from 'next/headers'

export async function getServices(): Promise<ServicesType[]> {
    const cookieStore = await cookies()
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/services`;

    const res = await fetch(url, {
        headers: {
            "Accept-Language": localeFromCookie,
        },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error('Failed to fetch services');
    }

    const jsonResponse = await res.json();
    return jsonResponse.data;
}


export async function getServiceSlug(slug: string): Promise<ServicesType> {
    const cookieStore = await cookies();
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/service/${slug}`, {
      headers: {
        "Accept-Language": localeFromCookie,
      },
      cache: "no-store",
    });
    const json = await res.json();
    return json.data; 
}