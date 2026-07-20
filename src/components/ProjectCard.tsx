import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-elegant flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-brand/10 to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-accent/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
          {project.status}
        </span>
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
          {project.type === "Residential Plots" ? "Plots" : "Flats"}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl font-bold text-brand">{project.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{project.tagline}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          {project.location}
        </div>
        <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">View details</span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full gradient-gold text-brand transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
