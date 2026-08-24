import { Hero } from "../components/sections/Hero";
import { WhatWeDo } from "../components/sections/WhatWeDo";
import { industryReels } from "../data/index";
import { IndustryGrid } from "../components/sections/IndustryGrid";
import { OurPartners } from "../components/sections/OurPartners";
import { partnersLogos } from "../data";
import { FAQ } from "../components/sections/FAQ's";
import { CTA } from "../components/sections/CTA";
import { BusinessShowcase } from "../components/sections/BusinessShowcase";
import { ContentSystem } from "../components/sections/ContentSystem";
import { WaysToWorkWithUs } from "../components/sections/WaysToWorkWithUs";
import { businessShowcaseItems } from "../data/businessShowcase";
import { allCaseStudies } from "../data/index";
import ResultsTemplate from "../components/sections/ResultsTemplate";

export default function Home() {
  const caseStudies = allCaseStudies.map((useCase, index) => (
    <ResultsTemplate key={index} {...useCase} />
  ));
  return (
    <>
      <Hero />
      <OurPartners logos={partnersLogos} />
      <IndustryGrid projects={industryReels} />
      <BusinessShowcase items={businessShowcaseItems} />
      <WhatWeDo />
      <ContentSystem />
      <BusinessShowcase items={businessShowcaseItems} />
      {caseStudies}
      <WaysToWorkWithUs />
      <FAQ />
      <CTA />
    </>
  );
}
