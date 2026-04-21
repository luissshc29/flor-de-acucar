"use client";

import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/unique/Navigation";
import { RxInstagramLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import NavigationButton from "../components/common/NavigationButton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../shadcn/components/ui/tooltip";

export default function Contact() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#contact-section-p-1", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#contact-section-text-container",
        // markers: true,
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    gsap.to("#contact-section-h2", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#contact-section-text-container",
        // markers: true,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    gsap.to("#contact-section-p-2", {
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

    gsap.to("#contact-section-main", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#contact-section-text-container",
        // markers: true,
        start: "top 40%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const availableContacts = [
    {
      id: 1,
      name: "Instagram",
      exhibitionText: "@flordeacucar.cookies",
      icon: RxInstagramLogo,
      url: "https://instagram.com/flordeacucar.cookies?igsh=MWt3NzZ5MzNyMWMwMw%3D%3D&utm_source=qr",
    },
    {
      id: 2,
      name: "WhatsApp",
      exhibitionText: "+55 (85) 8911-4146",
      icon: FaWhatsapp,
      url: "https://wa.me/+558589114146",
    },
  ];

  return (
    <div
      className="px-8 py-16 w-screen min-h-[100dvh] text-center"
      id="contact"
    >
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
          className="opacity-0 text-neutral-900 text-sm"
          id="contact-section-p-2"
        >
          Estamos por aqui! Vai ser demais ter você com a gente.
        </p>
        <footer
          id="contact-section-main"
          className="opacity-0 py-12 text-primary-deep"
        >
          <div className="justify-center justify-items-center items-center gap-8 grid md:grid-cols-3 mx-auto px-4 min-h-[10dvh] container">
            <Link
              href="#"
              className="flex items-center opacity-0 w-1/2 md:w-full animate-content-up delay-300"
            >
              <Image
                src="/images/logo/text.png"
                alt="Logo Text"
                width={2000}
                height={820}
                className="flex items-center gap-2 mb-3 w-full font-bold text-primary-foreground text-lg"
              />
            </Link>
            <div className="w-full md:w-fit h-full text-left">
              <h4 className="mb-3 font-bold text-base">Contato</h4>

              <div
                className={`flex flex-col justify-center items-center gap-2 w-full`}
              >
                {availableContacts.map((contact, index) => (
                  <Tooltip key={contact.id} delayDuration={100}>
                    <TooltipTrigger className="w-full">
                      <NavigationButton
                        role="link"
                        navigateTo={contact.url}
                        className={`opacity-0 animate-content-up after:border-primary-deep w-full`}
                        style={{
                          animationDelay: `${300 * (index + 1)}ms`,
                          color: "var(--color-primary-deep)",
                        }}
                        icon={<contact.icon size={16} />}
                      >
                        {contact.exhibitionText}
                      </NavigationButton>
                    </TooltipTrigger>
                    <TooltipContent className="text-primary-deep">
                      <div className="flex justify-start items-center gap-1">
                        {<contact.icon size={16} />}
                        {contact.name}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="w-full md:w-fit h-full">
              <h4 className="mb-3 font-bold text-base text-left">Navegação</h4>
              <Navigation
                className="items-start w-full md:w-fit"
                isFixed={true}
                orientation="vertical"
                switchToDropdown={false}
              />
            </div>
          </div>

          <p className="my-8 font-semibold text-sm">Fortaleza, CE — Brasil</p>
          <div className="mx-auto mt-auto mb-0 px-4 pt-6 border-primary-foreground/10 border-t text-xs text-center container">
            © {new Date().getFullYear()} Flor de Açúcar. Todos os direitos
            reservados.
          </div>
        </footer>
      </div>
    </div>
  );
}
