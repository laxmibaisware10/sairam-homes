import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { site } from "@/lib/site";

const WA_ICON = (
  <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      d="M16 4.5A11.5 11.5 0 0 0 6.08 21.8L4.5 27.5l5.86-1.54A11.5 11.5 0 1 0 16 4.5Z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.1"
      d="M11.4 10.7c.25-.33.58-.35.9-.27l1.13 2.55c.1.23.07.48-.1.67l-.72.76c.68 1.35 1.77 2.43 3.13 3.1l.74-.7c.2-.2.48-.25.73-.13l2.48 1.15c.3.14.4.48.28.8-.3.8-.95 1.4-1.77 1.58-1.28.28-3.8-.9-5.7-2.78-1.89-1.9-3.1-4.4-2.82-5.7.16-.4.4-.74.72-1.03Z"
    />
  </svg>
);

export function WhatsAppFloat() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;
    const t = window.setTimeout(() => {
      setPopupOpen(true);
      setHasShown(true);
    }, 3500);
    return () => window.clearTimeout(t);
  }, [hasShown]);

  const message = encodeURIComponent(
    "Hello Sri Sairam Builders! I'd like more information about your projects."
  );
  const href = `https://wa.me/${site.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {popupOpen && (
        <div className="animate-float-in w-[min(382px,calc(100vw-2rem))] overflow-hidden rounded-[24px] border border-border bg-card shadow-elegant">
          <div className="bg-brand px-5 py-4 flex items-start justify-between gap-3 text-brand-foreground">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-brand-foreground/10 p-2 text-brand-foreground">{WA_ICON}</div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Sri Sairam Builders</div>
                <div className="text-[11px] text-brand-foreground/70">Typically replies within minutes</div>
              </div>
            </div>
            <button
              onClick={() => setPopupOpen(false)}
              aria-label="Close"
              className="rounded-full p-1 text-brand-foreground transition hover:bg-brand-foreground/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-5">
            <p className="text-[15px] leading-6 text-foreground/80">
              <span aria-hidden="true">👋 </span>Namaste! Looking for a plot or apartment in Nagpur? Chat with our expert now and get a same-day site visit booked.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-bold text-white transition hover:brightness-105"
            >
              <span className="h-5 w-5">{WA_ICON}</span>
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setPopupOpen(false)}
        aria-label="Chat on WhatsApp"
        className="animate-pulse-ring relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant transition hover:scale-105"
      >
        {WA_ICON}
      </a>
    </div>
  );
}
