import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["sistemas-de-ventas-con-ia"];

export const metadata = createServiceMetadata(service);

export default function SistemasDeVentasConIAPage() {
  return <ServicePageTemplate {...service} />;
}
