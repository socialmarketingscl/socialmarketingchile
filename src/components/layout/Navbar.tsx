"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { SERVICE_LINKS } from "@/lib/services";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = scrolled ? "rgba(10,15,26,0.90)" : "rgba(10,15,26,0.40)";
  const navBlur = scrolled ? "blur(20px)" : "none";

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  };

  const toggleMobileMenu = () => {
    if (menuOpen) setSolutionsOpen(false);
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <style>{`
        .desktop-nav-item {
          position: relative;
        }

        .desktop-solutions-menu {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          min-width: 280px;
          width: max-content;
          max-width: 340px;
          padding: 10px;
          background: #0F172A;
          border: 1px solid rgba(255, 255, 255, 0.10);
          border-radius: 8px;
          box-shadow: 0 18px 52px rgba(0, 0, 0, 0.38);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translate(-50%, 8px);
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
        }

        .desktop-nav-item:hover .desktop-solutions-menu,
        .desktop-nav-item:focus-within .desktop-solutions-menu {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translate(-50%, 0);
        }

        .desktop-solutions-menu::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -18px;
          height: 18px;
        }

        .desktop-solution-link,
        .mobile-solution-link {
          display: block;
          color: rgba(255, 255, 255, 0.72);
          font-family: var(--font-inter), sans-serif;
          font-size: 0.84rem;
          line-height: 1.35;
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.18s ease, background-color 0.18s ease, transform 0.18s ease;
        }

        .desktop-solution-link {
          padding: 10px 12px;
        }

        .desktop-solution-link:hover,
        .desktop-solution-link:focus-visible,
        .mobile-solution-link:hover,
        .mobile-solution-link:focus-visible {
          color: var(--kinetic-lime);
          background: rgba(190, 242, 100, 0.06);
          outline: none;
        }

        .mobile-solutions-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-family: var(--font-archivo), sans-serif;
          font-weight: 700;
          font-size: 1.55rem;
          color: #FFFFFF;
          text-align: left;
          padding: 15px 0;
          cursor: pointer;
          letter-spacing: -0.01em;
        }

        .mobile-solutions-panel {
          display: grid;
          gap: 6px;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transform: translateY(-6px);
          transition: max-height 0.28s ease, opacity 0.22s ease, transform 0.22s ease;
        }

        .mobile-solutions-panel.is-open {
          max-height: 420px;
          opacity: 1;
          transform: translateY(0);
          padding: 12px 0 8px;
        }

        .mobile-solution-link {
          padding: 10px 12px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "background-color 0.30s ease, backdrop-filter 0.30s ease",
          backgroundColor: navBg,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >

        {/* ══════════════════════════════════════════
            DESKTOP — 3 columnas: Logo | Nav | CTA
            ══════════════════════════════════════════ */}
        <div
          className="hidden md:grid"
          style={{
            width: "100%",
            padding: "0 20px 0 14px",
            height: "78px",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Logo desktop */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            aria-label="Social Marketing — Agencia de marketing digital e IA en Chile"
          >
            <Image
              src="/social-marketing-agencia-marketing-digital-ia.png"
              alt="Social Marketing — Agencia de marketing digital e inteligencia artificial"
              width={1920}
              height={373}
              style={{
                objectFit: "contain",
                width: "clamp(210px, 17vw, 292px)",
                height: "auto",
                display: "block",
              }}
              priority
            />
          </Link>

          {/* Nav links centrados */}
          <nav style={{ display: "flex", justifyContent: "center", alignItems: "center" }} aria-label="Navegación principal">
            <ul style={{ display: "flex", alignItems: "center", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className={"hasDropdown" in link && link.hasDropdown ? "desktop-nav-item" : undefined}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                    {"hasDropdown" in link && link.hasDropdown && (
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M4 5.5 7 8.5l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                  {"hasDropdown" in link && link.hasDropdown && (
                    <div className="desktop-solutions-menu" aria-label="Submenú de soluciones">
                      {SERVICE_LINKS.map((service) => (
                        <Link key={service.href} href={service.href} className="desktop-solution-link">
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA pill desktop */}
          <Link
            href="/contacto"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "var(--kinetic-lime)", color: "var(--level-2)",
              fontFamily: "var(--font-archivo)", fontWeight: 700,
              fontSize: "0.82rem", letterSpacing: "0.01em",
              padding: "11px 26px", borderRadius: "100px",
              textDecoration: "none", whiteSpace: "nowrap",
              transition: "opacity 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "0.88";
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 6px 22px rgba(190,242,100,0.28)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Agendar diagnóstico
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE — wordmark image | Hamburger
            ══════════════════════════════════════════ */}
        <div
          className="flex md:hidden"
          style={{
            width: "100%",
            padding: "0 12px 0 12px",
            height: "80px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Wordmark mobile — misma imagen del desktop */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            aria-label="Social Marketing — Agencia de marketing digital e inteligencia artificial"
          >
            <Image
              src="/social-marketing-agencia-marketing-digital-ia.png"
              alt="Social Marketing — Agencia de marketing digital e inteligencia artificial"
              width={1920}
              height={373}
              style={{
                objectFit: "contain",
                width: "clamp(205px, 54vw, 268px)",
                height: "auto",
                display: "block",
              }}
              priority
            />
          </Link>

          {/* Hamburger — far right, más grande */}
          <button
            onClick={toggleMobileMenu}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-overlay"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "10px",
              cursor: "pointer",
              width: "52px",
              height: "52px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              padding: 0,
              flexShrink: 0,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#FFFFFF",
                borderRadius: "2px",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform:
                  menuOpen && i === 0 ? "translateY(9px) rotate(45deg)"
                  : menuOpen && i === 2 ? "translateY(-9px) rotate(-45deg)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

      </header>

      {/* ══════════════════════════════════════════
          MOBILE MENU OVERLAY
          ══════════════════════════════════════════ */}
      <div
        id="mobile-nav-overlay"
        className="md:hidden"
        aria-hidden={!menuOpen}
        style={{
          position: "fixed", inset: 0, zIndex: 40,
          backgroundColor: "#0A0F1A",
          paddingTop: "80px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.30s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: menuOpen ? "auto" : "none",
          display: "flex", flexDirection: "column",
        }}
      >
        <nav style={{ flex: 1, padding: "28px 24px", display: "flex", flexDirection: "column", gap: "2px" }}>
          {NAV_LINKS.map((link, idx) => {
            const hasDropdown = "hasDropdown" in link && link.hasDropdown;

            if (hasDropdown) {
              return (
                <div
                  key={link.href}
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(24px)",
                    transition: `opacity 0.3s ease ${idx * 0.05}s, transform 0.3s ease ${idx * 0.05}s`,
                  }}
                >
                  <button
                    type="button"
                    className="mobile-solutions-toggle"
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    aria-expanded={solutionsOpen}
                    aria-controls="mobile-solutions-menu"
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {link.label}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <path d="M4 5.5 7 8.5l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    id="mobile-solutions-menu"
                    className={`mobile-solutions-panel${solutionsOpen ? " is-open" : ""}`}
                    aria-hidden={!solutionsOpen}
                  >
                    <Link
                      href="/soluciones"
                      onClick={closeMobileMenu}
                      tabIndex={menuOpen && solutionsOpen ? 0 : -1}
                      className="mobile-solution-link"
                    >
                      Todas las soluciones
                    </Link>
                    {SERVICE_LINKS.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMobileMenu}
                        tabIndex={menuOpen && solutionsOpen ? 0 : -1}
                        className="mobile-solution-link"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu}
                tabIndex={menuOpen ? 0 : -1}
                style={{
                  fontFamily: "var(--font-archivo)", fontWeight: 700,
                  fontSize: "1.55rem", color: "#FFFFFF",
                  textDecoration: "none", padding: "15px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  letterSpacing: "-0.01em",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(24px)",
                  transition: `opacity 0.3s ease ${idx * 0.05}s, transform 0.3s ease ${idx * 0.05}s`,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ paddingTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link href="/contacto" onClick={closeMobileMenu} tabIndex={menuOpen ? 0 : -1} style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "var(--kinetic-lime)", color: "var(--level-2)",
              fontFamily: "var(--font-archivo)", fontWeight: 700,
              fontSize: "0.9rem", padding: "14px 28px",
              borderRadius: "100px", textDecoration: "none",
            }}>
              Agendar diagnóstico gratuito
            </Link>
            <a href={CONTACT.whatsappUrlWithMessage} target="_blank" rel="noopener noreferrer"
              onClick={closeMobileMenu} tabIndex={menuOpen ? 0 : -1} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "transparent", color: "#FFFFFF",
                fontFamily: "var(--font-archivo)", fontWeight: 700,
                fontSize: "0.9rem", padding: "14px 28px",
                borderRadius: "100px", border: "1.5px solid rgba(255,255,255,0.18)",
                textDecoration: "none",
              }}>
              Escribir por WhatsApp
            </a>
          </div>
        </nav>
        <div style={{ padding: "18px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "16px" }}>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.78rem", fontFamily: "var(--font-inter)", textDecoration: "none" }}>
            {CONTACT.instagram}
          </a>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <a href={`mailto:${CONTACT.email}`}
            tabIndex={menuOpen ? 0 : -1}
            style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.78rem", fontFamily: "var(--font-inter)", textDecoration: "none" }}>
            {CONTACT.email}
          </a>
        </div>
      </div>
    </>
  );
}
