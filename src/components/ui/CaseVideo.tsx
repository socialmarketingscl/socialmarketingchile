"use client";

import { useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

export type CaseVideoData =
  | {
      kind: "file";
      src: string;
      poster: string;
      title: string;
      description: string;
    }
  | {
      kind: "instagram";
      id: string;
      poster: string;
      title: string;
      description: string;
    };

type Props = {
  video: CaseVideoData;
  business: string;
  ubicacion: string;
  variant?: "page" | "compact";
};

export default function CaseVideo({ video, business, ubicacion, variant = "page" }: Props) {
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    trackEvent("video_reproducido", {
      video_id: video.kind === "instagram" ? video.id : video.src,
      video_title: video.title,
      caso: business,
      ubicacion,
    });
  };

  return (
    <figure className={`case-video case-video-${video.kind} case-video-${variant}`}>
      <style>{`
        .case-video { margin: 0; display: grid; gap: 10px; }
        .case-video-frame {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(248,250,252,0.12);
          background: #0A0F1A;
        }
        .case-video-file .case-video-frame { aspect-ratio: 16 / 9; }
        .case-video-instagram .case-video-frame { aspect-ratio: 4 / 5; }
        .case-video-frame.is-playing { aspect-ratio: auto; height: 640px; }
        .case-video-frame video,
        .case-video-frame iframe { display: block; width: 100%; height: 100%; border: 0; object-fit: cover; }
        .case-video-facade {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          padding: 0;
          border: 0;
          background: none;
          cursor: pointer;
        }
        .case-video-facade img { object-fit: cover; transition: transform 0.4s ease; }
        .case-video-facade:hover img { transform: scale(1.03); }
        .case-video-facade:focus-visible { outline: 2px solid #BEF264; outline-offset: -4px; }
        .case-video-play {
          position: absolute;
          left: 50%;
          top: 50%;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transform: translate(-50%, -50%);
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(15,23,42,0.82);
          color: #F8FAFC;
          font: 600 14px/1 Inter, system-ui, sans-serif;
          white-space: nowrap;
        }
        .case-video-play::before {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 7px 0 7px 12px;
          border-color: transparent transparent transparent #BEF264;
        }
        .case-video figcaption {
          color: rgba(248,250,252,0.62);
          font: 400 13px/1.5 Inter, system-ui, sans-serif;
        }
        .case-video figcaption a { color: #BEF264; text-decoration: none; }
        .case-video figcaption a:hover { text-decoration: underline; }
        .case-video-compact .case-video-frame.is-playing { height: 560px; }
        @media (max-width: 640px) {
          .case-video-frame.is-playing { height: 560px; }
        }
      `}</style>

      {video.kind === "file" ? (
        <div className="case-video-frame">
          <video
            controls
            muted
            playsInline
            preload="none"
            poster={video.poster}
            aria-label={`${video.title}. ${video.description}`}
            onPlay={() => {
              if (!playing) start();
            }}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className={`case-video-frame${playing ? " is-playing" : ""}`}>
          {playing ? (
            <iframe
              src={`https://www.instagram.com/reel/${video.id}/embed/`}
              title={`Video de Instagram: ${video.title}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <button type="button" className="case-video-facade" onClick={start} aria-label={`Reproducir video: ${video.title}`}>
              <Image src={video.poster} alt="" fill sizes="(max-width: 900px) 100vw, 420px" loading="lazy" />
              <span className="case-video-play" aria-hidden="true">
                Reproducir video
              </span>
            </button>
          )}
        </div>
      )}

      <figcaption>
        {video.description}
        {video.kind === "instagram" && (
          <>
            {" "}
            <a
              href={`https://www.instagram.com/reel/${video.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("instagram_click", { video_id: video.id, caso: business, ubicacion })}
            >
              Ver en Instagram ↗
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}
