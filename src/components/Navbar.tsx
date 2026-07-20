import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo.url}
            alt={site.name}
            width={56}
            height={56}
            className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg md:text-xl font-bold text-brand tracking-tight">
              Sri Sairam
            </div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted-foreground -mt-0.5">
              Builders &amp; Developers
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = path === item.to || (item.to !== "/" && path.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-brand" : "text-foreground/80 hover:text-brand"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full transition-all ${
                    active ? "bg-accent scale-x-100" : "bg-accent scale-x-0"
                  } origin-center`}
                />
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-brand shadow-elegant hover:brightness-105 transition"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full gradient-gold px-5 py-3 text-sm font-semibold text-brand"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
