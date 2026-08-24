import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface TestimonialsTemplate {
  testimonialPhoto: string;
  headline: string;
  body: string;
  companyLogo: string;
  companyRole: string;
  companyName: string;
  clientName: string;
}

export interface TestimonialProps {
  items: TestimonialsTemplate[];
}

export function Testimonials({ items }: TestimonialProps) {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    index < items.length - 1 ? setIndex(index + 1) : "";
  };

  const handleBackClick = () => {
    index > 0 ? setIndex(index - 1) : "";
  };

  return (
    <section className="py-8 px-6 lg:py-12 lg:px-12 2xl:py-30 2xl:px-30 max-w-480 mx-auto w-full">
      <div className="testimonial-wrapper grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-stretch">
        <div className="testimonial-image relative w-full overflow-hidden h-180 rounded-[20px]">
          <img
            src={items[index].testimonialPhoto}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="testimonial-info flex flex-col justify-between">
          <div className="info max-w-3xl">
            {" "}
            <div className="headline">
              <h3 className="text-3xl font-semibold text-white leading-snug uppercase text-left">
                "{items[index].headline}"
              </h3>
            </div>
            <div className="body mt-3">
              <p className="text-sm text-gray-300 leading-relaxed text-left whitespace-pre-line">
                {items[index].body}
              </p>
            </div>
            <div className="about-info flex items-center gap-6 mt-10">
              <div className="company-logo shrink-0">
                <img
                  src={items[index].companyLogo}
                  alt=""
                  className="h-20 w-auto object-contain"
                />
              </div>
              <div className="names flex-column">
                {" "}
                <div className="client-name text-lg text-left font-bold text-white uppercase">
                  {items[index].clientName}
                </div>
                <div className="company-role flex text-sm text-gray-400 gap-3 uppercase">
                  <p>{items[index].companyRole},</p>
                  <p>{items[index].companyName}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-arrows flex items-center gap-3 mt-8">
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <linearGradient id="accent-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff8c42" />
                  <stop offset="100%" stopColor="#e63910" />
                </linearGradient>
              </defs>
            </svg>
            <div
              className={`back p-px rounded-full ${index === 0 ? "opacity-30 cursor-default" : "cursor-pointer"}`}
              style={{ background: "var(--accent-gradient)" }}
              onClick={handleBackClick}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0a0a]">
                <ArrowLeft size={16} color="url(#accent-grad)" />
              </div>
            </div>
            <div
              className={`next p-px rounded-full ${index === items.length - 1 ? "opacity-30 cursor-default" : "cursor-pointer"}`}
              style={{ background: "var(--accent-gradient)" }}
              onClick={handleNextClick}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0a0a]">
                <ArrowRight size={16} color="url(#accent-grad)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
