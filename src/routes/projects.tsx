import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { plotProjects, flatProjects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Our Projects | Sri Sairam Builders & Developers, Nagpur" },
      {
        name: "description",
        content:
          "Explore all Sri Sairam Builders projects — residential plots in Kalamna, Surgaon, Pipalpar, Ajni and premium apartment residences across Nagpur.",
      },
      { property: "og:title", content: "Our Projects — Sri Sairam Builders & Developers" },
      {
        property: "og:description",
        content: "Plots and apartments across Nagpur's most promising locations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="gradient-brand text-brand-foreground">
        <div className="container-x py-20 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Our Projects
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold max-w-3xl leading-[1.05] text-balance">
            Every project, a landmark. Every landmark, a legacy.
          </h1>
          <p className="mt-6 max-w-2xl text-brand-foreground/85 text-lg">
            Twelve landmark developments across Nagpur — from lakeside plotted layouts to premium
            twenty-storey towers. Explore the addresses that Sri Sairam calls home.
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-24">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Plotted Developments
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-brand">
            Residential Plots
          </h2>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {plotProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Signature Residences
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-brand">
            Flats &amp; Apartments
          </h2>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {flatProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
