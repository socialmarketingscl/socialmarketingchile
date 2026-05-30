import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["identidad-visual-y-marca"];

export const metadata = createServiceMetadata(service);

export default function IdentidadVisualYMarcaPage() {
  return <ServicePageTemplate {...service} />;
}
