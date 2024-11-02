import Image, { StaticImageData } from "next/image";
import React from "react";
import Wrapper from "./Wrapper";

interface BannerProps {
  title: string;
  image: StaticImageData;
}

export default function Banner({ title, image }: BannerProps) {
  return (
    <div className="w-full h-[200px] md:h-[300px] relative">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,40,89,0.595)] via-[rgba(0,40,89,0.85)] to-[rgba(0,40,89,0.595)]">
        <Wrapper>
          <div className="h-[200px] md:h-[300px] flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-normal leading-snug text-white">
              {title}
            </h1>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
