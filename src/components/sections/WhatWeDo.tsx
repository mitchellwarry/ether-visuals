import { useState } from "react";
import bg1 from "../../assets/background images/P1153922.jpg";
import bg2 from "../../assets/background images/P1078197.jpg";
import bg3 from "../../assets/background images/ptpnov-21.jpg";

const services = [
  {
    number: "01",
    heading: "Content Systems",
    text: "Ongoing strategic content built around the business, its projects and sales pipeline.",
    bg: bg1,
  },
  {
    number: "02",
    heading: "Foundation Assets",
    text: "Brand stories, testimonials, process videos, sales videos and other core trust-building assets.",
    bg: bg2,
  },
  {
    number: "03",
    heading: "Project Content",
    text: "Professional video, photography and drone coverage across projects, milestones and completed work.",
    bg: bg3,
  },
];

export function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null);

  return (
    <section className="pt-12 pb-28 px-6 lg:pt-16 lg:pb-36 lg:px-12 2xl:pt-20 2xl:pb-48 2xl:px-30 max-w-375 mx-auto w-full">
      <div className="px-6 lg:px-12 2xl:px-30 max-w-375 mx-auto w-full pt-12 lg:pt-16 2xl:pt-20 pb-15">
        <p
          className="text-sm uppercase tracking-widest"
          style={{ color: "var(--text)" }}
        >
          Lorem Ipsum
        </p>
        <h2
          className="text-4xl! lg:text-5xl! font-black! uppercase tracking-tight leading-tight mt-3"
          style={{ color: "var(--text-h)" }}
        >
          What <span className="text-accent-gradient">We </span>Create{" "}
        </h2>
      </div>
      <div className="flex gap-4 h-137">
        {services.map((service, i) => {
          const isHovered = hoveredIndex === i;
          const anyHovered = hoveredIndex !== null;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden cursor-default"
              style={{
                flex: isHovered ? "1.4" : anyHovered ? "0.85" : "1",
                borderRadius: "15px",
                border: "1px solid var(--border)",
                backgroundImage: `url(${service.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "rgba(0,0,0,0.55)",
                  opacity: isHovered ? 1 : 0.4,
                  transition: "opacity 0.45s ease",
                  borderRadius: "15px",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-10 pt-10 pb-16 text-left z-10">
                <span
                  className="block font-mono text-xs mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {service.number}
                </span>
                <h3
                  className="text-2xl font-bold uppercase leading-tight"
                  style={{ color: "var(--text-h)" }}
                >
                  {service.heading}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isHovered
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p
                    className="text-sm leading-relaxed max-w-87"
                    style={{ color: "var(--text)" }}
                  >
                    {service.text}
                  </p>
                  <button
                    className="flex items-center gap-1 mt-4 text-xs font-semibold tracking-widest uppercase bg-transparent border-0 p-0 cursor-pointer"
                    style={{ color: "var(--text-h)" }}
                    onMouseEnter={() => setHoveredBtn(i)}
                    onMouseLeave={() => setHoveredBtn(null)}
                  >
                    Get Started
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform:
                          hoveredBtn === i
                            ? "translateX(3px)"
                            : "translateX(0)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
