"use client";

import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#contact-section-p-1", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#contact-section-text-container",
        // markers: true,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    gsap.to("#contact-section-h2", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#contact-section-text-container",
        // markers: true,
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    gsap.to("#contact-section-p-2", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#contact-section-text-container",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#essence-section");
    };
  }, []);

  return (
    <div className="px-8 py-16 w-screen min-h-[100vh] text-center" id="contact">
      <div id="contact-section-text-container">
        <p
          id="contact-section-p-1"
          className="opacity-0 font-text text-primary-medium text-sm md:text-base text-center tracking-[.5em]"
        >
          CONTATO
        </p>
        <h2
          id="contact-section-h2"
          className="opacity-0 mt-4 mb-6 font-title font-extrabold text-primary-deep text-2xl md:text-4xl text-center"
        >
          Vem falar com a gente!
        </h2>
        <p
          className="opacity-0 text-neutral-700 text-sm"
          id="contact-section-p-2"
        >
          Estamos por aqui! Vai ser demais ter você com a gente.
        </p>
      </div>
    </div>
  );
}
