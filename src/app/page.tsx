import { AboutSection } from "@/components/pages/Home/AboutSection";
import { CleaningServices } from "@/components/pages/Home/CategorySection";
import { HeroSection } from "@/components/pages/Home/HeroSection";
import { MissionSection } from "@/components/pages/Home/MissionSection";
import { ServicesSection } from "@/components/pages/Home/ServiceSection";

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
<ServicesSection />
</div>
<div className="container mx-auto px-4 py-10">
<MissionSection />
</div>
<div className="container mx-auto px-4 py-10">
<CleaningServices />
</div>

</>
  );
}
