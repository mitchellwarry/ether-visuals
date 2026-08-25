import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { faqs, type FAQItem } from "../../data/FAQs";

const gradientStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, #ff8c42, #e63910)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

function HighlightChevron() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9l6 6 6-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQ({ items = faqs }: { items?: FAQItem[] }) {
  return (
    <section className="pt-8 pb-40 px-6 lg:py-12 lg:px-12 2xl:py-30 2xl:px-30 max-w-480 mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
        <div className="md:sticky md:top-24">
          <h2
            className="text-white uppercase text-left"
            style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1.2 }}
          >
            <span style={gradientStyle}>Frequently Asked </span>
            Questions
          </h2>
          <p className="mt-6! text-sm text-gray-400 text-left leading-relaxed">
            Everything you need to know before we get started. Can't find what
            you're looking for? Reach out directly and we'll get back to you.
          </p>
        </div>

        <div>
          {items.map((faq, i) => (
            <Accordion
              key={i}
              disableGutters
              elevation={0}
              sx={{
                background: "transparent",
                borderBottom: "2px solid rgba(255,255,255,0.1)",
                "&:before": { display: "none" },
                "&.Mui-expanded": { margin: 0 },
              }}
            >
              <AccordionSummary
                expandIcon={<HighlightChevron />}
                sx={{
                  padding: "0",
                  minHeight: "64px",
                  "& .MuiAccordionSummary-content": { margin: "24px 0" },
                }}
              >
                <span className="text-base font-medium text-white">
                  {faq.question}
                </span>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 0 24px 0" }}>
                <p className="text-sm text-gray-400 leading-relaxed text-left">
                  {faq.answer}
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
