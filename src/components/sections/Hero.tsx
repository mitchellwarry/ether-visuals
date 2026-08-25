import { useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useBookingForm } from "../../context/BookingFormContext";

export function Hero() {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openForm } = useBookingForm();

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-var(--nav-height,90px))] py-8 px-6 lg:py-10 lg:px-12 2xl:py-16 2xl:px-30 overflow-hidden">
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
        <div
          className="relative overflow-hidden w-full max-w-2xl aspect-video"
          style={{
            borderRadius: "15px",
            border: "1px solid var(--border)",
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 hover:bg-black/40"
            >
              <span
                className="flex items-center justify-center w-20 h-20 rounded-full"
                style={{ background: "var(--accent-gradient)" }}
              >
                <Play size={32} className="text-white fill-white ml-1" />
              </span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div
            className="p-[1.5px] rounded-sm inline-block"
            style={{ background: "var(--accent-gradient)" }}
          >
            <button
              onClick={openForm}
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
