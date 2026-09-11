import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Contact Us | Sri Sairam Builders & Developers, Nagpur" },
      {
        name: "description",
        content:
          "Get in touch with Sri Sairam Builders & Developers, Nagpur. Head office on Wardha Road. Call, email or WhatsApp — we reply within minutes.",
      },
      { property: "og:title", content: "Contact Sri Sairam Builders & Developers" },
      {
        property: "og:description",
        content: "Nagpur head office, phone, WhatsApp and email — we reply within minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <SiteLayout>
      <section className="gradient-brand text-brand-foreground">
        <div className="container-x py-20 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Contact Us
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05] text-balance">
            Let's talk about the address you'll call home.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-foreground/85">
            Whether you're picking your first plot or your third apartment — our team is on the other end of
            the phone, ready to help. No pressure, no obligation, no scripted callbacks.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-5">
          <ContactCard
            icon={Phone}
            title="Call Us"
            lines={[
              { href: `tel:${site.phone.replace(/\s/g, "")}`, text: site.phone },
              { href: `tel:${site.phoneAlt.replace(/\s/g, "")}`, text: site.phoneAlt },
            ]}
          />
          <ContactCard
            icon={Mail}
            title="Email Us"
            lines={[
              { href: `mailto:${site.email}`, text: site.email },
              { href: `mailto:${site.emailSales}`, text: site.emailSales },
            ]}
          />
          <ContactCard
            icon={MapPin}
            title="Visit Us"
            lines={[{ href: site.mapsLink, text: site.address, external: true }]}
          />
          <ContactCard
            icon={Clock}
            title="Office Hours"
            lines={[
              { text: "Mon – Sat · 10:00 AM – 7:30 PM" },
              { text: "Sun · By appointment" },
            ]}
          />
          <div className="rounded-3xl border border-border bg-card p-7">
            <h4 className="font-display text-lg font-bold text-brand">Follow us</h4>
            <div className="mt-4 flex gap-3">
              {[
                { href: site.social.facebook, icon: Facebook, label: "Facebook" },
                { href: site.social.instagram, icon: Instagram, label: "Instagram" },
                { href: site.social.youtube, icon: Youtube, label: "YouTube" },
                { href: site.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-border p-3 text-brand hover:bg-brand hover:text-brand-foreground transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("sent");
          }}
          className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand">Send us a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill this form and a senior advisor will call you within one working hour.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" required />
            <Field label="Mobile Number" name="phone" type="tel" required />
            <Field label="Email Address" name="email" type="email" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                I'm interested in
              </label>
              <select
                name="interest"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              >
                <option>Residential Plots</option>
                <option>Flats &amp; Apartments</option>
                <option>Both</option>
                <option>Investment consultation</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                placeholder="Tell us what you're looking for…"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-brand shadow-elegant hover:brightness-105 transition"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
          {status === "sent" && (
            <p className="mt-4 text-sm text-whatsapp font-medium">
              ✓ Thank you! A Sri Sairam advisor will reach out shortly.
            </p>
          )}
        </form>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Our Location</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-brand text-balance">
            Come by for a chai and a chat.
          </h2>
          <div className="mt-8 rounded-3xl overflow-hidden border border-border shadow-elegant">
            <iframe
              title="Sri Sairam Builders location"
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px]"
            />
          </div>
          <div className="mt-4">
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-accent"
            >
              <MapPin className="h-4 w-4" /> Open on Google Maps
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: { href?: string; text: string; external?: boolean }[];
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-7">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-gold text-brand">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <h4 className="font-display text-lg font-bold text-brand">{title}</h4>
          <div className="mt-1.5 space-y-1">
            {lines.map((l, i) =>
              l.href ? (
                <a
                  key={i}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="block text-sm text-foreground/85 hover:text-accent"
                >
                  {l.text}
                </a>
              ) : (
                <div key={i} className="text-sm text-foreground/85">
                  {l.text}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}
