import { ProjectCard } from "../ui/ProjectCard";
import type { ProjectCardProps } from "../ui/ProjectCard";

export interface IndustryGridProps {
  projects: ProjectCardProps[];
}

export function IndustryGrid({ projects }: IndustryGridProps) {
  return (
    <section className="pb-8 px-6 lg:pb-12 lg:px-12 2xl:pb-30 2xl:px-30 max-w-480 mx-auto w-full">
      <div className="px-6 lg:px-12 2xl:px-30 max-w-480 mx-auto w-full pt-8 lg:pt-12 2xl:pt-30 pb-20">
        <p
          className="text-sm uppercase tracking-widest"
          style={{ color: "var(--text)" }}
        >
          Who We Work With
        </p>
        <h2
          className="text-4xl! lg:text-5xl! font-black! uppercase tracking-tight leading-tight mt-3"
          style={{ color: "var(--text-h)" }}
        >
          Helping Local Businesses
          <br />
          <span className="text-accent-gradient">Look the Part</span> & Grow
        </h2>
      </div>
      <div className="grid gap-x-4 gap-y-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard lazyLoad key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
