import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ChevronRight, Compass, Heart, Milestone, ShieldCheck, Target } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import aboutImg from "@/assets/about-team-premium.jpg";
import founderImg from "@/assets/founder-premium.jpg";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "About Us | Sri Sairam Builders & Developers — Nagpur since 2008" },
      {
        name: "description",
        content:
          "The story of Sri Sairam Builders & Developers — 17 years, 2,000+ families, 3 million+ sq.ft delivered across Nagpur. Read our history, vision and leadership.",
      },
      { property: "og:title", content: "About Sri Sairam Builders & Developers" },
      {
        property: "og:description",
        content: "Seventeen years of Nagpur real estate, built on honest work and clear titles.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2008",
    title: "The founding of Sri Sairam",
    body:
      "Founded in Nagpur by first-generation developer Shri Ramesh Patil, with a single sanctioned plotted layout in Ajni and a promise: every title clean, every rupee accounted for.",
  },
  {
    year: "2010",
    title: "Sai Ram Nagari, Ajni",
    body:
      "Our founding plotted development — 84 plots, sold out in eleven months, still resold at 8x today. The project that gave the company its name.",
  },
  {
    year: "2013",
    title: "First apartment tower",
    body:
      "Sairam Residency Phase 1 delivered on Wardha Road — the company's first vertical project, and Nagpur's first project to offer piped gas from day one.",
  },
  {
    year: "2016",
    title: "Sai Ram Nagari 2, Pipalpar",
    body:
      "A palm-lined lakeside layout that redefined what a plotted development could look like in Nagpur. Featured in Maharashtra's premier property annual.",
  },
  {
    year: "2019",
    title: "RERA registration & scale",
    body:
      "Registered under Maharashtra RERA on the first day of eligibility. Crossed the ₹500 crore delivered mark and expanded to a 40-person in-house team.",
  },
  {
    year: "2022",
    title: "Sairam Heights announced",
    body:
      "Nagpur's tallest residential tower in our portfolio — a 22-storey landmark on Wardha Road, sold 60% during pre-launch.",
  },
  {
    year: "2025",
    title: "Techops Park & Nagari 3",
    body:
      "Our two most ambitious plotted developments announced together — betting on Nagpur's outer ring road and industrial corridor.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "Every contract, every registry, every rupee — verifiable in writing.",
  },
  {
    icon: Compass,
    title: "Foresight",
    body: "We buy land where infrastructure is coming, not where it has already arrived.",
  },
  {
    icon: Heart,
    title: "Relationships",
    body: "70% of our new bookings are from families of past buyers. That is our real marketing budget.",
  },
  {
    icon: Award,
    title: "Craft",
    body: "In-house architecture, planning, legal and sales. Nothing outsourced, nothing rushed.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-brand text-brand-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_60%)]" />
        <div className="container-x relative py-24 md:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            About Us
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-[1.05] text-balance">
            A real estate story <span className="text-accent">seventeen years</span> in the making.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-foreground/85">
            Sri Sairam Builders &amp; Developers has quietly grown from a single plotted layout in Ajni to
            twelve landmark projects across Nagpur — without a single title dispute, delayed registry or
            broken handover in our history.
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-14 lg:grid-cols-[1fr_1.15fr] items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Our Story</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">
            From one plot in Ajni to Nagpur's most trusted builder.
          </h2>
          <div className="mt-6 space-y-5 text-foreground/80 leading-relaxed">
            <p>
              Sri Sairam Builders &amp; Developers was founded in 2008 by Shri Ramesh Patil, a first-generation
              entrepreneur who had spent a decade watching Nagpur families lose lakhs to fly-by-night plot
              agents and unregistered layouts. He believed there was room for one more builder in the city —
              a builder who would treat every plot as if it were his own family's.
            </p>
            <p>
              Seventeen years, twelve landmark projects and over two thousand happy families later, that
              belief has become an institution. Not because we grew fast — but because we refused to grow
              wrong. Every layout is N.A. sanctioned. Every apartment is RERA registered. Every promise made
              at booking is a promise kept at handover.
            </p>
            <p>
              Today, Sri Sairam is a 40-person team of architects, planners, civil engineers, legal
              specialists and relationship managers, headquartered on Wardha Road with a site presence in
              every one of our active projects. Our second generation of leadership has now stepped in,
              carrying forward the same discipline — with the added ambition of taking Sri Sairam beyond
              Nagpur, into central India's fastest-growing tier-1 markets.
            </p>
          </div>
        </div>
        <div className="grid gap-5">
          <img
            src={aboutImg}
            alt="Sri Sairam Builders architects, engineers and project team at a residential township"
            loading="lazy"
            className="rounded-3xl shadow-elegant object-cover w-full aspect-[4/3]"
            width={1400}
            height={1000}
          />
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: "2008", v: "Founded" },
              { k: "12+", v: "Projects" },
              { k: "2,000+", v: "Families" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-secondary p-4 text-center">
                <div className="font-display text-2xl font-bold text-brand">{s.k}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Milestones</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">
              Seventeen years, in seven chapters.
            </h2>
          </div>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${
                    i % 2 === 0 ? "md:[&>:first-child]:text-right" : "md:[&>:first-child]:order-2"
                  }`}
                >
                  <div className="pl-12 md:pl-0 md:pr-8">
                    <div className="font-display text-4xl font-bold text-accent">{t.year}</div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-brand">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full gradient-gold ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl gradient-gold opacity-15 blur-2xl" />
          <img
            src={founderImg}
            alt="Founder of Sri Sairam Builders & Developers"
            loading="lazy"
            className="relative rounded-3xl shadow-elegant object-cover w-full aspect-[4/5] max-w-md mx-auto"
            width={1000}
            height={1250}
          />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            From the Founder
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-brand text-balance">
            "A plot is not a product. It is a promise."
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            When we started in 2008, Nagpur was a small city with a big future. We told ourselves that we
            would sell no more plots than we could personally stand behind — and we would still be around,
            in the same office, to answer for every one of them thirty years later.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Seventeen years on, we are still in the same office. And we are still standing behind every plot.
          </p>
          <div className="mt-8">
            <div className="font-display text-xl font-bold text-brand">Shri Ramesh Patil</div>
            <div className="text-sm text-muted-foreground">Founder &amp; Managing Director</div>
          </div>
        </div>
      </section>

      <section className="bg-brand text-brand-foreground py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Our Values
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
              Four principles. Zero exceptions.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-brand-foreground/15 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-gold text-brand">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-accent">{v.title}</h3>
                <p className="mt-2 text-sm text-brand-foreground/80 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28 grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-secondary p-10 md:p-14">
          <Target className="h-10 w-10 text-accent" />
          <h3 className="mt-4 font-display text-3xl font-bold text-brand">Our Mission</h3>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            To be the real estate developer central India recommends to its own family — by ensuring every
            plot, every apartment and every handover meets a standard the buyer never has to negotiate for.
          </p>
        </div>
        <div className="rounded-3xl gradient-brand text-brand-foreground p-10 md:p-14">
          <Milestone className="h-10 w-10 text-accent" />
          <h3 className="mt-4 font-display text-3xl font-bold">Our Vision</h3>
          <p className="mt-4 text-brand-foreground/85 leading-relaxed">
            To carry Nagpur's small-city trust into every tier-1 growth corridor in central India — never
            trading our discipline for scale, never our reputation for revenue.
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-elegant">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-brand">Come, meet the team.</h3>
            <p className="mt-2 text-muted-foreground">
              Visit our head office on Wardha Road, {site.address.split(",").slice(-3, -1).join(", ")}.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-brand shadow-elegant hover:brightness-105 transition"
          >
            Contact Us <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
