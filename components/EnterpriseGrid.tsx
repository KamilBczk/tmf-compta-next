import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface EnterpriseElement {
  image: StaticImageData;
  title: string;
}

interface EnterpriseGridProps {
  elements: EnterpriseElement[];
}

export default function EnterpriseGrid({ elements }: EnterpriseGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-16 text-center">
      {elements.map((element, indx) => (
        <div key={indx} className="relative group mb-8 md:mb-0">
          <div className="relative w-[180px] sm:w-[220px] md:w-[200px] lg:w-[240px] xl:w-[280px] aspect-square mx-auto rounded-full flex items-center justify-center">
            <Image
              className="object-contain p-4"
              src={element.image}
              alt={element.title}
              fill
              sizes="(max-width: 640px) 280px, (max-width: 768px) 220px, (max-width: 1024px) 200px, (max-width: 1280px) 240px, 280px"
            />
          </div>
          <p className="text-xl sm:text-2xl mt-4 md:mt-6">{element.title}</p>
        </div>
      ))}
    </div>
  );
}
