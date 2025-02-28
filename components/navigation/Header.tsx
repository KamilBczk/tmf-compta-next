"use client";

import React, { useState } from "react";
import Wrapper from "../Wrapper";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="header"
      className="w-full sticky top-0 bg-white shadow-[0_1px_5px_-4px_rgba(0,0,0,1)] z-50"
    >
      <div id="logo">
        <Wrapper>
          <div className="py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=""
              id="header-logo"
            >
              <a href={`/${lang}`}>
                <Image src={logo} alt="" className="w-28" />
              </a>
            </motion.div>

            {/* Menu mobile */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
            </motion.button>

            {/* Menu desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:block"
            >
              <ul className="inline-flex gap-6">
                {elements.map((element, indx) => (
                  <motion.li
                    key={indx}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + indx * 0.1 }}
                  >
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
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Menu mobile content */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
                >
                  <ul className="py-2">
                    {elements.map((element, indx) => (
                      <motion.li
                        key={indx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: indx * 0.1 }}
                        className="px-4 py-2"
                      >
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
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Wrapper>
      </div>
    </motion.div>
  );
}
