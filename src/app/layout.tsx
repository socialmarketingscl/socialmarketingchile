import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Analytics from "@/components/analytics/Analytics";
import AnalyticsEvents from "@/components/analytics/AnalyticsEvents";

/* ============================================================
   FUENTES DE MARCA — next/font/google (sin layout shift)
   ============================================================ */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* ============================================================
   METADATA BASE
   ============================================================ */
export const metadata: Metadata = {
  metadataBase: new URL("https://socialmarketingchile.cl"),
  title: {
    default: "Social Marketing | Agencia de Marketing Digital e IA en Chile",
    template: "%s | Social Marketing",
  },
  description:
    "Agencia de marketing digital en Santiago, Chile. Conectamos estrategia, publicidad digital, automatización e inteligencia artificial para captar clientes, ordenar procesos comerciales y convertir oportunidades en ventas reales. Agenda tu diagnóstico gratuito.",
  keywords: [
    "agencia de marketing digital Chile",
    "agencia de marketing digital Santiago",
    "marketing digital e inteligencia artificial",
    "captación de clientes",
    "automatización comercial",
    "Meta Ads Chile",
    "Google Ads Chile",
    "SEO Chile",
    "CRM para pymes Chile",
    "agentes de IA para negocios",
  ],
  authors: [{ name: "Social Marketing" }],
  creator: "Social Marketing",
  publisher: "Social Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://socialmarketingchile.cl",
    siteName: "Social Marketing",
    title: "Social Marketing | Agencia de Marketing Digital e IA en Chile",
    description:
      "Agencia de marketing digital en Santiago, Chile. Conectamos estrategia, publicidad digital, automatización e inteligencia artificial para captar clientes, ordenar procesos comerciales y convertir oportunidades en ventas reales.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Social Marketing — Marketing Digital + Inteligencia Artificial aplicada a ventas y conversión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Marketing | Agencia de Marketing Digital e IA en Chile",
    description:
      "Agencia de marketing digital en Santiago, Chile. Estrategia, publicidad digital, automatización e IA para captar y convertir clientes.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  alternates: {
    canonical: "https://socialmarketingchile.cl",
  },
};

/* ============================================================
   SCHEMA JSON-LD — Organization + LocalBusiness
   ============================================================ */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Social Marketing",
  url: "https://socialmarketingchile.cl",
  logo: "https://socialmarketingchile.cl/social-marketing-agencia-marketing-digital-ia.png",
  image: "https://socialmarketingchile.cl/opengraph-image",
  description:
    "Agencia de marketing digital e inteligencia artificial en Santiago, Chile. Diseñamos sistemas de captación, automatización y conversión comercial.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  telephone: "+56961533546",
  email: "contacto@socialmarketingchile.cl",
  sameAs: [
    "https://www.instagram.com/socialmarketing_cl",
    "https://wa.me/56961533546",
  ],
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  priceRange: "$$",
};

/* ============================================================
   ROOT LAYOUT
   ============================================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${instrumentSerif.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Analytics />
        <AnalyticsEvents />
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
