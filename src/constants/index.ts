import img1 from "../../public/hero-slides/slide-1.jpg";
import img2 from "../../public/hero-slides/slide-2.jpg";
import img3 from "../../public/hero-slides/slide-3.jpg";
import img4 from "../../public/hero-slides/slide-4.jpg";
import img5 from "../../public/hero-slides/slide-5.jpg";
import img6 from "../../public/hero-slides/slide-6.jpg";
import img7 from "../../public/hero-slides/slide-7.jpg";
import img8 from "../../public/hero-slides/slide-8.jpg";
import img9 from "../../public/hero-slides/slide-9.jpg";
import img10 from "../../public/hero-slides/slide-10.jpg";
import img11 from "../../public/hero-slides/slide-11.jpg";
import img12 from "../../public/hero-slides/slide-12.jpg";

export const slides1 = [img5, img6, img1, img2, img3, img4];
export const slides2 = [img6, img1, img2, img3, img4, img5];
export const slides3 = [img1, img2, img3, img4, img5, img6];

export const slides = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export const navigation = [
  { id: 1, url: "/", name: "home", bgfill: false },
  { id: 2, url: "/portfolio", name: "portfolio", bgfill: false },
  { id: 3, url: "/our-process", name: "our process", bgfill: false },
  { id: 4, url: "/about", name: "about", bgfill: false },
  { id: 5, url: "/contact", name: "contact", bgfill: true },
] as const;
