"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { RxInstagramLogo } from "react-icons/rx";

export default function Header({ inView }: { inView: boolean }) {
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [bgTransparent, setBgTransparent] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsHidden(true);
      setTimeout(() => {
        setIsFixed(false);
        setBgTransparent(true);
      }, 500);
    } else {
      setIsFixed(true);
      setBgTransparent(false);

      setTimeout(() => {
        setIsHidden(false);
      }, 10);
    }
  }, [inView]);

  return (
    <div
      style={{
        position: isFixed ? "fixed" : "absolute",
        top: isFixed ? 0 : "calc(10dvh + 32px)",
        left: 0,
        width: "100%",
        zIndex: 50,
        transform: isHidden ? "translateY(-100%)" : "translateY(0%)",
        transition: "transform 0.5s ease-in-out",
        background: bgTransparent
          ? "transparent"
          : "var(--color-background-soft)",
        boxShadow: !inView ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
      }}
      className="flex justify-between items-center px-8 py-4 rounded-b-md min-h-[10dvh]"
    >
      {/* Uncomment if the Logo is preferred */}
      {/* <Link
        href="/"
        className="flex items-center opacity-0 w-[60%] md:w-[30%] animate-content-up delay-300"
      >
        <Image
          src="/images/logo/text.png"
          alt="Logo Text"
          width={770}
          height={316}
          className="w-3/4"
        />
        <Image
          src="/images/logo/flower.png"
          alt="Logo flower"
          width={500}
          height={500}
          className="w-1/4"
        />
      </Link> */}
      <Link
        href="/"
        className="flex items-center opacity-0 w-fit animate-content-up delay-300"
      >
        <div className="w-fit text-center">
          <h1 className="font-logo-primary font-bold text-primary-deep text-4xl lg:text-6xl whitespace-nowrap mix-blend-plus-lighter">
            Flor de Açúcar
          </h1>
          <h2 className="font-logo-secondary font-bold text-[10px] text-secondary-dark lg:text-sm whitespace-nowrap mix-blend-plus-lighter">
            COOKIES ARTESANAIS
          </h2>
        </div>
        <Image
          src="/images/logo/flower.png"
          alt="Logo flower"
          width={500}
          height={500}
          className="w-[50px] md:w-[80px]"
        />
      </Link>
      <Navigation className="w-fit" />
      <a
        href="/"
        target="_blank"
        className="flex justify-center items-center hover:bg-primary-deep opacity-0 rounded-full w-12 h-12 text-primary-deep hover:text-background text-2xl [transition-duration:400ms] [animation:content-up_1s_ease-in-out_1000ms_forwards]"
      >
        <RxInstagramLogo />
      </a>
    </div>
  );
}
