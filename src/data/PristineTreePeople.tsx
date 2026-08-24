import { TrendingUp, Users, Share2 } from "lucide-react";
import type { ResultsTemplate } from "../components/sections/ResultsTemplate";
import type { ProjectCardProps } from "../components/ui/ProjectCard";
import type { TestimonialsTemplate } from "../components/sections/Testimonials";
import type { PartnersLogos } from "../components/sections/OurPartners";

export const pristineTreePeopleData: ResultsTemplate = {
  heading: (
    <>
      Scaling a <span className="text-accent-gradient">Two-Man</span>Tree
      Service Into a <span className="text-accent-gradient">Three-Month</span>{" "}
      Waitlist
    </>
  ),

  subheading:
    "We partnered with this growing tree service to overcome inconsistent marketing and build a commanding, personality-driven digital presence. See how strategic storytelling transformed a small two-man operation into an industry-recognised brand across the Southern Highlands and beyond.",
  bannerImageSrc: "src/assets/background images/ptpnov-21.jpg",
  bannerImageAlt: "",
  descriptors: ["Short-Form Videos", "Content Strategy", "Brand Positioning"],
  caseStudyBody:
    "When Pristine Tree People approached Ether Visuals in late 2023, they were struggling with unreliable marketing that failed to capture their true vision. Our immediate goal was to replace that inconsistency with a recognizable, authoritative identity centered on their promise of keeping properties pristine. By utilizing strategic videography and highlighting the team's natural humor and authenticity, we turned everyday arboriculture into highly engaging, relatable, and shareable content. \n\n This personality-led approach sparked incredible organic growth, scaling their Instagram presence from 200 to nearly 2,400 followers and driving over 10,000 profile views in just a 90-day period. We also intentionally targeted an audience of fellow tradespeople and arborists, elevating their industry authority and opening doors for future brand partnerships. This newfound digital visibility directly supported their expansion from private residential work to securing large-scale council, school, and high-end luxury property contracts. \n\n Most importantly, this high-performing content engine translated into massive operational scale. Growing from a small setup into two fully operational crews, Pristine Tree People is now consistently booked out more than three months in advance. Without relying on paid lead-generation ads, their revitalized digital footprint now serves as a reliable driver of brand trust, inbound inquiries, and sustained business growth.",
  caseStudyVideo: "./src/assets/reels/Copy of Crane Job Breakdown.mp4",
  statsHeader: "Brand Report (NOV 2024 - TODAY)",
  stats: [
    {
      header: "LOCAL MARKET PENETRATION",
      number: "20,000+",
      descriptor:
        "Targeted accounts reached organically across the Illawarra and South Coast regions.",
      icon: <TrendingUp size={32} />,
    },
    {
      header: "CINEMATIC ENGAGEMENT",
      number: "150,000+",
      descriptor:
        "PVideo views across a premium, educational content library that built immediate trust.",
      icon: <Users size={32} />,
    },
    {
      header: "ORGANIC AUDIENCE SCALE",
      number: "1,100+",
      descriptor:
        "Followers gained from absolute zero, driving direct B2B inquiries from developers and builders.",
      icon: <Share2 size={32} />,
    },
  ],
  outcome: [
    {
      header: "The Brand Got Louder",
      body: "Transformed from a struggling setup into a structured, high-performing content engine.",
    },
    {
      header: "From Local to Industry Known",
      body: "Intentionally built a following of local clients and trade professionals, positioning the brand for long-term partnerships.",
    },
    {
      header: "Content That Builds Trust",
      body: "Personality-driven storytelling allowed the team's natural character to shine, turning viewers into customers.",
    },
    {
      header: "It Created Real Momentum",
      body: "Content now directly contributes to lead flow, supporting business expansion into council and luxury commercial sectors.",
    },
  ],

  testimonial:
    "Working with the Ether Visual lads has been a fantastic experience from start to finish. We enjoy having them on site with us collecting footage from all angles. \n\nWe wanted content that genuinely reflected the quality and atmosphere of our business, and they made the entire process feel easy, professional and very natural. \n\nThe finished content has elevated our brand presence, provided us with high-quality material we consistently use across our marketing, and has absolutely felt like a worthwhile investment.",
  clientName: "Alex Walker",
  companyName: "Pristine Tree People",
  companyRole: "Owner & Operator",
  companyHeadshot: "src/assets/testimonial headshots/alex-circle.png",
};

export const pristineTreePeopleReel: ProjectCardProps = {
  id: "pristine-tree-people",
  title: "Crane Job Breakdown",
  eyebrow: ["Short Form Content", "Social Media Strategy"],
  videoSrc: "./src/assets/reels/Copy of Crane Job Breakdown.mp4",
  poster: "",
  playsInline: true,
  posterAlt: "",
};

export const pristineTreePeopleReel2: ProjectCardProps = {
  id: "pristine-tree-people-2",
  title: "The Longest Day",
  eyebrow: ["Short Form Content", "Social Media Strategy", "Brand Story"],
  videoSrc: "./src/assets/reels/Copy of The Longest Day.mp4",
  poster: "",
  playsInline: true,
  posterAlt: "",
};

export const pristineTreePeopleTestimonial: TestimonialsTemplate = {
  testimonialPhoto: "src/assets/testimonial photos/P1195438.jpg",
  headline: "A fantastic experience from start to finish",
  body: "Working with the Ether Visual lads has been a fantastic experience from start to finish. We enjoy having them on site with us collecting footage from all angles. \n\nWe wanted content that genuinely reflected the quality and atmosphere of our business, and they made the entire process feel easy, professional and very natural. \n\nThe finished content has elevated our brand presence, provided us with high-quality material we consistently use across our marketing, and has absolutely felt like a worthwhile investment.",
  companyLogo: "/src/assets/logos/pristine-logo-white.png",
  clientName: "Alex Walker",
  companyRole: "Owner",
  companyName: "Pristine Tree People",
};

export const pristineTreePeopleLogo: PartnersLogos = {
  name: "Pristine Tree People",
  src: "src/assets/logos/pristine-logo-white.png",
  alt: "Pristine Tree People logo",
};
