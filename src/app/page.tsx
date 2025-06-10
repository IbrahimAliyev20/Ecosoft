import { AboutSection } from "@/components/pages/Home/AboutSection";
import { ServiceSection } from "@/components/pages/Home/ServiceSection";
import { HeroSection } from "@/components/pages/Home/HeroSection";
import { MissionSection } from "@/components/pages/Home/MissionSection";
import { BlogSection } from "@/components/pages/Home/BlogSection";
import { CategorySection } from "@/components/pages/Home/CategorySection";

export default function Home() {
  return (
    <>
      <div className="bg-cyan-50">
        <div className="container mx-auto px-4  pb-10">
          <HeroSection />
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <AboutSection />
      </div>
    
      <div className="container mx-auto px-4 py-10">
        <MissionSection />
      </div>
      <div className="container mx-auto px-4 py-10">
        <ServiceSection />
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
