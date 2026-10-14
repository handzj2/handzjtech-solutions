"use client";

import { useCallback, useId, useState } from "react";
import Image from "next/image";

type ProjectPreviewProps = {
  name: string;
  /** Omit for desktop-only products with no public URL. */
  liveUrl?: string;
  image: string;
  imageAlt: string;
  /** Verified: remote site allows iframe embedding and rendered content in browser tests. */
  embeddable: boolean;
  /** Prefer eager image priority for the first portfolio card. */
  priority?: boolean;
  /** Visual tone for chrome around the preview (dark portfolio vs light homepage). */
  tone?: "dark" | "light";
};

/**
 * Shows a genuine local screenshot by default.
 * If the live site is verified embeddable, the visitor can load an interactive
 * iframe preview on demand (avoids auto-loading heavy remote sites).
 * If embedding is blocked or there is no public URL, only the screenshot is shown.
 */
export default function ProjectPreview({
  name,
  liveUrl,
  image,
  imageAlt,
  embeddable,
  priority = false,
  tone = "dark",
}: ProjectPreviewProps) {
  const [mode, setMode] = useState<"screenshot" | "loading" | "live">("screenshot");
  const statusId = useId();
  const canEmbed = Boolean(liveUrl && embeddable);

  const startLive = useCallback(() => {
    setMode("loading");
  }, []);

  const onIframeLoad = useCallback(() => {
    setMode((current) => (current === "loading" ? "live" : current));
  }, []);

  const returnToScreenshot = useCallback(() => {
    setMode("screenshot");
  }, []);

  const shell =
    tone === "dark"
      ? "border-white/10 bg-ink"
      : "border-mist bg-mist";

  const mutedText =
    tone === "dark" ? "text-xs text-white/45" : "text-xs text-ink/50";

  const linkClass =
    tone === "dark"
      ? "text-sm font-medium text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      : "text-sm font-medium text-brand hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  const primaryBtn =
    "inline-flex min-h-[44px] items-center rounded bg-brand px-4 text-sm font-medium text-white hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  const secondaryBtn =
    tone === "dark"
      ? "text-sm font-medium text-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      : "text-sm font-medium text-brand hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  const showIframe = canEmbed && (mode === "loading" || mode === "live");

  return (
    <div className={`overflow-hidden rounded border ${shell}`}>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={`object-cover object-top transition-opacity ${
            showIframe && mode === "live" ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
        />

        {showIframe && liveUrl ? (
          <iframe
            key={liveUrl}
            src={liveUrl}
            title={`Live preview of ${name}`}
            className={`absolute inset-0 h-full w-full bg-white ${
              mode === "live" ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={onIframeLoad}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        ) : null}

        {mode === "loading" ? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-ink/70"
            role="status"
            aria-live="polite"
            aria-busy="true"
            id={statusId}
          >
            <p className="text-sm font-medium text-white">Loading live preview…</p>
          </div>
        ) : null}
      </div>

      <div
        className={
          tone === "dark"
            ? "flex flex-wrap items-center gap-3 border-t border-white/10 px-4 py-3"
            : "flex flex-wrap items-center gap-3 border-t border-mist bg-white px-4 py-3"
        }
      >
        {canEmbed ? (
          mode === "screenshot" ? (
            <button type="button" onClick={startLive} className={primaryBtn}>
              View live preview
            </button>
          ) : (
            <button type="button" onClick={returnToScreenshot} className={secondaryBtn}>
              Return to screenshot
            </button>
          )
        ) : liveUrl ? (
          <span className={mutedText} role="status">
            Live preview unavailable — this site restricts embedding
          </span>
        ) : (
          <span className={mutedText} role="status">
            Desktop application — no public web URL
          </span>
        )}

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Open full site
            <span className="sr-only"> for {name} (opens in a new tab)</span>
          </a>
        ) : null}

        <span className="sr-only" aria-live="polite">
          {mode === "loading"
            ? `Loading live preview of ${name}`
            : mode === "live"
              ? `Showing live preview of ${name}`
              : `Showing screenshot of ${name}`}
        </span>
      </div>
    </div>
  );
}
