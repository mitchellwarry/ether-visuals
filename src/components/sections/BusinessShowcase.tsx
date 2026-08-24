import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { BusinessShowcaseItem } from "../../data/businessShowcase";
import "swiper/css";

export interface BusinessShowcaseProps {
  items: BusinessShowcaseItem[];
}

export function BusinessShowcase({ items }: BusinessShowcaseProps) {
  const loopedItems =
    items.length > 0 ? Array.from({ length: 3 }, () => items).flat() : items;

  return (
    <section className="py-12 lg:py-16 2xl:py-20 w-full">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={10000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        allowTouchMove={false}
        slidesPerView={1.15}
        spaceBetween={15}
        breakpoints={{
          1440: {
            slidesPerView: 3,
            spaceBetween: 15,
            loop: false,
            autoplay: false,
            allowTouchMove: false,
          },
        }}
      >
        {loopedItems.map((item, i) => (
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
