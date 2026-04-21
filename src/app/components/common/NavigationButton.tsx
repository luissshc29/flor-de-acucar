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
  icon,
  role = "button",
  ...rest
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  role?: "button" | "link";
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  NavigationButtonProps) {
  if (role === "button") {
    return (
      <button
        className={`nav-button font-semibold font-title hover:cursor-pointer relative z-[101] m-0 flex h-fit items-center gap-1 border-none text-xs lg:text-sm text-primary-deep whitespace-nowrap justify-between w-full ${className}`}
        {...rest}
      >
        <div className="flex justify-start items-center gap-1">
          {icon && icon}
          {children}
        </div>
        <IoIosArrowForward className="text-xl transition-transform duration-500 button-arrow" />
      </button>
    );
  } else {
    return (
      <a
        href={navigateTo}
        target="_blank"
        className={`nav-button font-semibold font-title hover:cursor-pointer relative z-[101] m-0 flex h-fit items-center gap-1 border-none text-xs lg:text-sm text-primary-deep whitespace-nowrap justify-between w-full ${className}`}
      >
        <div className="flex justify-start items-center gap-1">
          {icon && icon}
          {children}
        </div>
        <IoIosArrowForward className="text-xl transition-transform duration-500 button-arrow" />
      </a>
    );
  }
}
