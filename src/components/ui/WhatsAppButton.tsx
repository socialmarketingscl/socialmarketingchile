"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, Plus } from "lucide-react";

const WHATSAPP_HREF =
  "https://wa.me/56962876789?text=Hola%2C%20estoy%20visitando%20el%20sitio%20de%20Social%20Marketing%20y%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20pueden%20ayudar%20a%20mi%20negocio.";

const EMAIL_HREF =
  "mailto:contacto@socialmarketingchile.cl?subject=Consulta%20desde%20sitio%20web&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios.";

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26C2.168 6.443 6.603 2.009 12.055 2.009c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipSeen, setTooltipSeen] = useState(false);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("touchstart", closeOnOutsideClick, { passive: true });

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("touchstart", closeOnOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (tooltipSeen) return;

    const showTimer = window.setTimeout(() => {
      setShowTooltip(true);
      setTooltipSeen(true);
    }, 6000);

    return () => {
      window.clearTimeout(showTimer);
    };
  }, [tooltipSeen]);

  useEffect(() => {
    if (!showTooltip) return;

    const hideTooltip = () => {
      setShowTooltip(false);
    };

    const hideTimer = window.setTimeout(hideTooltip, 5000);
    window.addEventListener("scroll", hideTooltip, { passive: true });

    return () => {
      window.clearTimeout(hideTimer);
      window.removeEventListener("scroll", hideTooltip);
    };
  }, [showTooltip]);

  const actionBaseStyle = {
    position: "absolute" as const,
    right: "5px",
    width: "45px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    color: "#FFFFFF",
    textDecoration: "none",
    boxShadow: "0 14px 34px rgba(0,0,0,0.28)",
    opacity: menuOpen ? 1 : 0,
    pointerEvents: menuOpen ? "auto" as const : "none" as const,
    transform: menuOpen ? "translateY(0) scale(1)" : "translateY(18px) scale(0.72)",
    transitionProperty: "opacity, transform, visibility",
    transitionDuration: "0.28s",
    transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    visibility: menuOpen ? "visible" as const : "hidden" as const,
  };

  const labelBaseStyle = {
    position: "absolute" as const,
    right: "58px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.7)",
    color: "#FFFFFF",
    borderRadius: "6px",
    padding: "4px 10px",
    fontFamily: "var(--font-inter)",
    fontSize: "0.76rem",
    fontWeight: 650,
    lineHeight: 1.2,
    whiteSpace: "nowrap" as const,
  };

  return (
    <div
      ref={wrapperRef}
      className="floating-contact-root"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 999,
      }}
    >
      <style>{`
        @keyframes contact-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
        }

        .floating-contact-tooltip::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -6px;
          width: 12px;
          height: 12px;
          background: rgba(15, 23, 42, 0.78);
          transform: translateY(-50%) rotate(45deg);
          border-radius: 2px;
        }

        .floating-contact-tooltip {
          transform: translate(8px, -50%) scale(0.96);
        }

        .floating-contact-tooltip[data-visible="true"] {
          transform: translate(0, -50%) scale(1);
        }

        @media (max-width: 767px) {
          .floating-contact-root {
            bottom: 20px !important;
            right: 16px !important;
          }

          .floating-contact-main-button {
            width: 45px !important;
            height: 45px !important;
          }

          .floating-contact-main-button svg {
            width: 19px !important;
            height: 19px !important;
          }

          .floating-contact-action {
            right: 4px !important;
            width: 36px !important;
            height: 36px !important;
          }

          .floating-contact-action-whatsapp {
            bottom: 96px !important;
          }

          .floating-contact-action-email {
            bottom: 49px !important;
          }

          .floating-contact-action svg {
            width: 18px !important;
            height: 18px !important;
          }

          .floating-contact-label {
            right: 47px !important;
            font-size: 0.72rem !important;
            padding: 4px 9px !important;
          }

          .floating-contact-tooltip {
            top: auto !important;
            right: 50% !important;
            bottom: calc(100% + 14px) !important;
            transform: translate(50%, 8px) scale(0.96) !important;
          }

          .floating-contact-tooltip[data-visible="true"] {
            transform: translate(50%, 0) scale(1) !important;
          }

          .floating-contact-tooltip::after {
            top: auto;
            right: 50%;
            bottom: -6px;
            transform: translateX(50%) rotate(45deg);
          }
        }
      `}</style>

      <div
        className="floating-contact-tooltip"
        data-visible={showTooltip && !menuOpen ? "true" : "false"}
        role="status"
        style={{
          position: "absolute",
          top: "50%",
          right: "calc(100% + 14px)",
          width: "max-content",
          background: "rgba(15, 23, 42, 0.78)",
          color: "rgba(248, 250, 252, 0.92)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "8px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "8px 12px",
          fontFamily: "var(--font-inter)",
          fontSize: "0.82rem",
          fontWeight: 700,
          lineHeight: 1.25,
          boxShadow: "0 12px 32px rgba(0,0,0,0.22)",
          pointerEvents: "none",
          opacity: showTooltip && !menuOpen ? 1 : 0,
          visibility: showTooltip && !menuOpen ? "visible" : "hidden",
          transition: "opacity 0.34s ease, transform 0.34s ease, visibility 0.34s ease",
        }}
      >
        ¿Hablamos?
      </div>

      <a
        className="floating-contact-action floating-contact-action-whatsapp"
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{
          ...actionBaseStyle,
          bottom: "118px",
          backgroundColor: "#25D366",
          transitionDelay: menuOpen ? "100ms" : "0ms",
        }}
      >
        <span className="floating-contact-label" style={labelBaseStyle}>WhatsApp</span>
        <WhatsAppIcon />
      </a>

      <a
        className="floating-contact-action floating-contact-action-email"
        href={EMAIL_HREF}
        aria-label="Enviar correo electrónico"
        style={{
          ...actionBaseStyle,
          bottom: "62px",
          backgroundColor: "#475569",
          transitionDelay: menuOpen ? "0ms" : "80ms",
        }}
      >
        <span className="floating-contact-label" style={labelBaseStyle}>Email</span>
        <Mail size={20} strokeWidth={2.25} aria-hidden="true" />
      </a>

      <button
        className="floating-contact-main-button"
        type="button"
        aria-label="Abrir opciones de contacto"
        aria-expanded={menuOpen}
        onClick={(event) => {
          event.stopPropagation();
          setShowTooltip(false);
          setMenuOpen((open) => !open);
        }}
        style={{
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#25D366",
          color: "#FFFFFF",
          border: 0,
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
          animation: "contact-glow 3s ease-in-out infinite",
          transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.28s ease, background-color 0.22s ease",
        }}
      >
        {menuOpen ? (
          <Plus size={24} strokeWidth={2.5} aria-hidden="true" />
        ) : (
          <MessageCircle size={23} strokeWidth={2.25} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
