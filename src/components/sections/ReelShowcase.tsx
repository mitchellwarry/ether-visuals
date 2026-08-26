import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Play } from "lucide-react";
import type { ReelShowcaseItem } from "../../data/reelShowcase";
import "swiper/css";

export interface ReelShowcaseProps {
  items: ReelShowcaseItem[];
}

function isBunnyEmbed(src: string): boolean {
  return src.includes("mediadelivery.net/embed");
}

function ReelSlide({ video }: ReelShowcaseItem) {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  if (isBunnyEmbed(video)) {
    return (
      <div
        className="relative overflow-hidden"
        style={{
          minHeight: "60vh",
          borderRadius: "15px",
          border: "1px solid var(--border)",
        }}
      >
        <iframe
          src={video}
          loading="lazy"
          style={{
            border: 0,
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden"
      style={{
        minHeight: "60vh",
        borderRadius: "15px",
        border: "1px solid var(--border)",
      }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        style={{ cursor: "pointer" }}
        loop
        playsInline
        onClick={handleVideoClick}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.35)", borderRadius: "15px" }}
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-sm"
            style={{ background: "var(--accent-gradient)" }}
          >
            <Play size={24} fill="white" className="text-white ml-1" />
          </div>
        </button>
      )}
    </div>
  );
}

export function ReelShowcase({ items }: ReelShowcaseProps) {
  return (
    <section className="pt-25 lg:pt-16 2xl:pt-20 w-full">
      <div className="laptop:hidden grid grid-cols-1 gap-4 px-6 lg:px-12">
        {items.map((item, i) => (
          <ReelSlide key={i} {...item} />
        ))}
      </div>

      <div className="hidden laptop:block">
        <Swiper slidesPerView={3} spaceBetween={15} allowTouchMove={false}>
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <ReelSlide {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
