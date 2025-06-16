import { AboutSection } from "@/components/pages/Home/AboutSection";
import { ServiceSection } from "@/components/pages/Home/ServiceSection";
import { HeroSection } from "@/components/pages/Home/HeroSection";
import { BlogSection } from "@/components/pages/Home/BlogSection";
import { CategorySection } from "@/components/pages/Home/CategorySection";
import MissionSection from "@/components/pages/Home/MissionSection";
import { ProductSliderSec } from "@/components/pages/Home/ProductSliderSec";
import { allProducts } from "@/utils/products";



export default function Home() {

  const temporaryProducts = allProducts 

  return (
    <>
      <div className="bg-cyan-50">
        <div className="container mx-auto px-4  pb-10">
          <HeroSection />
        </div>
      </div>

      <div className="container mx-auto  py-16">
        <AboutSection title="Haqqımızda" />
      </div>
    
      <div className="container mx-auto px-4 py-16">
        <MissionSection />
      </div>
      <div className="container mx-auto px-4 py-16">
        <ServiceSection />
      </div>
        <div className="container mx-auto px-4 py-16">
        <ProductSliderSec title="Məhsullar" products={temporaryProducts} />
      </div>
      <div className="container mx-auto px-4 py-16">
        <CategorySection />
      </div>
        <div className="container mx-auto px-4 py-10">
        <BlogSection />
      </div>
      
    </>
  );
}
