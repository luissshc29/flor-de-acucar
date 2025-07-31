"use client";

import React, { useState } from "react";
import NavigationButton from "../common/NavigationButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/shadcn/components/ui/dropdown-menu";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation({
  className,
  isFixed = false,
  ...rest
}: { isFixed: boolean } & React.HTMLAttributes<HTMLDivElement>) {
  const sections = [
    {
      id: "essence",
      text: "Nossa essência",
      navigateTo: "essence",
    },
    {
      id: "cookies",
      text: "Nossos cookies",
      navigateTo: "cookies",
    },
    {
      id: "contact",
      text: "Contato",
      navigateTo: "contact",
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div id="navigation" className={className} {...rest}>
      <DropdownMenu onOpenChange={(e) => setIsDropdownOpen(e)}>
        <DropdownMenuTrigger className="min-[800px]:hidden flex justify-center items-center hover:bg-primary-deep opacity-0 border-0 rounded-full w-12 h-12 text-primary-deep hover:text-background text-2xl animate-content-up transition-all ease-in-out hover:cursor-pointer [transition-duration:400ms]">
          <div className="">
            <AnimatePresence mode="wait" initial={false}>
              {isDropdownOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex justify-center items-center bg-primary-soft/30 shadow-sm backdrop-blur-lg rounded-full hover:cursor-pointer focus:cursor-pointer"
                  style={{
                    color: isFixed
                      ? "var(--color-primary-deep)"
                      : "var(--color-background)",
                  }}
                >
                  <IoMdClose className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex justify-center items-center hover:cursor-pointer"
                  style={{
                    color: isFixed
                      ? "var(--color-primary-deep)"
                      : "var(--color-background)",
                  }}
                >
                  <IoMdMenu className="w-6 h-6 hover:cursor-pointer" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-primary-soft/50 backdrop-blur-lg border-none rounded-none">
          {sections.map((s, index) => (
            <DropdownMenuItem
              key={s.id}
              className="focus:bg-primary-soft//50 py-4 rounded-none hover:cursor-pointer"
            >
              <NavigationButton
                navigateTo={s.navigateTo}
                className="opacity-0 animate-content-up animation-duration-[500ms]"
                style={{
                  animationDelay: `${100 * index}ms`,
                  color: isFixed
                    ? "var(--color-primary-deep)"
                    : "var(--color-background)",
                }}
              >
                {s.text}
              </NavigationButton>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="hidden min-[800px]:flex justify-center items-center gap-2">
        {sections.map((s, index) => (
          <NavigationButton
            key={s.id}
            navigateTo={s.navigateTo}
            className={`opacity-0 animate-content-up ${
              isFixed ? "after:border-primary-deep" : "after:border-background"
            }`}
            style={{
              animationDelay: `${300 * (index + 1)}ms`,
              color: isFixed
                ? "var(--color-primary-deep)"
                : "var(--color-background)",
            }}
          >
            {s.text}
          </NavigationButton>
        ))}
      </div>
    </div>
  );
}
