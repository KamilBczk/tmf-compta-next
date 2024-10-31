"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logoSlider1 from "@/assets/home/slider-logo-1.svg";
import logoSlider2 from "@/assets/home/slider-logo-2.svg";
import logoSlider3 from "@/assets/home/slider-logo-3.svg";
import logoSlider4 from "@/assets/home/slider-logo-4.svg";
import logoSlider5 from "@/assets/home/slider-logo-5.svg";

const logos = [
  { src: logoSlider1, alt: "Logo 1" },
  { src: logoSlider2, alt: "Logo 2" },
  { src: logoSlider3, alt: "Logo 3" },
  { src: logoSlider4, alt: "Logo 4" },
  { src: logoSlider5, alt: "Logo 5" },
];

const LogoSlider = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos]; // Triple the logos for smoother transition

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-14">
      <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#002859] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#002859] to-transparent z-10"></div>
      <motion.div
        className="flex"
        animate={{
          x: [0, -50 + "%"],
        }}
        transition={{
          x: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 md:mx-8"
            style={{ width: `calc(100% / ${logos.length})` }}
          >
            <div className="flex items-center justify-center h-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="w-[100px] md:w-[150px] lg:w-[200px] h-auto"
                width={200}
                height={100}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
