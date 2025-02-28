"use client";
import Banner from "@/components/Banner";
import { translate } from "@/functions/translate";
import React from "react";
import { motion } from "framer-motion";

/* COMPONENTS */
import banner from "@/assets/about/banner.png";
import Wrapper from "@/components/Wrapper";
import Cta from "@/components/Cta";

/* ASSETS */
import homeAbout from "@/assets/home/home-about.png";

interface AboutProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function About({ params }: AboutProps) {
  const { lang } = await params;
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Banner
          title={translate("2ce9c735-c131-40bb-833d-5f1d16447c1c", lang)}
          image={banner}
        />
      </motion.div>

      <div>
        <Wrapper small={true}>
          <motion.div
            className="my-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
        </Wrapper>
      </div>

      <motion.div
        className="bg-[#002859] my-24 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Wrapper small={true}>
          <div className="text-white text-center">
            <h3 className="text-2xl md:text-3xl font-normal">
              <span>
                {translate("02b909d9-754f-47a0-bcbd-274516a9b3a0", lang)}
              </span>
            </h3>
            <p className="mt-8 text-lg md:text-xl font-normal w-full lg:w-[700px] mx-auto">
              {translate("746bb341-b31c-450f-9790-28fbf433b946", lang)}
            </p>
          </div>
        </Wrapper>
      </motion.div>

      <motion.div
        className="my-48"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Wrapper small={true}>
          <>
            <h3 className="text-2xl md:text-3xl font-normal mb-8">
              <span>
                {translate("3ea7662f-97a0-485a-b49e-5a12e8166027", lang)}
              </span>
            </h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-[0.2fr_0.8fr] text-center md:text-left gap-8 w-full lg:w-[70%] items-center">
              <span className="text-2xl md:text-4xl font-bold text-[#002859]">
                2014
              </span>
              <span className="text-lg md:text-xl font-normal">
                {translate("5e838895-81f4-4306-8edb-7ecd4e808be7", lang)}
              </span>
              <span className="text-2xl md:text-4xl font-bold text-[#002859]">
                2015
              </span>
              <span className="text-lg md:text-xl font-normal">
                {translate("80d7ca47-75b9-4b4f-8fbe-80ffc08591ea", lang)}
              </span>
              <span className="text-2xl md:text-4xl font-bold text-[#002859]">
                2016
              </span>
              <span className="text-lg md:text-xl font-normal">
                {translate("237ecf52-cb91-4610-b2f9-5bf515a09a78", lang)}
              </span>
              <span className="text-2xl md:text-4xl font-bold text-[#002859]">
                2022
              </span>
              <span className="text-lg md:text-xl font-normal">
                {translate("ed3da60e-41cc-4686-9848-2c7814e58642", lang)}
              </span>
            </div>
          </>
        </Wrapper>
      </motion.div>
    </div>
  );
}
