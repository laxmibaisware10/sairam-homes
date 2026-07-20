import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand text-brand-foreground">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/95 p-2">
              <img src={logo.url} alt={site.name} width={56} height={56} className="h-14 w-14 object-contain" />
            </div>
            <div>
              <div className="font-display text-xl font-bold">Sri Sairam</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-brand-foreground/70">
                Builders &amp; Developers
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-brand-foreground/75 leading-relaxed">
            Nagpur's trusted real-estate legacy since {site.established}. Plotted layouts, apartments and
            gated communities built on decades of integrity.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { href: site.social.facebook, icon: Facebook, label: "Facebook" },
              { href: site.social.instagram, icon: Instagram, label: "Instagram" },
              { href: site.social.youtube, icon: Youtube, label: "YouTube" },
              { href: site.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: site.social.twitter, icon: Twitter, label: "Twitter" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full border border-brand-foreground/20 p-2 hover:bg-accent hover:text-brand transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/projects", label: "All Projects" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-brand-foreground/80 hover:text-accent transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Our Projects</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {projects.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="text-brand-foreground/80 hover:text-accent transition"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span className="text-brand-foreground/80">{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-brand-foreground/80 hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`mailto:${site.email}`} className="text-brand-foreground/80 hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-foreground/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-foreground/60">
          <div>© {new Date().getFullYear()} Sri Sairam Builders &amp; Developers. All rights reserved.</div>
          <div>RERA Registered · Nagpur, Maharashtra</div>
        </div>
      </div>
    </footer>
  );
}
