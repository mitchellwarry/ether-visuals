import {
  brunchCartelData,
  brunchCartelReel,
  brunchCartelTestimonial,
} from "./BrunchCartel";
import {
  graciaBuildingDesignData,
  graciaPeopleDesignTestimonial,
} from "./GraciaBuildingDesign";
import {
  pristineTreePeopleData,
  pristineTreePeopleReel,
  pristineTreePeopleReel2,
  pristineTreePeopleTestimonial,
} from "./PristineTreePeople";
import { laVaurStudiosReel, laVaurStudiosReel2 } from "./LaVaurStudios";
import { logos } from "./logos";

export { industryReels } from "./Industries";
export { businessShowcaseItems } from "./businessShowcase";
export type { BusinessShowcaseItem } from "./businessShowcase";

export const allCaseStudies = [
  brunchCartelData,
  graciaBuildingDesignData,
  pristineTreePeopleData,
];

export const ourWorkReels = [
  laVaurStudiosReel,
  pristineTreePeopleReel,
  brunchCartelReel,
  laVaurStudiosReel2,
  pristineTreePeopleReel2,
];

export const testimonials = [
  brunchCartelTestimonial,
  pristineTreePeopleTestimonial,
  graciaPeopleDesignTestimonial,
];

export const partnersLogos = logos;
