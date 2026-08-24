import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

interface WorkPath {
  name: string;
  tagline: string;
  bestFor: string;
  includesLabel?: string;
  features: string[];
}

const paths: WorkPath[] = [
  {
    name: "Foundation Package",
    tagline:
      "The core trust-building assets every business needs before it can sell with confidence.",
    bestFor: "Best for businesses establishing their brand for the first time.",
    features: [
      "Brand story video",
      "Core testimonial content",
      "Website-ready photography",
      "Foundational messaging",
    ],
  },
  {
    name: "Consistency System",
    tagline:
      "Ongoing content built around your sales pipeline, so your visibility never stalls.",
    bestFor: "Best for growing businesses that need a steady content engine.",
    includesLabel: "Everything in Foundation, plus:",
    features: [
      "Monthly content production",
      "Multi-platform distribution",
      "Sales enablement assets",
      "Regular strategy check-ins",
    ],
  },
  {
    name: "90-Day Growth System",
    tagline:
      "An intensive, focused sprint designed to accelerate visibility and conversion fast.",
    bestFor: "Best for businesses ready to scale quickly.",
    includesLabel: "Everything in Consistency, plus:",
    features: [
      "Dedicated growth strategy",
      "Weekly production cadence",
      "Performance tracking & reporting",
      "Priority support",
    ],
  },
];

export function WaysToWorkWithUs() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-12 px-6 lg:py-16 lg:px-12 2xl:py-20 2xl:px-30 max-w-375 mx-auto w-full">
      <p
        className="text-sm uppercase tracking-widest text-left"
        style={{ color: "var(--text)" }}
      >
        Working Together
      </p>
      <h2
        className="text-4xl! lg:text-5xl! font-black! uppercase tracking-tight leading-tight mt-3 text-left"
        style={{ color: "var(--text-h)" }}
      >
        Ways to <span className="text-accent-gradient">Work</span> With Us
      </h2>
      <p
        className="text-sm text-left max-w-160 mt-3"
        style={{ color: "var(--text)" }}
      >
        Every business is at a different stage. These are the paths we most
        often build with clients — the right one depends on where you're
        starting from and how fast you want to move.
      </p>

      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient
            id="ways-to-work-check-gradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#ff8c42" />
            <stop offset="100%" stopColor="#e63910" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 items-stretch">
        {paths.map((path) => {
          const isCardHovered = hoveredCard === path.name;

          return (
            <div
              key={path.name}
              className="relative flex flex-col text-left p-12 transition-colors duration-300"
              onMouseEnter={() => setHoveredCard(path.name)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: "15px",
                border: isCardHovered
                  ? "1px solid transparent"
                  : "1px solid var(--border)",
                backgroundImage: isCardHovered
                  ? "linear-gradient(var(--bg), var(--bg)), var(--accent-gradient)"
                  : undefined,
                backgroundOrigin: isCardHovered ? "border-box" : undefined,
                backgroundClip: isCardHovered
                  ? "padding-box, border-box"
                  : undefined,
              }}
            >
              <h3
                className="text-2xl font-bold uppercase tracking-tight pb-3"
                style={{ color: "var(--text-h)" }}
              >
                {path.name}
              </h3>
              <p className="text-sm mt-3" style={{ color: "var(--text)" }}>
                {path.tagline}
              </p>

              <div
                className="my-6 border-t"
                style={{ borderColor: "var(--border)" }}
              />

              <div className="flex flex-col gap-5 flex-1">
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "var(--text)" }}
                >
                  {path.bestFor}
                </p>

                {path.includesLabel && (
                  <p className="text-sm" style={{ color: "var(--text)" }}>
                    {path.includesLabel}
                  </p>
                )}
                <ul className="flex flex-col gap-3">
                  {path.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--text-h)" }}
                    >
                      <Check
                        size={16}
                        className="shrink-0 mt-0.5 transition-colors duration-300"
                        color={
                          isCardHovered
                            ? "url(#ways-to-work-check-gradient)"
                            : "var(--text)"
                        }
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <div
          className="p-[1.5px] rounded-sm inline-block"
          style={{ background: "var(--accent-gradient)" }}
        >
          <button
            className="flex items-center justify-center gap-3 px-8 py-3 text-sm tracking-widest uppercase rounded-sm transition-colors duration-300"
            style={{
              background: isHovered ? "var(--accent-gradient)" : "var(--bg)",
              color: isHovered ? "white" : "var(--text-h)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Let's Talk
            <ArrowRight
              size={16}
              className="transition-transform duration-300"
              style={{
                transform: isHovered ? "translateX(5px)" : "translateX(0)",
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
