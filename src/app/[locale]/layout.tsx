import { Navbar } from "@/components/shared/Header/NavBar";
import { Footer } from "@/components/shared/Footer/Footer";
import  "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
           <NextIntlClientProvider messages={messages}>
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
