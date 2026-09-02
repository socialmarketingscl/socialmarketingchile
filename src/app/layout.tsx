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
    "Agencia de marketing digital e inteligencia artificial en Vitacura, Santiago de Chile. Diseñamos sistemas de captación, automatización y conversión comercial. Diagnóstico gratuito.",
  keywords: [
    "agencia de marketing digital Chile",
    "agencia de marketing digital Santiago",
    "agencia de marketing digital Vitacura",
    "agencia de inteligencia artificial Vitacura",
    "marketing digital Vitacura",
    "agencia marketing IA Vitacura",
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
    siteName: "Social Marketing Chile",
    title: "Social Marketing | Agencia de Marketing Digital e IA en Chile",
    description: "Sistemas digitales para captar, ordenar y convertir clientes.",
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
    description: "Sistemas digitales para captar, ordenar y convertir clientes.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "https://socialmarketingchile.cl/",
    },
  },
};

/* ============================================================
   SCHEMA JSON-LD — Organization + LocalBusiness
   ============================================================ */
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://socialmarketingchile.cl/#organization",
      name: "Social Marketing",
      legalName: "Social Marketing Chile",
      url: "https://socialmarketingchile.cl",
      logo: {
        "@type": "ImageObject",
        "@id": "https://socialmarketingchile.cl/#logo",
        url: "https://socialmarketingchile.cl/social-marketing-agencia-marketing-digital-ia.png",
        caption: "Social Marketing — Agencia de Marketing Digital e IA en Chile",
      },
      description:
        "Agencia de marketing digital e inteligencia artificial en Vitacura, Santiago de Chile. Diseñamos sistemas de captación, automatización y conversión comercial para empresas que necesitan crecer con estrategia y tecnología.",
      slogan: "Más que presencia digital, sistemas para crecer.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Pdte. Kennedy 5600, Of. 507",
        addressLocality: "Vitacura",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+56961533546",
          contactType: "customer service",
          availableLanguage: "Spanish",
          areaServed: "CL",
        },
        {
          "@type": "ContactPoint",
          email: "administracion@socialmarketingchile.cl",
          contactType: "sales",
          availableLanguage: "Spanish",
          areaServed: "CL",
        },
      ],
      telephone: "+56961533546",
      email: "administracion@socialmarketingchile.cl",
      sameAs: [
        "https://www.instagram.com/socialmarketing_cl",
        "https://share.google/oe8amNvyOkbtjiG0Q",
      ],
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      knowsAbout: [
        "Marketing Digital",
        "Publicidad Digital",
        "Meta Ads",
        "Google Ads",
        "SEO",
        "Gestión de Redes Sociales",
        "Branding",
        "Automatización Comercial",
        "Inteligencia Artificial",
      ],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://socialmarketingchile.cl/#website",
      url: "https://socialmarketingchile.cl",
      name: "Social Marketing",
      inLanguage: "es-CL",
      publisher: {
        "@id": "https://socialmarketingchile.cl/#organization",
      },
    },
  ],
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
