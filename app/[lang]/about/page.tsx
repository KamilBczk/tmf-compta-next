import Banner from "@/components/Banner";
import { translate } from "@/functions/translate";
import React from "react";

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
      <Banner
        title={translate("2ce9c735-c131-40bb-833d-5f1d16447c1c", lang)}
        image={banner}
      />
      <div>
        <Wrapper small={true}>
          <div className="my-24">
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
          </div>
        </Wrapper>
      </div>
      <div className="bg-[#002859] my-24 py-24">
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
      </div>
      <div className="my-48">
        <Wrapper small={true}>
          <h3 className="text-2xl md:text-3xl font-normal mb-8">
            <span>
              {translate("02b909d9-754f-47a0-bcbd-274516a9b3a0", lang)}
            </span>
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[0.2fr_0.8fr] text-center md:text-left gap-8 w-full lg:w-[70%]">
            <span className="text-2xl md:text-4xl font-extrabold text-[#002859]">
              2014
            </span>
            <span className="text-lg md:text-xl font-normal">
              TMF Compta est fondée, marquant le début de notre parcours dans le
              domaine de la comptabilité et des services financiers.
            </span>
            <span className="text-2xl md:text-4xl font-extrabold text-[#002859]">
              2015
            </span>
            <span className="text-lg md:text-xl font-normal">
              Grâce à notre approche centrée sur le client et à notre engagement
              envers l'excellence, nous gagnons la confiance de nombreuses
              entreprises qui bénéficient de nos conseils et de notre expertise.
            </span>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
