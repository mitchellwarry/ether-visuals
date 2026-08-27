import { ArrowRight, Check, ChevronDown, X } from "lucide-react";

const commodityLines = [
  "Two builders can show a beautiful home.",
  "Two plumbers can show a beautiful bathroom.",
  "Two concreters can show the same finished driveway.",
  "Two roofers can show the same finished roof.",
  "Two landscapers can show the same finished garden.",
];

const differentiators = [
  "Your people.",
  "Your standards.",
  "Your process.",
  "Your expertise.",
  "Your customer experience.",
];

const approachPoints = [
  {
    title: "Strategy",
    description: "Figuring out exactly what the video needs to achieve.",
  },
  {
    title: "Plan",
    description: "The shoot day gets mapped out so nothing is left to chance.",
  },
  {
    title: "Shoot",
    description: "Lighting, direction and filming, all handled on site.",
  },
  {
    title: "Create",
    description: "Raw footage becomes a story that actually feels like you.",
  },
  {
    title: "Deploy",
    description: "Ready to publish, delivered straight across your channels.",
  },
];

export function HowWereDifferent() {
  return (
    <section className="relative pt-12 pb-16 px-6 lg:pt-16 lg:pb-20 lg:px-12 2xl:pt-20 2xl:pb-28 2xl:px-30 max-w-375 mx-auto w-full">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="hwd-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff8c42" />
            <stop offset="100%" stopColor="#e63910" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10">
        <p
          className="text-sm uppercase tracking-widest text-center"
          style={{ color: "var(--text)" }}
        >
          How We're Different
        </p>
        <h2
          className="text-4xl! lg:text-5xl! font-black! uppercase tracking-tight leading-tight text-center mt-3 max-w-220 mx-auto! align-center"
          style={{ color: "var(--text-h)" }}
        >
          Stop Competing On The <br />
          <span className="text-accent-gradient">Finished Photo</span>
        </h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mt-10 mb-20 lg:mb-24 max-w-300 mx-auto">
          <div
            className="hidden lg:flex absolute left-1/2 top-1/2 z-20 items-center justify-center w-14 h-14 rounded-full text-xs font-bold uppercase tracking-wide"
            style={{
              transform: "translate(-50%, -50%)",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              color: "var(--text-h)",
              boxShadow: "var(--shadow)",
            }}
          >
            vs
          </div>

          <div
            className="flex flex-col gap-6 pt-10 px-10 pb-10 lg:pt-12 lg:px-12 lg:pb-12 text-left"
            style={{ borderRadius: "20px", border: "1px solid var(--border)" }}
          >
            <h3
              className="text-sm uppercase tracking-widest"
              style={{ color: "var(--text)" }}
            >
              What Anyone Can Copy
            </h3>
            <ul className="flex flex-col gap-4">
              {commodityLines.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-base"
                  style={{ color: "var(--text)" }}
                >
                  <X
                    size={16}
                    className="shrink-0 mt-1 opacity-50"
                    style={{ color: "var(--text)" }}
                  />
                  <span className="opacity-80">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative flex flex-col gap-6 pt-10 px-10 pb-10 lg:pt-12 lg:px-12 lg:pb-12 text-left overflow-hidden"
            style={{
              borderRadius: "20px",
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(var(--bg), var(--bg)), var(--accent-gradient)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow:
                "var(--shadow), 0 0 60px -20px rgba(230, 57, 16, 0.35)",
            }}
          >
            <h3 className="relative text-sm uppercase tracking-widest text-accent-gradient">
              What Competitors Can't Copy
            </h3>
            <ul className="relative flex flex-col gap-2">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base font-semibold px-3 py-2.5 rounded-xl"
                  style={{
                    color: "var(--text-h)",
                    background: "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  <Check
                    size={18}
                    className="shrink-0"
                    color="url(#hwd-gradient)"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2
          className="text-4xl! lg:text-5xl! font-black! uppercase tracking-tight text-center mt-14 lg:mt-16"
          style={{ color: "var(--text-h)" }}
        >
          That's what we want to{" "}
          <span className="text-accent-gradient">capture</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-20 lg:mt-24">
          <div className="order-2 lg:order-1 flex flex-col gap-6 text-left">
            <h2
              className="text-4xl! lg:text-5xl! font-black! uppercase tracking-tight"
              style={{ color: "var(--text-h)" }}
            >
              Not <span className="text-accent-gradient">Comfortable</span> On
              Camera?
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text)" }}
            >
              Most of our clients weren't either. We guide the conversation, ask
              the right questions and keep filming natural rather than heavily
              scripted. There is a script, but it's ours to worry about — you
              don't need to prepare, rehearse or organise anything beforehand.
              We handle the direction, lighting and setup from start to finish,
              so all you need to do is show up.
            </p>
            <h4
              className="text-xs lg:text-sm uppercase tracking-widest"
              style={{ color: "var(--text)" }}
            >
              How A Video Gets Made
            </h4>
            <ul className="flex flex-col">
              {approachPoints.map((point, index) => (
                <li
                  key={point.title}
                  className="relative flex items-start gap-4 pb-6 last:pb-0 text-base"
                  style={{ color: "var(--text-h)" }}
                >
                  {index !== approachPoints.length - 1 && (
                    <span
                      className="absolute left-4 top-8 bottom-0 w-px -translate-x-1/2"
                      style={{ background: "var(--border)" }}
                    />
                  )}
                  <span
                    className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0"
                    style={{
                      background: "var(--accent-gradient)",
                      color: "#fff",
                    }}
                  >
                    {index + 1}
                  </span>
                  <span className="pt-1 flex flex-col items-start gap-1 2xl:flex-row 2xl:items-start 2xl:gap-2">
                    <span className="flex items-center gap-1.5 2xl:contents">
                      <span className="font-semibold">{point.title}</span>
                      <ChevronDown
                        size={16}
                        className="shrink-0 2xl:hidden"
                        color="url(#hwd-gradient)"
                      />
                    </span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 hidden 2xl:block 2xl:mt-1"
                      color="url(#hwd-gradient)"
                    />
                    <span>{point.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="order-1 lg:order-2 relative overflow-hidden w-full aspect-4/5"
            style={{
              borderRadius: "15px",
              border: "1px solid var(--border)",
            }}
          >
            <img
              src="https://placehold.co/960x1200/0a0a0a/f3f4f6?text=Photo"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
