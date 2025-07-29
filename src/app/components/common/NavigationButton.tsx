"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface NavigationButtonProps {
  navigateTo?: string;
}

export default function NavigationButton({
  children,
  navigateTo = "",
  className = "",
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  NavigationButtonProps) {
  return (
    <button
      className={`nav-button font-semibold font-title hover:cursor-pointer relative z-[101] m-0 flex h-fit items-center gap-1 border-none text-xs lg:text-sm text-primary-deep whitespace-nowrap ${className}`}
      onClick={(e) => {
        e.preventDefault();
        setTimeout(() => {
          const el = document.getElementById(navigateTo);
          el?.scrollIntoView({ block: "start", behavior: "smooth" });
          if (window) window.history.pushState(null, "", `#${navigateTo}`);
        }, 100);
      }}
      {...rest}
    >
      {children}
      <IoIosArrowForward className="text-primary-deep text-xl transition-transform duration-500" />
    </button>
  );
}
