import { ourWorkReels, testimonials } from "../data/index";
import { IndustryGrid } from "../components/sections/IndustryGrid";
import { Testimonials } from "../components/sections/Testimonials";
import { OurPartners } from "../components/sections/OurPartners";
import { partnersLogos } from "../data";
import { FAQ } from "../components/sections/FAQ's";
import { CTA } from "../components/sections/CTA";

export default function OurWork() {
  return (
    <>
      <OurPartners logos={partnersLogos} />
      <IndustryGrid projects={ourWorkReels} />
      <Testimonials items={testimonials} />
      <FAQ />
      <CTA />
    </>
  );
}
