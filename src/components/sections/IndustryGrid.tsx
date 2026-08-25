import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../ui/ProjectCard";
import type { ProjectCardProps } from "../ui/ProjectCard";

export interface IndustryGridProps {
  projects: ProjectCardProps[];
}

export function IndustryGrid({ projects }: IndustryGridProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-30 px-6 lg:pb-12 lg:px-12 2xl:pb-30 2xl:px-30 max-w-480 mx-auto w-full">
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
      <div className="flex justify-center mt-20">
        <div
          className="p-[1.5px] rounded-sm inline-block"
          style={{ background: "var(--accent-gradient)" }}
        >
          <a
            href="https://instagram.com/ether.visuals"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 text-sm tracking-widest uppercase rounded-sm transition-colors duration-300"
            style={{
              background: hovered ? "black" : "var(--accent-gradient)",
              color: hovered ? "var(--accent-highlight)" : "white",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            View More
            <ArrowRight
              size={16}
              className="transition-transform duration-300"
              style={{
                transform: hovered ? "translateX(5px)" : "translateX(0)",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
