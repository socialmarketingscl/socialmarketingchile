import Image from "next/image";

/* ============================================================
   HeroBackground — Ambiente visual del Hero

   Capas:
   1. Glow ambiental Kinetic Lime
   2. SVG circuito — trazas desktop (x=760-1200) + trazas mobile (x=440-760)
   3. Marca de agua isotipo SM
   ============================================================ */

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
    >

      {/* ─── Glow principal ─── */}
      <div
        style={{
          position: "absolute",
          top: "-140px",
          right: "-60px",
          width: "700px",
          height: "580px",
          background:
            "radial-gradient(ellipse at center, rgba(190,242,100,0.07) 0%, rgba(190,242,100,0.025) 45%, transparent 70%)",
          filter: "blur(48px)",
          borderRadius: "50%",
        }}
      />

      {/* ─── Glow secundario ─── */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          right: "180px",
          width: "300px",
          height: "220px",
          background:
            "radial-gradient(ellipse at center, rgba(190,242,100,0.045) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* ─── Marca de agua isotipo SM — detrás del circuito ─── */}
      <div
        className="hero-watermark-desktop"
      >
        <Image
          src="/logo-blanco-social-marketing-agencia-marketing-digital-ia.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
          sizes="560px"
        />
      </div>

      {/* ─── SVG Circuito ─── */}
      <svg
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="node-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Estilos responsivos dentro del SVG */}
          <style>{`
            .circuit-desktop { display: block; }
            .circuit-mobile   { display: none;  }
            .signal-path {
              stroke: rgba(190,242,100,0.42);
              stroke-width: 1.5;
              stroke-linecap: round;
              fill: none;
              stroke-dasharray: 18 180;
              stroke-dashoffset: 198;
              filter: url(#node-glow);
              opacity: 0.72;
              animation: signal-flow 7.5s linear infinite;
            }
            .signal-path.slow {
              animation-duration: 10.5s;
              animation-delay: -2.4s;
              opacity: 0.52;
            }
            .signal-path.reverse {
              animation-name: signal-flow-reverse;
              animation-duration: 9s;
              animation-delay: -4.8s;
            }
            .signal-node {
              animation: signal-pulse 3.8s ease-in-out infinite;
              transform-box: fill-box;
              transform-origin: center;
            }
            .signal-node.delay-1 { animation-delay: -1.2s; }
            .signal-node.delay-2 { animation-delay: -2.6s; }

            @keyframes signal-flow {
              0%   { stroke-dashoffset: 198; opacity: 0; }
              8%   { opacity: 0.72; }
              82%  { opacity: 0.72; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            @keyframes signal-flow-reverse {
              0%   { stroke-dashoffset: 0; opacity: 0; }
              8%   { opacity: 0.58; }
              82%  { opacity: 0.58; }
              100% { stroke-dashoffset: 198; opacity: 0; }
            }
            @keyframes signal-pulse {
              0%, 100% { opacity: 0.18; transform: scale(1); }
              45%      { opacity: 0.62; transform: scale(1.45); }
            }

            @media (max-width: 767px) {
              .circuit-desktop { display: none;  }
              .circuit-mobile   { display: block; }
              .signal-path {
                stroke-width: 1.35;
                opacity: 0.48;
                animation-duration: 9s;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .signal-path,
              .signal-node {
                animation: none;
              }
            }
          `}</style>
        </defs>

        {/* ══════════════════════════════════
            DESKTOP — trazas en x=760-1200
            ══════════════════════════════════ */}
        <g className="circuit-desktop">

          {/* Trazas grises estructurales */}
          <g stroke="rgba(255,255,255,0.055)" strokeWidth="1" fill="none">
            <path d="M 760 0 L 760 128 L 832 128" />
            <path d="M 832 0 L 832 64" />
            <path d="M 832 64 L 960 64 L 960 192" />
            <path d="M 960 0 L 960 64" />
            <path d="M 1024 0 L 1024 96 L 896 96 L 896 192 L 832 192" />
            <path d="M 1088 0 L 1088 128 L 1024 128 L 1024 256" />
            <path d="M 1152 64 L 1152 192 L 1088 192" />
            <path d="M 1024 256 L 1024 320 L 896 320" />
            <path d="M 960 192 L 960 320 L 832 320 L 832 384" />
            <path d="M 832 192 L 768 192 L 768 320" />
            <path d="M 768 320 L 704 320 L 704 256" />
            <path d="M 1088 192 L 1088 384 L 1024 384" />
            <path d="M 1152 192 L 1200 192" />
            <path d="M 1024 384 L 960 384 L 960 448" />
            <path d="M 896 320 L 896 448 L 832 448" />
          </g>

          {/* Trazas Kinetic Lime — acento */}
          <g stroke="rgba(190,242,100,0.13)" strokeWidth="1" fill="none">
            <path d="M 896 0 L 896 96" />
            <path d="M 896 96 L 960 96 L 960 192" />
            <path d="M 960 64 L 1024 64 L 1024 128" />
            <path d="M 832 128 L 832 192" />
            <path d="M 1024 128 L 1088 128" />
            <path d="M 960 192 L 896 192" />
          </g>

          {/* Señales animadas — paquetes sutiles de datos */}
          <g>
            <path className="signal-path" d="M 896 0 L 896 96 L 960 96 L 960 192" />
            <path className="signal-path slow" d="M 960 64 L 1024 64 L 1024 128 L 1088 128" />
            <path className="signal-path reverse" d="M 832 192 L 832 128 L 896 128" />
            <path className="signal-path slow reverse" d="M 1088 192 L 1088 384 L 1024 384 L 960 384" />
          </g>

          {/* Nodos lime con glow */}
          <g fill="rgba(190,242,100,0.28)" filter="url(#node-glow)">
            <circle className="signal-node" cx="896" cy="96"  r="2.5" />
            <circle className="signal-node delay-1" cx="960" cy="64"  r="2.5" />
            <circle className="signal-node delay-2" cx="960" cy="192" r="2.5" />
            <circle className="signal-node delay-1" cx="1024" cy="128" r="2.5" />
            <circle className="signal-node delay-2" cx="832" cy="128" r="2.5" />
            <circle className="signal-node" cx="1088" cy="128" r="2.5" />
            <circle className="signal-node delay-1" cx="896" cy="192" r="2" />
          </g>

          {/* Nodos grises */}
          <g fill="rgba(255,255,255,0.09)">
            <circle cx="832" cy="64"  r="2" />
            <circle cx="832" cy="192" r="2" />
            <circle cx="832" cy="320" r="2" />
            <circle cx="832" cy="384" r="2" />
            <circle cx="960" cy="320" r="2" />
            <circle cx="960" cy="384" r="2" />
            <circle cx="960" cy="448" r="2" />
            <circle cx="1024" cy="256" r="2" />
            <circle cx="1024" cy="320" r="2" />
            <circle cx="1024" cy="384" r="2" />
            <circle cx="1088" cy="192" r="2" />
            <circle cx="1088" cy="384" r="2" />
            <circle cx="1152" cy="64"  r="2" />
            <circle cx="1152" cy="192" r="2" />
            <circle cx="768"  cy="192" r="2" />
            <circle cx="768"  cy="320" r="2" />
            <circle cx="704"  cy="256" r="2" />
            <circle cx="704"  cy="320" r="2" />
            <circle cx="896"  cy="320" r="2" />
            <circle cx="896"  cy="448" r="2" />
            <circle cx="832"  cy="448" r="2" />
          </g>
        </g>

        {/* ══════════════════════════════════════════════
            MOBILE — trazas desplazadas a la DERECHA (x=580-760)
            Opacidad reducida — más sutil, lado derecho
            ══════════════════════════════════════════════ */}
        <g className="circuit-mobile">

          {/* Trazas grises — opacidad baja */}
          <g stroke="rgba(255,255,255,0.065)" strokeWidth="1" fill="none">
            <path d="M 620 0 L 620 120 L 700 120" />
            <path d="M 700 0 L 700 80 L 760 80" />
            <path d="M 760 80 L 760 240" />
            <path d="M 700 80 L 700 200 L 620 200" />
            <path d="M 620 120 L 620 200" />
            <path d="M 620 200 L 580 200 L 580 300" />
            <path d="M 760 240 L 700 240 L 700 340" />
            <path d="M 700 340 L 620 340 L 620 440" />
            <path d="M 580 300 L 640 300 L 640 400" />
            <path d="M 760 240 L 760 400" />
          </g>

          {/* Trazas Kinetic Lime mobile — opacidad reducida */}
          <g stroke="rgba(190,242,100,0.11)" strokeWidth="1" fill="none">
            <path d="M 700 0 L 700 80" />
            <path d="M 700 80 L 760 80" />
            <path d="M 700 80 L 700 120" />
            <path d="M 620 120 L 700 120" />
          </g>

          {/* Señales animadas mobile — lado derecho */}
          <g>
            <path className="signal-path" d="M 700 0 L 700 80 L 760 80" />
            <path className="signal-path slow reverse" d="M 760 240 L 700 240 L 700 340" />
            <path className="signal-path reverse" d="M 620 200 L 620 120 L 700 120" />
          </g>

          {/* Nodos lime mobile */}
          <g fill="rgba(190,242,100,0.22)" filter="url(#node-glow)">
            <circle className="signal-node" cx="700" cy="80"  r="2.5" />
            <circle className="signal-node delay-1" cx="760" cy="80"  r="2.5" />
            <circle className="signal-node delay-2" cx="700" cy="120" r="2"   />
            <circle className="signal-node delay-1" cx="620" cy="120" r="2"   />
            <circle className="signal-node" cx="700" cy="200" r="2"   />
          </g>

          {/* Nodos grises mobile */}
          <g fill="rgba(255,255,255,0.08)">
            <circle cx="760" cy="240" r="2" />
            <circle cx="760" cy="400" r="2" />
            <circle cx="620" cy="200" r="2" />
            <circle cx="580" cy="200" r="2" />
            <circle cx="580" cy="300" r="2" />
            <circle cx="640" cy="300" r="2" />
            <circle cx="640" cy="400" r="2" />
            <circle cx="700" cy="240" r="2" />
            <circle cx="700" cy="340" r="2" />
            <circle cx="620" cy="340" r="2" />
            <circle cx="620" cy="440" r="2" />
          </g>
        </g>
      </svg>

    </div>
  );
}
