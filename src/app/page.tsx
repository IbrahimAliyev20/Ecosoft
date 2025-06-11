import { AboutSection } from "@/components/pages/Home/AboutSection";
import { ServiceSection } from "@/components/pages/Home/ServiceSection";
import { HeroSection } from "@/components/pages/Home/HeroSection";
import { BlogSection } from "@/components/pages/Home/BlogSection";
import { CategorySection } from "@/components/pages/Home/CategorySection";
import MissionSection from "@/components/pages/Home/MissionSection";
import { ProductSliderSec } from "@/components/pages/Home/ProductSliderSec";

export default function Home() {

  const temporaryProducts = [
  {
    imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', // Nümunə şəkil
    title: 'Ecosoft Basicsoft 1500 commercial softener',
    productCode: 'KOD-001'
  },
  {
    imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', // Nümunə şəkil
    title: 'Ecosoft Basicsoft 1500 commercial softener',
    productCode: 'KOD-002'
  },
  {
    imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', // Nümunə şəkil
    title: 'Ecosoft Basicsoft 1500 commercial softener',
    productCode: 'KOD-003'
  },
  {
    imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', // Nümunə şəkil
    title: 'Ecosoft Basicsoft 1500 commercial softener',
    productCode: 'KOD-004'
  },
  {
    imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', // Nümunə şəkil
    title: 'Ecosoft Basicsoft 1500 commercial softener',
    productCode: 'KOD-005'
  },
  {
    imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', // Nümunə şəkil
    title: 'Ecosoft Basicsoft 1500 commercial softener',
    productCode: 'KOD-006'
  },
  {
    imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', // Nümunə şəkil
    title: 'Ecosoft Basicsoft 1500 commercial softener',
    productCode: 'KOD-007'
  },
  {
    imageSrc: 'https://i.ibb.co/00ngy67/productimage1.png', // Nümunə şəkil
    title: 'Nümunə Məhsul 8',
    productCode: 'KOD-008'
  },

  
];

  return (
    <>
      <div className="bg-cyan-50">
        <div className="container mx-auto px-4  pb-10">
          <HeroSection />
        </div>
      </div>

      <div className="container mx-auto  py-10">
        <AboutSection />
      </div>
    
      <div className="container mx-auto px-4 py-10">
        <MissionSection />
      </div>
      <div className="container mx-auto px-4 py-10">
        <ServiceSection />
      </div>
        <div className="container mx-auto px-4 py-10">
        <ProductSliderSec title="Məhsullar" products={temporaryProducts} />
      </div>
      <div className="container mx-auto px-4 py-10">
        <CategorySection />
      </div>
        <div className="container mx-auto px-4 py-10">
        <BlogSection />
      </div>
      
    </>
  );
}
