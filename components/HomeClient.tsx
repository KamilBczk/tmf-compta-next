"use client";

import React from "react";

interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

interface HomeClientProps {
  reviews: Review[];
  lang: string;
}

import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { motion } from "framer-motion";

/* COMPONENTS */
import EnterpriseGrid from "@/components/EnterpriseGrid";
import LogoSlider from "@/components/LogoSlider";
import Cta from "@/components/Cta";
import RoundedIllustration from "@/components/RoundedIllustration";
import CustomCarousel from "@/components/CustomCarousel";

/* FUNCTIONS */
import { translate } from "@/functions/translate";

/* ASSETS */
import homeIllustration from "@/assets/home/home-illustration.png";
import homeGrid1 from "@/assets/home/home-grid-1.png";
import homeGrid2 from "@/assets/home/home-grid-2.png";
import homeGrid3 from "@/assets/home/home-grid-3.png";
import homeAbout from "@/assets/home/home-about.png";
import homeAbout2 from "@/assets/home/home-about-2.png";

export default function HomeClient({ reviews, lang }: HomeClientProps) {
  return (
    <div className="" id="home">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-col md:flex-row-reverse flex min-h-[calc(100vh-82px)] pb-[41px] md:items-center justify-center md:justify-start gap-16 md:gap-0 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:flex-1"
          >
            <Image
              src={homeIllustration}
              alt="working"
              className="w-[60%] md:w[85%] lg:w-[70%] mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:flex-1 relative"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-snug">
              <span>
                {translate("1ae3a8b7-785c-474a-ab1b-a264cad739ae", lang)}
              </span>
              <span className="text-[#002859]">
                {translate("9bba372e-31a2-4c11-8929-16e960e3a333", lang)}
              </span>
              , <br />
              <span>
                {translate("85bd3bdc-2433-48a4-ad7b-e725d32f44c7", lang)}
              </span>
              <span className="text-[#002859]">
                {translate("8ad1210c-ca21-4485-9f83-8b4077f35a1e", lang)}
              </span>
            </h1>
            <div className="relative w-1/3 h-[2px] mx-auto md:mx-0 lg:h-[3px] bg-[#002859] my-8"></div>
            <p className="text-xl lg:text-2xl px-10 md:px-0 w-full md:w-[90%]">
              {translate("5a2534df-7dd1-49a9-9c05-9304aa7be3a0", lang)}
            </p>
          </motion.div>
        </motion.div>
      </Wrapper>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-16 mt-16"
        >
          <div>
            <h3 className="text-2xl md:text-3xl text-center font-normal">
              <span>
                {translate("9e92cf7a-9e98-4b75-9e24-6615cea73927", lang)}
              </span>
              <span className="text-[#002859] font-medium">
                {translate("ce4746d5-02b0-45e3-b266-dab49e959777", lang)}
              </span>
            </h3>
          </div>
          <EnterpriseGrid
            elements={[
              {
                image: homeGrid1,
                title: translate("68681617-07a8-4418-890b-1478120d1643", lang),
              },
              {
                image: homeGrid2,
                title: translate("dabd626c-47fa-405c-a8be-54d74fce8c96", lang),
              },
              {
                image: homeGrid3,
                title: translate("e75c3e90-1ccf-44d6-bffd-202003869a3c", lang),
              },
            ]}
          />
        </motion.div>
      </Wrapper>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="my-48 bg-[#002859]"
      >
        <Wrapper>
          <LogoSlider />
        </Wrapper>
      </motion.div>
      <div className="my-48">
        <Wrapper small={true}>
          <>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-48 md:mb-16"
            >
              <Cta
                reverse={true}
                title={
                  <h3 className="text-2xl md:text-3xl text-left font-normal">
                    <span>
                      {translate("1a891d0e-8856-4798-a91f-afdc07793000", lang)}
                    </span>
                    <span className="text-[#002859] font-medium">
                      {translate("0297397f-4c37-404a-ad7b-3531fca0a4ca", lang)}
                    </span>
                    <span>?</span>
                  </h3>
                }
                image={homeAbout}
                content={[
                  translate("3120e504-a24d-405b-9b03-7f55eae26844", lang),
                ]}
                button={<></>}
                hideButton={true}
                imageWidth="w-[70%] md:w-[60%]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Cta
                reverse={false}
                title={
                  <h3 className="text-2xl md:text-3xl text-left font-normal">
                    <span>
                      {translate("fd8dcbc1-ae63-4e5a-940e-ee7361c468a6", lang)}
                    </span>
                    <span className="text-[#002859] font-medium">
                      {translate("f4292959-1d71-499a-8c82-47ed5f973ff8", lang)}
                    </span>
                    <span>
                      {translate("86e5e82b-b666-4cd8-8434-006ad89d29a9", lang)}
                    </span>
                    <span>?</span>
                  </h3>
                }
                image={homeAbout2}
                content={[
                  translate("480ba1ba-92f8-4606-a190-f6ca11726f49", lang),
                ]}
                list={[
                  translate("e90ab953-2213-466a-b1c5-64c2230db7a7", lang),
                  translate("12abc872-4269-47b9-926c-2263521e8a71", lang),
                  translate("a00e3bea-a51a-42f0-b16d-0b0038405a8f", lang),
                  translate("733716d1-4d12-489d-9bc6-bccb7d0c3947", lang),
                  translate("643ffeff-57fd-4413-8e42-7f5ab8c6fb02", lang),
                  translate("11819b81-6cf5-4aaa-9745-d940bc1c5409", lang),
                ]}
                button={<></>}
                hideButton={true}
                imageWidth="w-[70%] md:w-[60%]"
              />
            </motion.div>
          </>
        </Wrapper>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="my-48 bg-[#002859] text-white py-16"
      >
        <Wrapper>
          <CustomCarousel reviews={reviews} />
        </Wrapper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="my-48"
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
    </div>
  );
}
