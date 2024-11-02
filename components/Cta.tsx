import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface CtaProps {
  reverse?: boolean;
  title: ReactNode;
  image: StaticImageData | ReactNode;
  content: ReactNode[];
  list?: string[];
  button: ReactNode;
  hideButton?: boolean;
  imageWidth?: string;
  imageIsSvg?: boolean;
  darkenImage?: boolean;
}

export default function Cta({
  reverse = false,
  title,
  image,
  content,
  list,
  button,
  hideButton = false,
  imageWidth = "w-full",
  imageIsSvg = false,
  darkenImage = false,
}: CtaProps) {
  return (
    <div
      className={`flex flex-col md:flex-row w-full gap-8 md:gap-24 group ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full relative md:w-1/2 flex items-center justify-center">
        <div className={`relative ${imageWidth}`}>
          {imageIsSvg ? (
            <>{image}</>
          ) : (
            <div className="relative">
              <Image
                className="object-contain rounded-2xl"
                alt="Image descriptive"
                src={image as StaticImageData}
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
              {darkenImage && (
                <div className="absolute inset-0 bg-[#002859] opacity-50 rounded-2xl transition-all group-hover:opacity-35" />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 py-0 md:py-24">
        {title}
        {content.map((elem, index) => (
          <div key={index} className="mt-8 text-lg md:text-xl font-normal">
            {elem}
          </div>
        ))}
        {list && (
          <ul className="list-disc text-lg md:text-xl mt-2 ml-4">
            {list.map((item: string, index: number) => (
              <li key={index} className=" leading-loose">
                {item}
              </li>
            ))}
          </ul>
        )}
        {!hideButton && <div className={`mt-8`}>{button}</div>}
      </div>
    </div>
  );
}
