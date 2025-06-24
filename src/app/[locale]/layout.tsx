import { Navbar } from "@/components/shared/Header/NavBar";
import { Footer } from "@/components/shared/Footer/Footer";
import  "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import TopLoader from "@/components/shared/TopLoader";
import { MetaTagsType } from "@/types/alltype";
import { getMetaTags } from "@/lib/metatags";

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'home') || {
    meta_title: 'EcoSoft',
    meta_description: 'EcoSoft',
    meta_keywords: 'EcoSoft',
    
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const {locale} = await params;
  const messages = (await getMessages()) as Record<string, string>;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
      <TopLoader />
           <NextIntlClientProvider messages={messages} >
        <Navbar />
        <main className="min-h-screen pt-20 ">
          
        {children}
        </main>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
