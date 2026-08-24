import img1 from "../assets/business showcase images/P1000413.jpg";
import img2 from "../assets/business showcase images/P1073739.jpg";
import img3 from "../assets/business showcase images/Relay23-1.jpg";

export interface BusinessShowcaseItem {
  img: string;
}

export const businessShowcaseItems: BusinessShowcaseItem[] = [
  { img: img3 },
  { img: img2 },
  { img: img1 },
];
