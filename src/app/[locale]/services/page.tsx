
import ServiceContainer from "@/components/pages/Service/Servicecontainer";
import { getMetaTags } from "@/lib/metatags";
import { getServices } from "@/lib/services";
import { MetaTagsType } from "@/types/alltype";

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Services') || {
    meta_title: 'EcoSoft | Services meta',
    meta_description: 'EcoSoft | Services meta',
    meta_keywords: 'EcoSoft | Services meta',
    
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

export default async function ServicePage() {
  const services = await getServices();
  
  return (
    <div>
      <ServiceContainer services={services} />
    </div>
  )
}