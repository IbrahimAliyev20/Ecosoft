import { Navbar } from "@/components/shared/Header/NavBar";
import  "./globals.css";
import { Footer } from "@/components/shared/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-20 ">

        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
