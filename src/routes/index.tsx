import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Home,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { plotProjects, flatProjects } from "@/lib/projects";
import { site } from "@/lib/site";
import heroImg from "@/assets/hero.jpg.asset.json";
import aboutImg from "@/assets/about.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Sairam Builders & Developers | Premium Real Estate in Nagpur" },
      {
        name: "description",
        content:
          "Explore award-winning residential plots and premium apartments across Nagpur. Sri Sairam Builders — established 2008, trusted by 2,000+ families.",
      },
      { property: "og:title", content: "Sri Sairam Builders & Developers" },
      {
        property: "og:description",
        content: "Nagpur's most trusted real estate legacy — plots and apartments since 2008.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Intro />
      <PlotsSection />
      <WhyChooseUs />
      <FlatsSection />
      <StatsBand />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg.url}
        alt="Aerial view of a premium Sri Sairam plotted development at golden hour"
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        fetchPriority="high"
      />
      <div className="absolute inset-0 hero-mask" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/70 via-brand/40 to-transparent" />

      <div className="container-x relative z-10 flex h-full items-center pt-20">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Nagpur's Legacy Real Estate · Est. 2008
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance">
            Building homes.
            <br />
            <span className="text-accent">Building futures.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
            For over a decade and a half, Sri Sairam Builders &amp; Developers has quietly shaped Nagpur's
            skyline and its most sought-after plotted layouts — with clear titles, transparent pricing and a
            handshake that means something.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-brand shadow-elegant hover:brightness-105 transition"
            >
              Explore Our Projects <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-brand transition"
            >
              Book a Site Visit
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "17+", v: "Years of Trust" },
              { k: "2,000+", v: "Happy Families" },
              { k: "12+", v: "Landmark Projects" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl md:text-4xl font-bold text-accent">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/70 text-xs uppercase tracking-widest">
          Scroll
          <div className="h-10 w-[1px] bg-white/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, text: "RERA Registered" },
    { icon: Award, text: "Est. 2008" },
    { icon: Users, text: "2,000+ Families" },
    { icon: Building2, text: "12+ Projects Delivered" },
    { icon: TrendingUp, text: "Bank Loan Approved" },
  ];
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="container-x py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {items.map((it) => (
          <div key={it.text} className="flex items-center gap-2 text-sm">
            <it.icon className="h-4 w-4 text-accent" />
            <span className="text-brand-foreground/85">{it.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-2 items-center">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          Who We Are
        </span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">
          A quiet reputation, built on <span className="text-accent">seventeen years</span> of honest work.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Sri Sairam Builders &amp; Developers was founded in {site.established} on a single principle — that a plot
          of land is not a product, it is a promise. Three generations of Nagpur families have trusted us with
          that promise, and we have never given them a reason to reconsider.
        </p>
        <ul className="mt-8 space-y-3">
          {[
            "Clear title, N.A. sanctioned layouts on every project",
            "Bank loan approved with all major nationalised banks",
            "Fully transparent registry, no hidden costs",
            "In-house architecture, legal, sales & handover teams",
          ].map((t) => (
            <li key={t} className="flex gap-3 text-sm text-foreground/85">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              {t}
            </li>
          ))}
        </ul>
        <Link
          to="/about"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:brightness-110 transition"
        >
          Read Our Story <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl gradient-gold opacity-20 blur-2xl" />
        <img
          src={aboutImg.url}
          alt="Sri Sairam Builders team reviewing project blueprints"
          loading="lazy"
          className="relative rounded-3xl shadow-elegant object-cover w-full aspect-[4/3]"
        />
        <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-elegant border border-border max-w-[220px] hidden md:block">
          <div className="font-display text-3xl font-bold text-brand">Since 2008</div>
          <div className="text-xs text-muted-foreground mt-1">Nagpur's real-estate legacy</div>
        </div>
      </div>
    </section>
  );
}

function PlotsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Featured Layouts
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand max-w-xl text-balance">
              Residential Plots — own a piece of Nagpur's future.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each of our plotted developments is chosen where the road, the metro or the SEZ will arrive next —
            not where the crowd has already gathered.
          </p>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {plotProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Clear Title Guarantee",
      body: "Every plot and every apartment we sell comes with a legally verified, encumbrance-free title. Registered in your name from day one.",
    },
    {
      icon: Ruler,
      title: "In-house Planning",
      body: "Our architects and town planners design every layout — never outsourced, never rushed. Wide roads, right orientation, real ventilation.",
    },
    {
      icon: TrendingUp,
      title: "Genuine Appreciation",
      body: "We buy land where infrastructure is coming next. Our earliest layouts have appreciated over 8x — the average is 3x in seven years.",
    },
    {
      icon: Home,
      title: "Handover That Feels Like Home",
      body: "A dedicated relationship manager stays with you from booking to registry to construction guidance and beyond.",
    },
  ];
  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          Why Sri Sairam
        </span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">
          Reputation is not a marketing budget. It is seventeen years of not cutting corners.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-shadow"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-gold text-brand">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-brand">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FlatsSection() {
  return (
    <section className="py-20 md:py-28 bg-brand text-brand-foreground">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Signature Residences
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-xl text-balance">
              Apartments &amp; homes designed to be lived in for a lifetime.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-brand hover:border-accent transition"
          >
            View all projects <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {flatProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const stats = [
    { k: "17+", v: "Years in Nagpur" },
    { k: "12+", v: "Landmark Projects" },
    { k: "2,000+", v: "Happy Families" },
    { k: "3M+", v: "Sq.ft Delivered" },
  ];
  return (
    <section className="container-x py-16 md:py-20">
      <div className="rounded-3xl gradient-brand text-brand-foreground p-10 md:p-14 grid gap-8 md:grid-cols-4 text-center shadow-elegant">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="font-display text-5xl md:text-6xl font-bold text-accent">{s.k}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-brand-foreground/80">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 shadow-elegant">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full gradient-gold opacity-20 blur-3xl" />
        <div className="max-w-2xl relative">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Book a Site Visit
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">
            The best way to buy land is to walk on it.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Our sales team will pick you up from any location in Nagpur, walk you through the layout, show
            you the plot boundaries and answer every question — no obligation, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-brand shadow-elegant hover:brightness-105 transition"
            >
              <MapPin className="h-4 w-4" /> Schedule a Visit
            </Link>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand px-7 py-3.5 text-sm font-semibold text-brand hover:bg-brand hover:text-brand-foreground transition"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
