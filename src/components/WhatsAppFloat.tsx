import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { site } from "@/lib/site";

const WA_ICON = (
  <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
    <path
      fill="currentColor"
      d="M19.11 17.23c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.04 2.8 1.19 2.99.15.19 2.05 3.14 4.97 4.41.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.19-.55-.34zM16.02 4.66C9.62 4.66 4.44 9.83 4.44 16.23c0 2.05.54 4.05 1.57 5.81L4.4 27.34l5.44-1.58a11.5 11.5 0 0 0 6.18 1.75h.01c6.4 0 11.58-5.17 11.58-11.57C27.62 9.83 22.42 4.66 16.02 4.66zm0 21.11h-.01a9.55 9.55 0 0 1-4.85-1.32l-.35-.21-3.22.94.96-3.14-.22-.32a9.53 9.53 0 0 1-1.46-5.09c0-5.28 4.29-9.57 9.57-9.57 2.55 0 4.95.99 6.76 2.8a9.5 9.5 0 0 1 2.8 6.77c0 5.28-4.29 9.57-9.58 9.57z"
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
        <div className="animate-float-in max-w-[290px] rounded-2xl bg-white shadow-elegant border border-border overflow-hidden">
          <div className="gradient-brand px-4 py-3 flex items-start justify-between gap-2 text-white">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white/15 p-1.5 text-white">{WA_ICON}</div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Sri Sairam Builders</div>
                <div className="text-[11px] text-white/75">Typically replies within minutes</div>
              </div>
            </div>
            <button
              onClick={() => setPopupOpen(false)}
              aria-label="Close"
              className="rounded-full p-1 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-foreground/80">
              👋 Namaste! Looking for a plot or apartment in Nagpur? Chat with our expert now and get a
              same-day site visit booked.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white hover:brightness-105 transition"
            >
              <span className="h-4 w-4">{WA_ICON}</span>
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
        className="animate-pulse-ring relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant hover:scale-105 transition"
      >
        {WA_ICON}
      </a>
    </div>
  );
}
