"use client";

import React, { useLayoutEffect } from "react";
import { BiSolidCookie } from "react-icons/bi";
import { cookies } from "../assets/cookies";
import CookieCard from "../components/common/CookieCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Cookies() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    cookies.forEach((c) => {
      gsap.to(`#cookie-card-${c.id}`, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: `#cookie-card-${c.id}`,
          // markers: true,
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    });

    gsap.to("#cookies-section-p-1", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#cookies-section-text-container",
        // markers: true,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    gsap.to("#cookies-section-h2", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#cookies-section-text-container",
        // markers: true,
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    gsap.to("#cookies-section-p-2", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#cookies-section-text-container",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.to("#cookies-section-svg", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#cookies-section-text-container",
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
    <div className="p-8 w-screen min-h-[100dvh]" id="cookies">
      <div className="flex flex-col justify-center items-center gap-12 mx-auto">
        <div
          id="cookies-section-text-container"
          className="flex flex-col justify-center items-center gap-2 mx-auto w-4/5 md:w-3/5 text-center"
        >
          <p
            id="cookies-section-p-1"
            className="opacity-0 font-text text-primary-medium text-sm md:text-base tracking-[.5em]"
          >
            NOSSOS COOKIES
          </p>
          <h2
            id="cookies-section-h2"
            className="opacity-0 mt-4 mb-6 font-title font-extrabold text-primary-deep text-2xl md:text-4xl"
          >
            Nossos cookies espalham alegria a cada mordida!
          </h2>

          <p
            className="opacity-0 text-neutral-700 text-sm"
            id="cookies-section-p-2"
          >
            Feitos à mão, com ingredientes selecionados, muuuito recheio e
            aquele toque de carinho. Uma explosão de sabor pra se lambuzar sem
            culpa!
          </p>
        </div>

        <BiSolidCookie
          id="cookies-section-svg"
          className="opacity-0 text-primary-dark text-6xl"
        />

        <div className="flex flex-col justify-center items-center gap-12 w-4/5">
          {cookies.map((c) => (
            <CookieCard key={c.id} cookie={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
