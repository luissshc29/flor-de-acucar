"use client";

import Image from "next/image";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Essence() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#essence-section-logo-image", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#essence-section-logo-container",
        // markers: true,
        start: "top 70%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    gsap.to("#essence-section-text-p-1", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#essence-section-text-p-1",
        // markers: true,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    gsap.to("#essence-section-text-h2", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#essence-section-text-container",
        // markers: true,
        start: "top 60%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    gsap.to("#essence-section-text-p-2", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#essence-section-text-p-2",
        // markers: true,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    gsap.to("#essence-section-text-p-3", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#essence-section-text-p-3",
        // markers: true,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    gsap.to("#essence-section-text-p-4", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#essence-section-text-p-4",
        // markers: true,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#essence-section-logo-image");
    };
  }, []);

  return (
    <div
      id="essence"
      className="flex lg:flex-row flex-col items-center gap-y-8 p-8 w-screen min-h-[100vh]"
    >
      <div className="w-full lg:w-1/2">
        <div
          id="essence-section-text-container"
          className="flex flex-col lg:items-end gap-4 mx-auto lg:mr-0 lg:ml-auto w-4/5 text-neutral-700 text-sm text-left lg:text-right"
        >
          <p
            className="opacity-0 font-text text-primary-medium text-sm md:text-base tracking-[.5em] [transform:translateX(-10%)]"
            id="essence-section-text-p-1"
          >
            NOSSA ESSÊNCIA
          </p>
          <h2
            id="essence-section-text-h2"
            className="opacity-0 mt-4 mb-6 font-title font-extrabold text-primary-deep text-2xl md:text-4xl [transform:translateX(-2%)]"
          >
            Na Flor de Açúcar, cada cookie carrega uma história
          </h2>
          <p
            className="opacity-0 [transform:translateX(-2%)]"
            id="essence-section-text-p-2"
          >
            Tem gosto de abraço apertado, de risada entre amigos, de um café
            compartilhado no fim da tarde. A gente acredita que o doce tem
            poder: o de aproximar, de curar, de transformar um instante comum em
            uma lembrança inesquecível.
          </p>
          <p
            className="opacity-0 [transform:translateX(-2%)]"
            id="essence-section-text-p-3"
          >
            Não vendemos só cookies. Entregamos aconchego, capricho, cuidado em
            cada detalhe, em cada pedacinho. Tudo é feito à mão, com alma e com
            o coração leve, como uma flor.
          </p>
          <p
            className="opacity-0 text-base [transform:translateX(-2%)]"
            id="essence-section-text-p-4"
          >
            <span className="font-bold text-primary-dark">Flor de Açúcar</span>{" "}
            <span className="font-semibold">
              é sobre isso: Doçura que toca a alma e fica na memória.
            </span>
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2" id="essence-section-logo-container">
        <Image
          src="/images/logo/logo-transparent.PNG"
          alt=""
          width={500}
          height={500}
          className="opacity-0 mx-auto w-1/2 lg:w-3/4"
          id="essence-section-logo-image"
        />
      </div>
    </div>
  );
}
