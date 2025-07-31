"use client";

import { Cookie } from "@/app/assets/cookies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/shadcn/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { Fragment } from "react";
import SpotlightCard from "./SpotlightCard";
import { Separator } from "@/app/shadcn/components/ui/separator";

export default function CookieCard({ cookie }: { cookie: Cookie }) {
  return (
    <div
      id={`cookie-card-${cookie.id}`}
      className={`opacity-0 [transform:translateY(15%)] flex flex-col items-center gap-4 ${
        cookie.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        className={`text-center flex flex-col items-center gap-2 w-full md:w-1/2 ${
          cookie.id % 2 === 0
            ? "md:text-right md:items-end"
            : "md:text-left md:items-start"
        }`}
      >
        <h2 className="my-4 md:w-full lg:w-4/5 font-title font-extrabold text-primary-deep text-2xl md:text-4xl">
          {cookie.name}
        </h2>

        <p className="md:w-full lg:w-4/5 text-neutral-700 text-sm">
          {cookie.description}
        </p>
        <div className="flex items-center gap-2 my-2">
          {cookie.weight.map((w, index, arr) => (
            <Fragment key={w.id}>
              <SpotlightCard
                className={`px-0.5 py-0.5 rounded-xs text-primary-dark shadow-transparent text-xs text-center bg-white ${
                  w.grams === 120 && "highlighted-price-card "
                }`}
                spotlightColor="rgba(239, 202, 169, 1)"
              >
                <div className="flex flex-col justify-center items-center gap-2 bg-white px-1 py-2">
                  <p>{w.grams + "g"}</p>
                  <p>
                    {"R$" + String(w.price.toFixed(2)).replaceAll(".", ",")}
                  </p>
                </div>
              </SpotlightCard>
              {index < arr.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="bg-primary-soft w-[1px] data-[orientation=vertical]:h-15"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="py-4 w-4/5 md:w-2/3 lg:w-1/3">
        <Carousel
          className="relative flex justify-center items-center text-center"
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {cookie.images.map((url, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center w-fit"
              >
                <Image
                  src={url}
                  alt={cookie.name}
                  width={350}
                  height={350}
                  className="object-center object-cover"
                  priority
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
