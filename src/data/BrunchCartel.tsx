import { TrendingUp, Eye, BarChart2 } from "lucide-react";
import type { ResultsTemplate } from "../components/sections/ResultsTemplate";
import type { ProjectCardProps } from "../components/ui/ProjectCard";
import type { TestimonialsTemplate } from "../components/sections/Testimonials";

export const brunchCartelData: ResultsTemplate = {
  heading: (
    <>
      From <span className="text-accent-gradient"> Local </span> Food Trailer to
      a Recognised <span className="text-accent-gradient">Illawarra Brand</span>
    </>
  ),
  subheading:
    "We partnered with this passionate husband-and-wife team to turn their day-to-day hustle into a compelling digital narrative. See how strategic videography and consistent short-form content transformed a local food trailer into a recognised Illawarra brand.",
  bannerImageSrc: "src/assets/background images/P1153922.jpg",
  bannerImageAlt: "",
  descriptors: ["Short-Form Content", "Brand Positioning", "Local Engagement"],
  caseStudyBody:
    "Our collaboration began as a focused six-month retainer aimed at capturing the true energy of Franco and Rachel’s portable brunch trailer. Rather than just showcasing their bold sandwiches and creative drinks, we built a dynamic brand identity around the couple themselves. By using authentic, short-form storytelling, we translated their daily operations into a highly engaging online presence that reflected the unique culture and personality behind the business.\n\n This targeted digital visibility quickly translated into massive operational growth. By generating over 200,000 organic video views, we helped scale their Instagram audience from 400 to 2,200 highly engaged local followers—without any ad spend. The resulting surge in foot traffic allowed Brunch Cartel to expand from a four-day operation to a full seven-day trading schedule, ultimately requiring four additional staff members to keep up with the soaring regional demand.\n\n Beyond driving viral moments and brand awareness, we strategically funneled this new audience toward their online ordering platform, turning social engagement into measurable, real-world transactions. Supported by their ongoing community giveaways and local charity initiatives, this digital momentum has firmly cemented Brunch Cartel as a thriving, family-run staple within the Illawarra food scene.",
  caseStudyVideo: "./src/assets/reels/Copy of Iced Range.mp4",
  statsHeader: "Brand Report (NOV 2024 - TODAY)",
  stats: [
    {
      header: "EXPLOSIVE FOLLOWER GROWTH",
      number: "1800+",
      descriptor: "New Instagram followers gained organically.",
      icon: <TrendingUp size={32} />,
    },
    {
      header: "RAPID BRAND AWARENESS",
      number: "200,000+",
      descriptor: "Organic video views generated across social platforms.",
      icon: <Eye size={32} />,
    },
    {
      header: "METEORIC OPERATIONAL SCALE UP",
      number: "+75%",
      descriptor:
        "Transitioned from a 4-day schedule to full 7-day operations due to increased demand.",
      icon: <BarChart2 size={32} />,
    },
    {
      header: "TEAM EXPANSION",
      number: "4+",
      descriptor:
        "New staff members added to the team to manage increased demand during peak trading periods alongside continual business growth.",
    },
    {
      header: "DIGITAL CONVERSION",
      number: "Seamless Ordering",
      descriptor:
        "Direct website integration turned social engagement into real-time pickup transactions.",
    },
  ],
  outcome: [
    {
      header: "The Brand Became a Local Staple",
      body: "What started as a local setup has become a go-to destination in the Illawarra food scene.",
    },
    {
      header: "Growth That Scaled Operations",
      body: "Increased demand drove a shift to 7-day trading and the hiring of four new staff.",
    },
    {
      header: "Community-Driven Loyalty",
      body: "Gave back to its community through local events, giveaways, and charity catering.",
    },
    {
      header: "Turning Views into Transactions",
      body: "Successfully converted engagement into consistent daily revenue.",
    },
  ],

  testimonial:
    "Working with Ether Visuals over the last 6 months has honestly been one of the best decisions we’ve made for Brunch Cartel. We wanted content that actually reflected our brand's energy, standards, and culture, and Dan absolutely nailed it. \n\nThe whole process was easy, professional, and genuine from day one. Since working together, our social presence and customer engagement have stepped up massively. \n\nThe content has helped us stand out locally, build stronger trust, and create a much more premium feel. We’ve definitely seen a return from it—not just financially, but in the way people view and talk about our business.",
  clientName: "Franco & Rachel",
  companyName: "Brunch Cartel",
  companyRole: "Owner & Operator",
  companyHeadshot: "src/assets/testimonial headshots/alex-circle.png",
};

export const brunchCartelReel: ProjectCardProps = {
  id: "brunch-cartel",
  title: "Iced Range",
  eyebrow: ["Brand Story", "Social Media Strategy", "Short-Form Content"],
  videoSrc: "./src/assets/reels/Copy of Iced Range.mp4",
  poster: "",
  playsInline: true,
  posterAlt: "",
};

export const brunchCartelTestimonial: TestimonialsTemplate = {
  testimonialPhoto: "src/assets/testimonial photos/P1153951.jpg",
  headline: "One of the best decisions we’ve made for our brand.",
  body: "Working with Ether Visuals over the last 6 months has honestly been one of the best decisions we’ve made for Brunch Cartel. We wanted content that actually reflected our brand's energy, standards, and culture, and Dan absolutely nailed it. \n\nThe whole process was easy, professional, and genuine from day one. Since working together, our social presence and customer engagement have stepped up massively. \n\nThe content has helped us stand out locally, build stronger trust, and create a much more premium feel. We’ve definitely seen a return from it—not just financially, but in the way people view and talk about our business.",
  companyLogo: "",
  clientName: "Franco & Rachel",
  companyRole: "Owner",
  companyName: "Brunch Cartel",
};
