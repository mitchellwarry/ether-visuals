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
      <div id="home">
        <Hero />
      </div>
      <OurPartners logos={partnersLogos} />
      <div id="our-work">
        <IndustryGrid projects={industryReels} />
      </div>
      <BusinessShowcase items={businessShowcaseItems} />
      <WhatWeDo />
      <ContentSystem />
      <BusinessShowcase items={businessShowcaseItems} />
      <div id="results">
        <div className="px-6 lg:px-12 2xl:px-30 max-w-480 mx-auto w-full pt-8 lg:pt-12 2xl:pt-16">
          <p
            className="text-sm uppercase tracking-widest text-left"
            style={{ color: "var(--text)" }}
          >
            Lorem Ipsum
          </p>
          <h2
            className="text-4xl! lg:text-5xl! font-black! uppercase tracking-tight leading-tight mt-3 text-left"
            style={{ color: "var(--text-h)" }}
          >
            Lorem Ipsum Dolor{" "}
            <span className="text-accent-gradient">Sit Amet</span>
          </h2>
        </div>
        {caseStudies}
      </div>
      <WaysToWorkWithUs />
      <FAQ />
      <CTA />
    </>
  );
}
