"use client";

import React, { useState } from "react";
import Wrapper from "../Wrapper";
import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  lang: string;
  logo: StaticImageData;
  elements: {
    href: string;
    label: string;
    active: boolean;
  }[];
}

export default function Header({ lang, logo, elements }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      id="header"
      className="w-full sticky top-0 bg-white shadow-[0_1px_5px_-4px_rgba(0,0,0,1)] z-50"
    >
      <div id="logo">
        <Wrapper>
          <div className="py-4 flex justify-between items-center">
            <div className="" id="header-logo">
              <a href={`/${lang}`}>
                <Image src={logo} alt="" className="w-28" />
              </a>
            </div>

            {/* Menu mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            {/* Menu desktop */}
            <div className="hidden md:block">
              <ul className="inline-flex gap-6">
                {elements.map((element, indx) => (
                  <li key={indx}>
                    <a
                      href={element.href}
                      className={`font-medium text-base ${
                        element.active === false
                          ? "text-black"
                          : "text-[#002859]"
                      }`}
                    >
                      {element.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu mobile content */}
            <div
              className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="py-2">
                {elements.map((element, indx) => (
                  <li key={indx} className="px-4 py-2">
                    <a
                      href={element.href}
                      className={`block font-medium ${
                        element.active === false
                          ? "text-black"
                          : "text-[#002859]"
                      }`}
                    >
                      {element.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
