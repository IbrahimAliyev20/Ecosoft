import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SocialMediaType } from "@/types/alltype";
import { Link } from "@/i18n/navigation";

interface SocialMediaProps {
  socials: SocialMediaType[];
}

export default function FooterHero({ socials }: SocialMediaProps) {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center  bg-background text-foreground">
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-[600] mb-8">
          {t("footer.tagline1")}
          <br />
          {t("footer.tagline2")}
        </h1>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-cyan-500 text-white font-medium px-4 py-2 hover:bg-cyan-600 transition-all"
        >
          {t("footer.contact")}
        </Link>
      </div>

      <div className="w-full border-t border-border py-4 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-auto flex justify-between items-center">
            <Link href="/">
              <Image
                src="/image/logo.svg"
                width={89}
                height={45}
                priority={true}
                alt="HydroLink Logo"
              />
            </Link>

            <div className="md:hidden flex items-center gap-4">
              {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                aria-label="Instagram"
                target="_blank"
              >
              <Image
                src={social.image}  
                width={20}
                height={20}
                priority={true}
                alt={social.name}
              />
              </Link>
                
              ))}
            
            </div>
          </div>

          <nav className="flex flex-col md:flex-row items-center gap-6 my-8 md:my-0 md:mx-auto">
            <Link href="/" className="text-[#06B6D4] hover:text-primary">
              {t("navigation.home")}
            </Link>
            <Link href="/about" className="text-[#06B6D4] hover:text-primary">
              {t("navigation.about")}
            </Link>
            <Link
              href="/products"
              className="text-[#06B6D4] hover:text-primary"
            >
              {t("navigation.products")}
            </Link>
            <Link
              href="/services"
              className="text-[#06B6D4] hover:text-primary"
            >
              {t("navigation.services")}
            </Link>
            <Link href="/blogs" className="text-[#06B6D4] hover:text-primary">
              {t("navigation.blog")}
            </Link>
            <Link href="/contact" className="text-[#06B6D4] hover:text-primary">
              {t("navigation.contact")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                aria-label="Instagram"
                target="_blank"
              >
             <Image
                src={social.image}  
                width={30}
                height={30}
                priority={true}
                alt={social.name}
              />
              </Link>
                
              ))}
          </div>
        </div>
        <hr className="w-full border-gray-200 mt-4 md:hidden" />
      </div>
    </div>
  );
}
