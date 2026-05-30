import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["estrategia-y-consultoria"];

export const metadata = createServiceMetadata(service);

export default function EstrategiaYConsultoriaPage() {
  return <ServicePageTemplate {...service} />;
}
