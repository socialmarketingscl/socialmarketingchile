import { ImageResponse } from "next/og";

export const alt =
  "Social Marketing — Agencia de marketing digital e inteligencia artificial en Chile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#0A0F1A",
          color: "#F8FAFC",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -160,
            width: 620,
            height: 620,
            borderRadius: 620,
            background:
              "radial-gradient(circle, rgba(190,242,100,0.22) 0%, rgba(190,242,100,0.08) 34%, rgba(190,242,100,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.16,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 82,
            top: 74,
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#BEF264",
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span>Social Marketing</span>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            padding: "100px 82px 82px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 650,
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
              marginBottom: 28,
            }}
          >
            Marketing digital e IA para captar y convertir clientes.
          </div>
          <div
            style={{
              display: "flex",
              width: 700,
              color: "rgba(248,250,252,0.72)",
              fontSize: 28,
              lineHeight: 1.35,
            }}
          >
            Estrategia, publicidad, automatización y seguimiento comercial para
            negocios en Chile.
          </div>
          <div
          style={{
            display: "flex",
            marginTop: 52,
            width: 330,
            padding: "16px 24px",
            borderRadius: 999,
              background: "#BEF264",
              color: "#0F172A",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            socialmarketingchile.cl
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
