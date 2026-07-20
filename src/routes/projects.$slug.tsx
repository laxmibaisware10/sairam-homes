import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ChevronRight, MapPin, Phone, Sparkles, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.name} | ${p.location} | Sri Sairam Builders` },
        { name: "description", content: `${p.name} — ${p.tagline}. ${p.description.slice(0, 120)}` },
        { property: "og:title", content: `${p.name} — Sri Sairam Builders` },
        { property: "og:description", content: p.tagline },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-brand">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-brand"
        >
          Try again
        </button>
      </div>
    </SiteLayout>
  ),
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <SiteLayout>
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-brand">Project not found</h1>
        <p className="mt-3 text-muted-foreground">The project you're looking for may have been renamed.</p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-brand"
        >
          Back to all projects
        </Link>
      </div>
    </SiteLayout>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug && p.type === project.type).slice(0, 3);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&z=14&output=embed`;

  return (
    <SiteLayout>
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden -mt-20">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-brand/30" />
        <div className="container-x relative z-10 h-full flex flex-col justify-end pb-16 pt-24 text-white">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
              {project.status}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
              {project.type}
            </span>
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
            {project.name}
          </h1>
          <p className="mt-3 text-lg text-white/85 max-w-2xl">{project.tagline}</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <MapPin className="h-4 w-4 text-accent" /> {project.fullLocation}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Overview</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-brand text-balance">
            {project.name} — at a glance.
          </h2>
          <p className="mt-5 text-lg text-foreground/80 leading-relaxed">{project.description}</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-3xl border border-border bg-card p-8 shadow-elegant lg:sticky lg:top-28">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Interested in {project.name}?
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-brand">
            Book a personal site visit
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Our team will walk you through the layout, show you plot boundaries and answer every question.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-gold px-5 py-3 text-sm font-semibold text-brand shadow-elegant hover:brightness-105 transition"
          >
            Enquire Now <ChevronRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand px-5 py-3 text-sm font-semibold text-brand hover:bg-brand hover:text-brand-foreground transition"
          >
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Type</div>
              <div className="mt-1 font-semibold text-brand text-sm">{project.type}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Status</div>
              <div className="mt-1 font-semibold text-brand text-sm">{project.status}</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container-x">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Location &amp; Layout
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-brand text-balance">
            Where {project.name} sits on the Nagpur map.
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            The location, the surrounding road network and every planned government investment nearby — see
            exactly what you're investing next to.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl overflow-hidden border border-border shadow-elegant bg-white">
              <iframe
                title={`${project.name} map`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[460px]"
              />
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-bold text-brand">Connectivity</h3>
              <ul className="mt-5 space-y-3">
                {project.connectivity.map((c) => (
                  <li
                    key={c.place}
                    className="flex items-center justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2 text-sm text-foreground/85">
                      <MapPin className="h-4 w-4 text-accent" />
                      {c.place}
                    </div>
                    <div className="text-sm font-semibold text-brand">{c.distance}</div>
                  </li>
                ))}
              </ul>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand px-5 py-3 text-sm font-semibold text-brand hover:bg-brand hover:text-brand-foreground transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          Why Invest Here
        </span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-brand max-w-3xl text-balance">
          The four reasons {project.name} makes financial sense.
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Government infrastructure, transport corridors and micro-market trends — the real drivers of
          appreciation.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {project.investment.map((r, i) => (
            <div
              key={r.title}
              className="rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg gradient-gold text-brand font-display font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-bold text-brand">{r.title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand text-brand-foreground py-16 md:py-20">
        <div className="container-x">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Amenities
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
            What comes with every plot at {project.name}.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.amenities.map((a) => (
              <div
                key={a}
                className="rounded-2xl border border-brand-foreground/15 bg-white/5 p-5 flex items-center gap-3 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm text-brand-foreground/90">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl gradient-brand text-brand-foreground p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-elegant">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              <TrendingUp className="h-3.5 w-3.5 text-accent" /> Limited inventory
            </div>
            <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold">
              Ready to visit {project.name}?
            </h3>
            <p className="mt-3 text-brand-foreground/80">
              Free pickup from anywhere in Nagpur. Complimentary consultation with our senior advisor.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-brand hover:brightness-105 transition"
          >
            Book Site Visit <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-x pb-24">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand mb-8">
            You may also like
          </h3>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-elegant"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-bold text-brand">{p.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.location}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
