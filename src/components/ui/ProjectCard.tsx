import { useRef, useState } from "react";

export interface ProjectCardProps {
  id: string;
  title: string;
  eyebrow?: string[];
  videoSrc?: string;
  poster?: string;
  posterAlt?: string;
  href?: string;
  tags?: string[];
  playsInline?: boolean;
  lazyLoad?: boolean;
}

function isBunnyEmbed(src?: string): boolean {
  return typeof src === "string" && src.includes("mediadelivery.net/embed");
}

export function ProjectCard({
  title,
  videoSrc,
  poster,
  posterAlt,
  playsInline,
  lazyLoad,
}: ProjectCardProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(!lazyLoad);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoPlayRef = useRef(false);
  const embed = isBunnyEmbed(videoSrc);

  const handlePlayClick = () => {
    if (!shouldLoadVideo) {
      autoPlayRef.current = true;
      setShouldLoadVideo(true);
    } else {
      videoRef.current?.play();
    }
  };

  return (
    <article className="relative flex-1 min-w-0 overflow-hidden rounded-xl bg-black">
      <div
        className="relative w-full"
        style={{ paddingTop: "177.778%" }}
      >
        {embed ? (
          <iframe
            src={videoSrc}
            title={title}
            loading="lazy"
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: "50%",
              height: "100%",
              width: "auto",
              aspectRatio: "16 / 9",
              transform: "translateX(-50%)",
            }}
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
            allowFullScreen
          />
        ) : (
          <>
            {/* placeholder image */}
            {poster && (
              <img
                src={poster}
                alt={posterAlt ?? ""}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* video */}
            {shouldLoadVideo && videoSrc && (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                playsInline={playsInline}
                onCanPlay={() => {
                  if (autoPlayRef.current) {
                    autoPlayRef.current = false;
                    videoRef.current?.play();
                  }
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}

            {/* play/pause overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={
                isPlaying ? () => videoRef.current?.pause() : handlePlayClick
              }
            >
              {!isPlaying && (
                <div className="bg-white/15 backdrop-blur-sm rounded-full p-4">
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
              )}
            </div>
          </>
        )}

        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

        {/* text */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
          <h6 className="text-[1.3rem] font-bold text-white leading-[1.4] tracking-[0.01em] m-0 uppercase text-left">
            {title}
          </h6>
        </div>
      </div>
    </article>
  );
}
