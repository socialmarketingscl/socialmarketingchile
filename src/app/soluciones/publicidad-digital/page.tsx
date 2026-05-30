import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["publicidad-digital"];

export const metadata = createServiceMetadata(service);

export default function PublicidadDigitalPage() {
  return <ServicePageTemplate {...service} />;
}
