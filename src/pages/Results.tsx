import { allCaseStudies, partnersLogos, testimonials } from "../data/index";
import ResultsTemplate from "../components/sections/ResultsTemplate";
import { OurPartners } from "../components/sections/OurPartners";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ's";
import { CTA } from "../components/sections/CTA";

export default function Results() {
  const caseStudies = allCaseStudies.map((useCase, index) => (
    <ResultsTemplate key={index} {...useCase} />
  ));

  return (
    <article>
      <OurPartners logos={partnersLogos} />
      {caseStudies}
      <Testimonials items={testimonials} />
      <FAQ />
      <CTA />
    </article>
  );
}
