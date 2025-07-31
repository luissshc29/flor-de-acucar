"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../shadcn/components/ui/button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/components/ui/carousel";
import { type CarouselApi } from "../shadcn/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useInView } from "react-intersection-observer";
import Header from "../components/unique/Header";

gsap.registerPlugin(SplitText);

const carouselScreens = [
  {
    id: 1,
    text: "É TANTA DELÍCIA QUE NÃO DÁ PRA DIVIDIR!",
    image: "/images/background/welcome/welcome-6.jpg",
    alt: "Welcome section background image 1",
    animation: "lines",
  },
  {
    id: 2,
    text: "COOKIES GIGANTES, SABOR ABSURDO!",
    image: "/images/background/welcome/welcome-3.jpg",
    alt: "Welcome section background image 2",
    animation: "lines",
  },
  {
    id: 3,
    text: "RECHEIO DE VERDADE. SABOR QUE VICIA!",
    image: "/images/background/welcome/welcome-5.jpg",
    alt: "Welcome section background image 3",
    animation: "lines",
  },
  {
    id: 4,
    text: "RECHEIO ARTESANAL, SABOR SEM IGUAL!",
    image: "/images/background/welcome/welcome-4.jpg",
    alt: "Welcome section background image 4",
    animation: "lines",
  },
];

export default function Welcome() {
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!textRefs.current[currentSlide]) return;

    const el = textRefs.current[currentSlide];
    const split = new SplitText(el, { type: "words,chars" });

    gsap.fromTo(
      split.chars,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
      }
    );

    // cleanup
    return () => split.revert();
  }, [currentSlide]);

  // Assina evento select do Embla para atualizar slide ativo
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    // Inicializa estado com slide atual
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const [headerIsFixed, setHeaderIsFixed] = useState<boolean>(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    setHeaderIsFixed(!inView);
  }, [inView]);

  return (
    <div
      style={
        headerIsFixed ? {} : { position: "relative", willChange: "contents" }
      }
    >
      <Header inView={inView} />
      <Carousel
        id="welcome"
        className="relative flex justify-center items-center text-center"
        style={{ height: "100vh", width: "100vw" }}
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ loop: true }}
        setApi={setEmblaApi}
        ref={ref}
      >
        <CarouselContent>
          {carouselScreens.map((s) => (
            <CarouselItem
              key={s.id}
              className="relative flex justify-center items-center w-screen h-screen"
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                className="z-[-2] object-center object-cover"
                priority
              />

              <div className="z-[-1] absolute inset-0 bg-black/20" />

              <div
                className="z-10 flex justify-center items-center w-screen text-white"
                id="welcome-section-text"
              >
                <div className="w-4/5 h-4/5 text-center">
                  <h1 className="font-text text-sm md:text-base tracking-[.5em]">
                    FLOR DE AÇÚCAR
                  </h1>
                  <h2
                    className="mt-4 mb-6 font-title font-bold text-4xl lg:text-6xl"
                    ref={(el) => {
                      if (el) {
                        const split = new SplitText(el, { type: "lines" });
                        gsap.from(split.lines, {
                          y: 100,
                          opacity: 0,
                          stagger: 0.2,
                          duration: 1,
                          ease: "power3.out",
                        });
                      }
                    }}
                  >
                    {s.text}
                  </h2>
                  <p className="font-text text-sm md:text-lg">
                    Quer saber mais?
                  </p>
                  <Button
                    id="welcome-section-button"
                    size="lg"
                    className="gap-1 bg-background hover:bg-primary-light active:bg-primary-medium mt-8 px-8 md:px-12 py-6 rounded-3xl text-primary-deep text-sm md:text-base hover:cursor-pointer"
                    onClick={() => {
                      const el = document.getElementById("cookies");
                      el?.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                      });
                      if (window)
                        window.history.pushState(null, "", `#${"cookies"}`);
                    }}
                  >
                    Ah, eu quero! <IoIosArrowDown />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <button
        className="right-4 bottom-4 fixed flex justify-center items-center bg-background-soft shadow-primary-deep shadow-sm rounded-full w-8 h-8 text-primary-dark text-xl transition-all duration-500 hover:cursor-pointer"
        style={{
          opacity: inView ? 0 : 1,
        }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}
