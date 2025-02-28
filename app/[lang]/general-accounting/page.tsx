"use client";
import Banner from "@/components/Banner";
import React from "react";

/* COMPONENTS */
import { translate } from "@/functions/translate";
import Wrapper from "@/components/Wrapper";
import Cta from "@/components/Cta";
import RoundedIllustration from "@/components/RoundedIllustration";
import ScrollToElement from "@/components/ScrollToElement";
import { motion } from "framer-motion";

/* ASSETS */
import banner from "@/assets/general-accounting/banner.png";

interface GeneralAccountingProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function GeneralAccounting({
  params,
}: GeneralAccountingProps) {
  const { lang } = await params;

  return (
    <div>
      <ScrollToElement />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Banner
          title={translate("98fe72f7-ca3c-4c6e-ade8-27fe3bbdb425", lang)}
          image={banner}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24"
      >
        <Wrapper small={true}>
          <Cta
            reverse={true}
            title={
              <h3 className="text-2xl md:text-3xl text-left font-normal">
                <span>
                  {translate("46252ca1-f5c7-4ea0-94f6-57945213c08b", lang)}
                </span>
                <span className="text-[#002859] font-medium">
                  {translate("d7947c5f-7c26-4361-a9a6-5b32e1c35a19", lang)}
                </span>
              </h3>
            }
            image={<RoundedIllustration lang={lang} />}
            content={[translate("9aab18a8-934f-4aa3-85c9-49d71efcc11d", lang)]}
            button={<></>}
            imageWidth="w-[70%] md:w-[80%]"
            imageIsSvg={true}
            hideButton={true}
          />
        </Wrapper>
      </motion.div>
      <Services lang={lang} />
    </div>
  );
}

import section1 from "@/assets/general-accounting/section1.avif";
import section2 from "@/assets/general-accounting/section2.avif";
import section3 from "@/assets/general-accounting/section3.avif";
import section4 from "@/assets/general-accounting/section4.avif";
import section5 from "@/assets/general-accounting/section5.avif";
import section6 from "@/assets/general-accounting/section6.avif";
import section7 from "@/assets/general-accounting/section7.avif";

function Services({ lang }: { lang: string }) {
  const services = [
    {
      title: (
        <h3 className="text-2xl md:text-3xl text-left font-normal">
          <span>{translate("b7bc0788-334b-4ed6-9020-80f3c40a54ab", lang)}</span>
          <span className="text-[#002859] font-medium">
            {translate("04f6484e-8faa-431a-9f94-27b81f317236", lang)}
          </span>
          <span>{translate("40528cd4-0370-4303-b387-f55878ae2592", lang)}</span>
        </h3>
      ),
      content: [
        translate("7bfe237a-2c0e-4bcf-939d-f14e0cd76d45", lang),
        translate("0592de8d-baad-47c2-8f88-e64661a90dbd", lang),
      ],
      image: section1,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl text-left font-normal">
          <span>{translate("78748e74-2279-4c60-8f6a-464e4ebe6c55", lang)}</span>
          <span className="text-[#002859] font-medium">
            {translate("966f393f-be1b-4d0c-9d2c-ffd68909f044", lang)}
          </span>
        </h3>
      ),
      content: [
        translate("7ede2386-b79b-4b07-aa8c-b615c3763053", lang),
        translate("292505b8-9bc0-4088-8c74-635b55c36196", lang),
      ],
      image: section2,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl text-left font-normal">
          <span>{translate("9d1de79b-7f54-4da4-abc8-aceb012c3c9b", lang)}</span>
          <span className="text-[#002859] font-medium">
            {translate("11264a9b-6dc7-4969-b0f2-258901aec18e", lang)}
          </span>
        </h3>
      ),
      content: [
        translate("a4698684-48df-4370-ba52-697caeb2353e", lang),
        translate("b7278fd5-d99f-408c-a6c4-271a63952a64", lang),
      ],
      image: section3,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl text-left font-normal">
          <span className="text-[#002859] font-medium">
            {translate("fd90a816-4e66-4a87-8b37-291da546de35", lang)}
          </span>
          <span>{translate("7a375821-a008-4898-b46d-0f6930278a08", lang)}</span>
        </h3>
      ),
      content: [
        translate("31a66121-2403-46e1-9df9-67d159899aba", lang),
        translate("55270329-b89a-453c-945b-cbd3edb95d26", lang),
      ],
      image: section4,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl text-left font-normal">
          <span className="text-[#002859] font-medium">
            {translate("07b0f448-0611-4a5b-add4-c7945852065c", lang)}
          </span>
        </h3>
      ),
      content: [
        translate("ff942d52-83cc-461a-aa46-5d957a152a2b", lang),
        translate("cb8bb132-08e0-43f8-85d2-d37251069b51", lang),
      ],
      image: section5,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl text-left font-normal">
          <span>{translate("0a475cfb-21fb-4666-956c-af1d0f27e462", lang)}</span>
          <span className="text-[#002859] font-medium">
            {translate("5e8bb020-58a3-45a5-a1d8-1296509e5d2c", lang)}
          </span>
        </h3>
      ),
      content: [
        translate("41d7fec6-b28b-47af-be28-c0df13a79d0b", lang),
        translate("16918416-8823-4354-a088-c2df65b5d98d", lang),
      ],
      image: section6,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl text-left font-normal">
          <span>{translate("abf4dab9-ccdf-4f1e-b319-61cb6931ba29", lang)}</span>
          <span className="text-[#002859] font-medium">
            {translate("8d75e04d-c02a-498f-9cbe-0b718ded8d8d", lang)}
          </span>
        </h3>
      ),
      content: [
        translate("edc1f914-4070-442c-86d7-8d6cfcb26e41", lang),
        translate("af51bb09-a4a1-4dfc-9827-7e3780ef0963", lang),
      ],
      image: section7,
    },
  ];
  return (
    <Wrapper>
      <div>
        {services.map((service, index: number) => (
          <motion.div
            key={index}
            id={`section${index + 1}`}
            className="pt-48 last:pb-48"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Cta
              title={service.title}
              image={service.image}
              content={service.content}
              button={<></>}
              hideButton={true}
              reverse={index % 2 === 1}
              darkenImage={true}
            />
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
}
