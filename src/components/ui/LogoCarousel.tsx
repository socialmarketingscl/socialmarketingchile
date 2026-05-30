import Image from "next/image";

/* ============================================================
   LogoCarousel — Carrusel infinito de logos de clientes
   CSS marquee puro — sin JavaScript, Server Component
   Logos: slots uniformes, blanco (brightness(0) invert(1)), opacity 62%
   Hover sobre logo-item: pausa + opacity 100%
   ============================================================ */

const LOGOS = [
  { src: "/logos/normalized/Isologo-RIOSEVENTOS.png",         alt: "Ríos Eventos" },
  { src: "/logos/normalized/Isologo-GASFITERIAYDESTAPES.png", alt: "Gasfitería y Destapes" },
  { src: "/logos/normalized/Logotipo-AMORE.png",              alt: "Amore" },
  { src: "/logos/normalized/Logotipo-GARAGE.png",             alt: "Garage" },
  { src: "/logos/normalized/Logotipo-BLOOMCHIC.png",          alt: "Bloomchic" },
  { src: "/logos/normalized/Logotipo-DOMOSHOUSE-optimized.png", alt: "Domos House", variant: "seal" },
];

export default function LogoCarousel() {
  const allLogos = [...LOGOS, ...LOGOS]; /* duplicado para loop seamless */

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .hero-logo-strip {
            margin-top: 54px !important;
            padding-top: 18px !important;
            padding-bottom: 22px !important;
          }
          .hero-logo-strip-label {
            font-size: 0.58rem !important;
            letter-spacing: 0.12em !important;
            margin-bottom: 14px !important;
            padding: 0 20px !important;
          }
          .logo-marquee-track {
            animation-duration: 32s !important;
          }
          .logo-item {
            width: 132px !important;
            height: 56px !important;
          }
          .logo-frame {
            width: 112px !important;
            height: 40px !important;
          }
          .logo-frame-seal {
            width: 58px !important;
            height: 58px !important;
          }
          .logo-carousel-img {
            opacity: 0.58 !important;
          }
        }
      `}</style>
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          /* Fade en los extremos */
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="logo-marquee-track">
          {allLogos.map((logo, i) => (
            <div key={i} className="logo-item">
              <div className={`logo-frame ${logo.variant === "seal" ? "logo-frame-seal" : ""}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="220px"
                  className="logo-carousel-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
