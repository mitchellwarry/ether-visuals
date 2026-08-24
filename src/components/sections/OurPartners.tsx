import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export interface PartnersLogos {
  name: string;
  src: string;
  alt: string;
}

export interface PartnersProps {
  logos: PartnersLogos[];
}

export function OurPartners({ logos }: PartnersProps) {
  const loopedLogos =
    logos.length > 0 ? Array.from({ length: 3 }, () => logos).flat() : logos;

  return (
    <section className="relative py-2 px-16 lg:py-3 lg:px-32 2xl:py-4 2xl:px-60 w-full overflow-hidden">
      <div
        className="absolute -inset-25 blur-[100px]"
        style={{ background: "var(--accent-gradient)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: "#0a0a0a" }} />
      <div className="relative z-10 flex flex-col gap-8 max-w-480 mx-auto">
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--text)" }}
        >
          Trusted By Businesses That Build
        </p>
        <div className="min-w-0">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.15}
            spaceBetween={0}
            loop={true}
            speed={8000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {loopedLogos.map((p, i) => (
              <SwiperSlide key={`${p.name}-${i}`}>
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-20 w-auto object-contain transition-all"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
