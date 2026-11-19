"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CONTACT, INSTAGRAM_SECTION, INSTAGRAM_VIDEOS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

type Video = (typeof INSTAGRAM_VIDEOS)[number];

const reelUrl = (id: string) => `https://www.instagram.com/reel/${id}/`;
const embedUrl = (id: string) => `https://www.instagram.com/reel/${id}/embed/`;

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
    </svg>
  );
}

/* Modal accesible: el iframe de Instagram solo existe mientras está abierto
   (patrón fachada), así la carga inicial de la home no suma terceros. */
function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>("button, a, iframe");
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="ig-modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="ig-modal"
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
      >
        <div className="ig-modal-bar">
          <p className="ig-modal-title">{video.title}</p>
          <button ref={closeRef} type="button" className="ig-modal-close" onClick={onClose} aria-label="Cerrar video">
            ✕
          </button>
        </div>
        <iframe
          src={embedUrl(video.id)}
          title={`Video de Instagram: ${video.title}`}
          className="ig-modal-frame"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function InstagramVideosSection() {
  const [active, setActive] = useState<Video | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);

  if (INSTAGRAM_VIDEOS.length < 2) return null;

  return (
    <section id="instagram" className="ig-section" aria-labelledby="ig-title">
      <style>{`
        .ig-section { background: #0F172A; padding: clamp(64px, 8vw, 104px) 0; }
        .ig-shell { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
        .ig-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .ig-title { font-family: var(--font-archivo), sans-serif; font-weight: 800; letter-spacing: -0.026em; color: #F8FAFC; font-size: clamp(2rem, 4vw, 3.2rem); line-height: 1.05; }
        .ig-body { margin-top: 14px; max-width: 620px; color: #A8AEBB; font-family: var(--font-inter), sans-serif; font-size: 1.02rem; line-height: 1.7; }
        .ig-profile, .ig-open { color: #BEF264; font-family: var(--font-archivo), sans-serif; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
        .ig-grid { margin-top: clamp(32px, 4vw, 48px); display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; }
        .ig-card { display: flex; flex-direction: column; background: #141B2D; border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; overflow: hidden; }
        .ig-play { position: relative; display: block; width: 100%; aspect-ratio: 4 / 5; border: 0; padding: 0; cursor: pointer; background: #0A0F1A; }
        .ig-play img { object-fit: cover; transition: transform 0.4s ease; }
        .ig-play:hover img { transform: scale(1.03); }
        .ig-play::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,15,26,0.75), transparent 45%); }
        .ig-play-icon { position: absolute; left: 50%; top: 50%; z-index: 1; transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 999px; background: #F8FAFC; color: #0F172A; box-shadow: 0 10px 30px rgba(0,0,0,0.35); }
        .ig-play-label { position: absolute; left: 0; right: 0; bottom: 16px; z-index: 1; text-align: center; color: #FFFFFF; font-family: var(--font-archivo), sans-serif; font-weight: 700; font-size: 0.95rem; }
        .ig-play:focus-visible { outline: 3px solid #BEF264; outline-offset: -3px; }
        .ig-card-body { display: flex; flex: 1; flex-direction: column; justify-content: space-between; gap: 16px; padding: 18px 18px 20px; }
        .ig-card-title { color: #F8FAFC; font-family: var(--font-archivo), sans-serif; font-weight: 700; font-size: 1.05rem; line-height: 1.3; }
        .ig-open { font-size: 0.92rem; }
        .ig-modal-backdrop { position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 16px; background: rgba(10,15,26,0.82); }
        .ig-modal { display: flex; flex-direction: column; width: min(420px, 100%); max-height: calc(100svh - 32px); background: #FFFFFF; border-radius: 16px; overflow: hidden; }
        .ig-modal-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 12px 10px 16px; background: #0F172A; }
        .ig-modal-title { color: #F8FAFC; font-family: var(--font-inter), sans-serif; font-size: 0.9rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .ig-modal-close { flex: none; width: 36px; height: 36px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: #F8FAFC; cursor: pointer; }
        .ig-modal-close:focus-visible { outline: 2px solid #BEF264; outline-offset: 2px; }
        .ig-modal-frame { width: 100%; height: min(760px, calc(100svh - 92px)); border: 0; background: #FFFFFF; }
        @media (max-width: 1024px) { .ig-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) {
          .ig-shell { width: min(100% - 36px, 1120px); }
          .ig-grid { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 14px; margin-right: -18px; padding-right: 18px; padding-bottom: 6px; }
          .ig-card { flex: 0 0 calc((100% - 14px) / 1.2); scroll-snap-align: start; }
        }
        @media (prefers-reduced-motion: reduce) { .ig-play img { transition: none; } }
      `}</style>

      <div className="ig-shell">
        <div className="ig-head">
          <div>
            <span className="section-eyebrow">— {INSTAGRAM_SECTION.eyebrow}</span>
            <h2 id="ig-title" className="ig-title">{INSTAGRAM_SECTION.title}</h2>
            <p className="ig-body">{INSTAGRAM_SECTION.body}</p>
          </div>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-profile"
            onClick={() => trackEvent("instagram_click", { link_text: "perfil", location: "instagram_section" })}
          >
            {INSTAGRAM_SECTION.profileLabel}
          </a>
        </div>

        <ul className="ig-grid" role="list">
          {INSTAGRAM_VIDEOS.map((video, index) => (
            <li key={video.id} className="ig-card">
              <button
                type="button"
                className="ig-play"
                aria-label={`Reproducir video: ${video.title}`}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActive(video);
                  trackEvent("video_reproducido", { video_title: video.title, position: index + 1, location: "instagram_section" });
                }}
              >
                <Image
                  src={video.poster}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 270px"
                  loading="lazy"
                />
                <span className="ig-play-icon"><PlayIcon /></span>
                <span className="ig-play-label">Reproducir video</span>
              </button>
              <div className="ig-card-body">
                <h3 className="ig-card-title">{video.title}</h3>
                <a
                  href={reelUrl(video.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-open"
                  onClick={() => trackEvent("instagram_click", { link_text: video.title, position: index + 1, location: "instagram_section" })}
                >
                  Abrir en Instagram ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {active && <VideoModal video={active} onClose={close} />}
    </section>
  );
}
