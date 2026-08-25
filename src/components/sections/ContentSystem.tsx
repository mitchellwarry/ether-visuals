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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-16 max-w-300 mx-auto w-full py-15">
        <div className="flex flex-col gap-4 justify-center text-left">
          <h3
            className="text-2xl lg:text-3xl font-bold uppercase tracking-tight"
            style={{ color: "var(--text-h)" }}
          >
            Lorem Ipsum Dolor Sit Amet
          </h3>
          <p className="text-sm text-left" style={{ color: "var(--text)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div
          className="relative overflow-hidden w-full max-w-80 aspect-9/16 lg:max-w-none lg:aspect-video mx-auto"
          style={{
            borderRadius: "15px",
            border: "1px solid var(--border)",
          }}
        >
          <video
            className="w-full h-full object-cover"
            poster="https://placehold.co/960x540/0a0a0a/f3f4f6?text=Content+System"
            controls
            playsInline
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
}
