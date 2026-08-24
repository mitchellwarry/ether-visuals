interface ContentSystemStage {
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

const stages: ContentSystemStage[] = [
  {
    heading: "Awareness",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    image: "https://placehold.co/480x280/0a0a0a/f3f4f6?text=Awareness",
    imageAlt: "Placeholder image representing the awareness stage",
  },
  {
    heading: "Trust",
    paragraphs: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "https://placehold.co/480x280/1a1a1a/f3f4f6?text=Trust",
    imageAlt: "Placeholder image representing the trust stage",
  },
  {
    heading: "Authority",
    paragraphs: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    image: "https://placehold.co/480x280/0a0a0a/f3f4f6?text=Authority",
    imageAlt: "Placeholder image representing the authority stage",
  },
  {
    heading: "Proof",
    paragraphs: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    ],
    image: "https://placehold.co/480x280/1a1a1a/f3f4f6?text=Proof",
    imageAlt: "Placeholder image representing the proof stage",
  },
  {
    heading: "Conversion",
    paragraphs: [
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    ],
    image: "https://placehold.co/480x280/0a0a0a/f3f4f6?text=Conversion",
    imageAlt: "Placeholder image representing the conversion stage",
  },
];

export function ContentSystem() {
  return (
    <section className="pt-12 pb-4 px-6 lg:pt-16 lg:pb-4 lg:px-12 2xl:pt-20 2xl:pb-8 2xl:px-30 max-w-375 mx-auto w-full">
      <p
        className="text-sm uppercase tracking-widest text-left"
        style={{ color: "var(--text)" }}
      >
        How We Create It
      </p>
      <h2
        className="text-4xl! lg:text-5xl! font-black! uppercase tracking-tight leading-tight mt-3 text-left"
        style={{ color: "var(--text-h)" }}
      >
        Our Content <span className="text-accent-gradient">System</span>
      </h2>
      <p
        className="text-sm text-left max-w-160 mt-3"
        style={{ color: "var(--text)" }}
      >
        We don't create content just because it looks good on Instagram. We
        create content around what your next customer needs to see before
        choosing you.
      </p>

      <div className="flex flex-col mt-16 max-w-300 mx-auto w-full">
        {stages.map((stage, index) => {
          const reversed = index % 2 === 1;
          const isLast = index === stages.length - 1;

          return (
            <div
              key={stage.heading}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center pb-8 lg:pb-0 lg:h-[35vh] ${
                isLast ? "" : "mb-8 lg:mb-0 border-b"
              }`}
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className={`flex flex-col gap-4 justify-center text-left ${
                  reversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h3
                  className="text-2xl lg:text-3xl font-bold uppercase tracking-tight"
                  style={{ color: "var(--text-h)" }}
                >
                  {stage.heading}
                </h3>
                <div className="flex flex-col gap-3">
                  {stage.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm text-left"
                      style={{ color: "var(--text)" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div
                className={`relative overflow-hidden w-full max-w-80 h-40 lg:max-w-96 lg:h-56 mx-auto ${
                  reversed ? "lg:order-1" : "lg:order-2"
                }`}
                style={{
                  borderRadius: "15px",
                  border: "1px solid var(--border)",
                }}
              >
                <img
                  src={stage.image}
                  alt={stage.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
