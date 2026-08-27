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
import { ReelShowcase } from "../components/sections/ReelShowcase";
import { reelShowcaseItems } from "../data/reelShowcase";
import { allCaseStudies } from "../data/index";
import ResultsTemplate from "../components/sections/ResultsTemplate";
import { HowWereDifferent } from "../components/sections/HowWe'reDifferent";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="our-work">
        <IndustryGrid projects={industryReels} />
      </div>
      <OurPartners logos={partnersLogos} />
      <WhatWeDo />
      <ContentSystem />
      <BusinessShowcase items={businessShowcaseItems} />
      <ResultsTemplate items={allCaseStudies} />
      <HowWereDifferent />
      <BusinessShowcase items={businessShowcaseItems} />
      <WaysToWorkWithUs />
      <FAQ />
      <ReelShowcase items={reelShowcaseItems} />
      <CTA />
    </>
  );
}
