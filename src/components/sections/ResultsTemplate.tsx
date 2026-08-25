import React, { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, Play } from "lucide-react";

export interface ResultsTemplate {
  heading: React.ReactNode;
  subheading: string;
  bannerImageSrc: string;
  bannerImageAlt: string;
  descriptors: string[];
  caseStudyBody: string;
  caseStudyVideo?: string;
  statsHeader: string;
  outcome: {
    header: string;
    body: string;
  }[];
  stats: {
    header: string;
    number: string;
    descriptor: string;
    icon?: React.ReactNode;
  }[];
  testimonial: string;
  clientName: string;
  companyName: string;
  companyHeadshot: string;
  companyRole: string;
}

function parseStatNumber(value: string) {
  const match = value.match(/^([^0-9]*)(\d[\d,]*)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const num = parseInt(numStr.replace(/,/g, ""), 10);
  if (isNaN(num)) return null;
  return { prefix, num, suffix, hasCommas: numStr.includes(",") };
}

function CountUpNumber({
  value,
  trigger,
}: {
  value: string;
  trigger: boolean;
}) {
  const parsed = useMemo(() => parseStatNumber(value), [value]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!trigger || !parsed) return;
    const target = parsed.num;
    const duration = 1500;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [trigger, parsed]);

  if (!parsed) return <>{value}</>;
  const display = parsed.hasCommas
    ? current.toLocaleString("en-US")
    : String(current);
  return (
    <>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </>
  );
}

export default function ResultsTemplate(props: ResultsTemplate) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [statsRevealed, setStatsRevealed] = useState(false);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    videoRef.current?.play();
    setPlaying(true);
  }

  function handleVideoClick() {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-15 px-6 lg:py-12 lg:px-12 2xl:py-30 2xl:px-30 max-w-480 mx-auto w-full">
      <div className="border border-white/10 rounded-xl overflow-hidden bg-linear-to-b from-white/8 to-white/3">
        {/* Banner */}
        <div
          ref={bannerRef}
          className="relative overflow-hidden"
          style={{
            clipPath: revealed ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <img
            className="bannerImage w-full h-175 object-cover"
            src={props.bannerImageSrc}
            alt={props.bannerImageAlt}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {props.descriptors.map((descriptor, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-white/20 text-black text-xs uppercase tracking-wide rounded-full bg-(--accent-highlight)/50 backdrop-blur-xl"
                >
                  {descriptor}
                </span>
              ))}
            </div>
            <div>
              <h2 className="text-2xl! lg:text-5xl! font-bold! text-white uppercase tracking-tight m-0 text-left lg:max-w-[60%]">
                {props.heading}
              </h2>
              <p className="text-sm lg:text-m text-white/60 mb-3 text-left lg:max-w-[60%]">
                {props.subheading}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="px-8 lg:px-16 py-12 lg:py-16 flex flex-col gap-12">
          {/* Case study highlight row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col gap-6 justify-center order-2 lg:order-0">
              <div className="text-sm leading-relaxed text-(--text) space-y-3 text-left whitespace-pre-line">
                {props.caseStudyBody}
              </div>
            </div>
            <div className="relative order-1 lg:order-0">
              {props.caseStudyVideo ? (
                <>
                  <video
                    ref={videoRef}
                    src={props.caseStudyVideo}
                    className="w-full object-cover rounded-xl max-[420px]:h-105"
                    style={{ maxHeight: "500px", cursor: "pointer" }}
                    loop
                    playsInline
                    onClick={handleVideoClick}
                    onEnded={() => setPlaying(false)}
                  />
                  {!playing && (
                    <button
                      onClick={handlePlay}
                      className="absolute inset-0 flex items-center justify-center rounded-xl"
                      style={{ background: "rgba(0,0,0,0.35)" }}
                    >
                      <div
                        className="flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-sm"
                        style={{ background: "var(--accent-gradient)" }}
                      >
                        <Play
                          size={24}
                          fill="white"
                          className="text-white ml-1"
                        />
                      </div>
                    </button>
                  )}
                </>
              ) : null}
            </div>
          </div>

          {/* Stats tagline bar */}
          <div className="flex items-center justify-between border-t border-b border-(--border) py-4">
            <p className="text-xs lg:text-s uppercase tracking-widest text-(--text) m-0 text-left">
              {props.statsHeader}
            </p>
            <Calendar size={32} className="text-(--text) shrink-0" />
          </div>

          {/* Hidden SVG gradient definition for icon stroke */}
          <svg
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="results-icon-gradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff8c42" />
                <stop offset="100%" stopColor="#e63910" />
              </linearGradient>
            </defs>
          </svg>

          {/* Stats grid — each card fades in individually */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {props.stats.slice(0, 3).map((stat) => (
              <div
                key={stat.header}
                className="flex flex-col justify-between border border-(--border) rounded-2xl p-6 bg-(--code-bg) text-left h-62.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-s uppercase tracking-widest text-(--accent-highlight) m-0">
                    {stat.header}
                  </p>
                  {stat.icon && (
                    <span className="shrink-0">
                      {React.isValidElement(stat.icon)
                        ? React.cloneElement(
                            stat.icon as React.ReactElement<{
                              stroke?: string;
                            }>,
                            {
                              stroke: "url(#results-icon-gradient)",
                            },
                          )
                        : stat.icon}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-4xl lg:text-5xl font-bold m-0 tracking-tight text-accent-gradient">
                    <CountUpNumber
                      value={stat.number}
                      trigger={statsRevealed}
                    />
                  </p>
                  <p className="text-xs lg:text-sm text-(--text) m-0">
                    {stat.descriptor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-(--border) m-0" />

          {/* Outcome highlights — each item fades in individually */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {props.outcome.map((outcomes) => (
              <div key={outcomes.header} className="flex flex-col gap-3">
                <p className="font-semibold text-(--accent-highlight) m-0 text-left">
                  {outcomes.header}
                </p>
                <p className="text-sm text-(--text) m-0 text-left">
                  {outcomes.body}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}

          <hr className="border-(--border) m-0" />

          {/* Testimonial */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 w-full border-l-accent-gradient pl-8">
            <p className="text-l lg:text-l text-white leading-relaxed m-0 text-left lg:max-w-[55%] whitespace-pre-line">
              &ldquo;{props.testimonial}&rdquo;
            </p>
            {/* Testimonial Titles */}
            <div className="about-info flex items-center gap-6">
              <div className="company-logo shrink-0">
                <img
                  src={props.companyHeadshot}
                  alt=""
                  className="h-20 w-auto object-contain"
                />
              </div>
              <div className="names flex flex-col">
                {" "}
                <div className="client-name text-sm lg:text-lg text-left font-bold text-white uppercase pb-2">
                  {props.clientName}
                </div>
                <div className="company-role text-xs lg:text-sm flex flex-col lg:flex-row text-gray-400 uppercase gap-1 text-left">
                  <p>{props.companyRole},</p>
                  <p>{props.companyName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
