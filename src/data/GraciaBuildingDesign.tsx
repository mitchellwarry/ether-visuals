import { TrendingUp, Eye, Zap } from "lucide-react";
import type { ResultsTemplate } from "../components/sections/ResultsTemplate";
import type { TestimonialsTemplate } from "../components/sections/Testimonials";
import type { PartnersLogos } from "../components/sections/OurPartners";

export const graciaBuildingDesignData: ResultsTemplate = {
  heading: (
    <>
      Building <span className="text-accent-gradient">Industry Authority </span>
      and Driving Real{" "}
      <span className="text-accent-gradient">Operational Scale</span>
    </>
  ),
  subheading:
    "We partnered with this visionary designer to build a luxury architectural brand from the ground up. See how cinematic videography and strategic storytelling turned a new studio into a recognized name in the South Coast design scene.",
  bannerImageSrc: "src/assets/background images/P1078197.jpg",
  bannerImageAlt: "",
  descriptors: [
    "Cinematic Videography",
    "Content Strategy",
    "Organic Social Growth",
  ],
  caseStudyBody:
    "Starting in July 2025 with no online presence, Maria faced the challenge of launching Gracia Building Design in a highly competitive architectural market. Our goal was to establish a premium digital identity that reflected the sophistication of her work while building immediate trust within the Illawarra and South Coast regions. By focusing on her expertise in luxury residential design, we positioned the brand as a professional and approachable leader in the local construction industry.\n\n We executed this vision through a blend of cinematic video production, educational content, and 'talking-head' segments that highlighted Maria’s deep industry knowledge. This strategy emphasized locality and professionalism, specifically targeting high-end developments such as duplexes and modern townhouses. By capturing her design process against the backdrop of the South Coast, we created a consistent narrative that bridged the gap between a new startup and a trusted, high-performance design firm.\n\n This organic approach yielded substantial growth, scaling the brand from zero to over 1,100 followers and reaching more than 150,000 video views without any ad spend. Beyond the metrics, the campaign’s true success lies in its high-end positioning, which has already generated direct inquiries from developers and construction firms across NSW. In just 12 months, Gracia Building Design has successfully established itself as a premier luxury architectural studio with a commanding and recognizable online presence.",
  statsHeader: "Brand Report (NOV 2024 - TODAY)",
  stats: [
    {
      header: "EXPLOSIVE REACH GROWTH",
      number: "20,000+",
      descriptor: "Accounts reach organically in the target region.",
      icon: <TrendingUp size={32} />,
    },
    {
      header: "DIGITAL ENGAGEMENT",
      number: "150,000+",
      descriptor: "Video views across the content library.",
      icon: <Eye size={32} />,
    },
    {
      header: "VIRAL MOMENT",
      number: "1100+",
      descriptor:
        "Followers gained from zero, establishing a loyal local audience.",
      icon: <Zap size={32} />,
    },
    {
      header: "PLATFORM DOMINANCE",
      number: "3000+",
      descriptor: "Profile visits driven by high-quality content.",
    },
    {
      header: "BUSINESS LIFT",
      number: "160+",
      descriptor: "Website visits generated directly via Instagram traffic.",
    },
  ],
  outcome: [
    {
      header: "The Brand Got Louder",
      body: "Transformed from zero online presence into a premium, recognisable digital identity for a new business.",
    },
    {
      header: "From Launch to Established",
      body: "Strategically positioned the brand to compete immediately in the luxury residential and development sectors.",
    },
    {
      header: "Content That Builds Trust",
      body: "Used cinematic and personality-driven storytelling to humanize architectural expertise, building immediate rapport with prospects.",
    },
    {
      header: "It Created Real Momentum",
      body: "Content now serves as a high-intent lead engine, directly attracting developers and construction companies across NSW.",
    },
  ],

  testimonial:
    "Working with you feels like having a conversation with a friend on camera. I feel supported, encouraged, and genuinely understood. It’s clear that you truly care about my business, which makes the whole experience comfortable and enjoyable. \n\nCreating content on my own was stressful; spending a couple of hours with the team and leaving the rest in their hands is absolutely worth the investment. It elevates the professionalism of my business and ensures I have consistent, scheduled content ready.",
  clientName: "Maria Camila Laverde",
  companyName: "Gracia Building Design",
  companyRole: "Owner & Operator",
  companyHeadshot: "src/assets/testimonial headshots/alex-circle.png",
};

export const graciaPeopleDesignTestimonial: TestimonialsTemplate = {
  testimonialPhoto: "src/assets/testimonial photos/P1078119.jpg",
  headline: "Like having a conversation with a friend on camera.",
  body: "I wanted a team that truly understood my business and made me feel confident on recording day. Working with them delivers exactly that—it feels like having a conversation with a friend on camera. They genuinely care, which makes the whole experience comfortable and enjoyable. \n\nPartnering with them right from the launch of my business has played a key role in shaping our online presence. We've built how the brand shows up together, and I’ve seen a clear increase in market recognition and audience engagement. Spending just a couple of hours with the team and leaving the rest in their expert hands is a massive return on investment. \n\nIt completely takes the stress out of content creation, elevates our professionalism, and ensures we always have consistent, high-quality material ready to go.",
  companyLogo: "src/assets/logos/Gracia Logo_NB Primary Color Bright  .png",
  clientName: "Maria Camila Laverde",
  companyRole: "Owner",
  companyName: "Gracia People Design",
};

export const graciaPeopleDesignLogo: PartnersLogos = {
  name: "Gracia Building Design",
  src: "src/assets/logos/Gracia Logo_NB Primary Color Bright  .png",
  alt: "Gracia Building Design logo",
};
