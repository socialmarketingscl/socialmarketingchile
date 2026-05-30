import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["posicionamiento-en-google"];

export const metadata = createServiceMetadata(service);

export default function PosicionamientoEnGooglePage() {
  return <ServicePageTemplate {...service} />;
}
