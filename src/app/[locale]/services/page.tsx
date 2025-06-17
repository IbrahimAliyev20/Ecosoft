
import ServiceContainer from "@/components/pages/Service/Servicecontainer";
import { getServices } from "@/lib/services";

export default async function ServicePage() {
  const services = await getServices();
  
  return (
    <div>
      <ServiceContainer services={services} />
    </div>
  )
}