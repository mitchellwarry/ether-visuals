import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [primaryHovered, setPrimaryHovered] = useState(false);

  return (
    <section className="relative flex items-center justify-center min-h-screen py-8 px-6 lg:py-12 lg:px-12 2xl:py-30 2xl:px-30 overflow-hidden">
      <div
        className="absolute -inset-25 blur-[100px]"
        style={{ background: "var(--accent-gradient)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: "#000000" }} />
      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-5xl">
        <div className="flex flex-col items-center">
          <p className="text-m uppercase tracking-widest text-white/60">
            Strategic Content for Builders, Trades &amp; Construction
          </p>
          <h1 className="text-5xl! lg:text-6xl! font-black! text-white uppercase tracking-tight leading-none">
            You Do <span className="text-accent-gradient">Great Work</span>.
            Does Your Online Presence Prove It?
          </h1>
          <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
            We turn your projects, people and expertise into content that builds
            trust, strengthens your brand and helps win better work.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div
            className="p-[1.5px] rounded-sm inline-block"
            style={{ background: "var(--accent-gradient)" }}
          >
            <button
              className="flex items-center gap-3 px-6 py-3 text-sm tracking-widest uppercase rounded-sm transition-colors duration-300"
              style={{
                background: primaryHovered ? "black" : "var(--accent-gradient)",
                color: primaryHovered ? "var(--accent-highlight)" : "white",
              }}
              onMouseEnter={() => setPrimaryHovered(true)}
              onMouseLeave={() => setPrimaryHovered(false)}
            >
              Book A Strategy Call
              <ArrowRight
                size={16}
                className="transition-transform duration-300"
                style={{
                  transform: primaryHovered
                    ? "translateX(5px)"
                    : "translateX(0)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
