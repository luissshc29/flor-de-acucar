// "use client";

import Contact from "./sections/Contact";
import Cookies from "./sections/Cookies";
import Essence from "./sections/Essence";
import Welcome from "./sections/Welcome";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { useLayoutEffect } from "react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  // useLayoutEffect(() => {
  //   ScrollSmoother.create({
  //     smooth: 2,
  //     effects: true,
  //     normalizeScroll: true,
  //   });
  // }, []);

  return (
    // <div className="relative animate-show-up" id='smooth-wrapper'>
    //   <div className="relative" id='smooth-content'>
    <div className="relative animate-show-up">
      <div className="relative">
        <Welcome />
        <Essence />
        <Cookies />
        <Contact />
      </div>
    </div>
  );
}
