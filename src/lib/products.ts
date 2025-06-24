import { cookies } from 'next/headers';
import { ProductType, ProductListResponse, ProductDetailResponse } from '@/types/alltype'; 

export async function getProducts(): Promise<ProductType[]> { 
    const cookieStore = await cookies(); 
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 
        if (!baseUrl) {
            throw new Error("NEXT_PUBLIC_BASE_URL is not defined in environment variables.");
        }

        const initialUrl = `${baseUrl}/products`; 

        const firstPageRes = await fetch(initialUrl, {
            headers: {
                "Accept-Language": localeFromCookie,
            },
            cache: "no-store", 
        });

        if (!firstPageRes.ok) {
            console.error(`Failed to fetch first page of products: ${firstPageRes.status} ${firstPageRes.statusText}`);
            throw new Error('Failed to fetch products');
        }

        const firstPageJson: ProductListResponse = await firstPageRes.json();
        const allProducts: ProductType[] = firstPageJson.data; 
        const lastPage = firstPageJson.meta.last_page;

        if (lastPage <= 1) {
            return allProducts;
        }

        const pageRequests = [];
        for (let page = 2; page <= lastPage; page++) {
            const pageUrl = `${initialUrl}?page=${page}`;
            const request = fetch(pageUrl, {
                headers: {
                    "Accept-Language": localeFromCookie,
                },
                 cache: 'no-store' 
            }).then(res => {
                if (!res.ok) {
                    console.error(`Failed to fetch product page ${page}: ${res.status} ${res.statusText}`);
                    return { 
                        data: [], 
                        links: { first: '', last: '', prev: null, next: null }, 
                        meta: { 
                            current_page: page, 
                            from: 0, 
                            last_page: page, 
                            links: [], 
                            path: initialUrl, 
                            per_page: 0, 
                            to: 0, 
                            total: 0 
                        } 
                    } as ProductListResponse; 
                }
                return res.json() as Promise<ProductListResponse>; 
            });
            pageRequests.push(request);
        }

        const remainingPagesResponses = await Promise.all(pageRequests);

        remainingPagesResponses.forEach(pageJson => {
            if (pageJson.data) {
                allProducts.push(...pageJson.data);
            }
        });

        return allProducts;

    } catch (error) {
        console.error("Error in getProducts (with pagination):", error);
        throw error; 
    }
}

export async function getProductBySlug(slug: string): Promise<ProductType | null> {
    const cookieStore = await cookies(); 
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';

    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl) {
            throw new Error("NEXT_PUBLIC_BASE_URL is not defined in environment variables.");
        }

        const res = await fetch(`${baseUrl}/product/${slug}`, { 
            headers: {
                "Accept-Language": localeFromCookie,
            },
            cache: 'no-store' 
        });

        if (!res.ok) {
            console.error(`Failed to fetch product with slug ${slug}: ${res.status} ${res.statusText}`);
            return null; 
        }

        const json: ProductDetailResponse = await res.json();

        if (json.status && json.data) {
            return json.data; 
        } else {
            console.error(`API returned an error for slug ${slug}: ${json.message}`);
            return null;
        }

    } catch (error) {
        console.error(`Error in getProductBySlug for slug ${slug}:`, error);
        return null;
    }
}