import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-8 px-6 lg:py-12 lg:px-12 2xl:py-30 2xl:px-30 overflow-hidden border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="absolute -inset-25 blur-[100px]"
        style={{ background: "var(--accent-gradient)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: "#0a0a0a" }} />
      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-5xl">
        <h2 className="text-5xl! lg:text-6xl! font-black! text-white uppercase tracking-tight leading-tight">
          Your <span className="text-accent-gradient">Business</span> Has
          Already Done The <span className="text-accent-gradient">Hard</span>{" "}
          Part.
        </h2>
        <p className="text-base lg:text-lg text-white/70 leading-relaxed">
          You've built the projects.
          <br />
          You've built the reputation.
          <br />
          You've built the experience.
          <br />
          Now let's build the brand around it.
        </p>
        <div
          className="p-[1.5px] rounded-sm inline-block"
          style={{ background: "var(--accent-gradient)" }}
        >
          <button
            className="flex items-center gap-3 px-6 py-3 text-sm tracking-widest uppercase rounded-sm transition-colors duration-300"
            style={{
              background: hovered ? "black" : "var(--accent-gradient)",
              color: hovered ? "var(--accent-highlight)" : "white",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Book A Strategy Call
            <ArrowRight
              size={16}
              className="transition-transform duration-300"
              style={{
                transform: hovered ? "translateX(5px)" : "translateX(0)",
              }}
            />
          </button>
        </div>
        <p className="text-sm uppercase tracking-widest text-white/50">
          Sydney | Wollongong | Illawarra | NSW
        </p>
      </div>
    </section>
  );
}
