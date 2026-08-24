import { Swiper, SwiperSlide } from "swiper/react";
import type { BusinessShowcaseItem } from "../../data/businessShowcase";
import "swiper/css";

export interface BusinessShowcaseProps {
  items: BusinessShowcaseItem[];
}

export function BusinessShowcase({ items }: BusinessShowcaseProps) {
  return (
    <section className="py-12 lg:py-16 2xl:py-20 w-full">
      <Swiper
        slidesPerView={1.15}
        spaceBetween={15}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
            allowTouchMove: false,
          },
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative overflow-hidden"
              style={{
                minHeight: "60vh",
                borderRadius: "15px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid var(--border)",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
