import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["gestion-de-redes-sociales"];

export const metadata = createServiceMetadata(service);

export default function GestionDeRedesSocialesPage() {
  return <ServicePageTemplate {...service} />;
}
