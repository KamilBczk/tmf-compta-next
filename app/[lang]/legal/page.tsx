import React from "react";
import LegalFr from "@/components/LegalFr";
import LegalRo from "@/components/LegalRo";
import Wrapper from "@/components/Wrapper";
import Banner from "@/components/Banner";
import banner from "@/assets/legal/banner.jpg";
import { translate } from "@/functions/translate";

interface LegalProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function page({ params }: LegalProps) {
  const { lang } = await params;
  return (
    <div>
      <Banner
        title={translate("dd7f6812-7a06-4d4e-b9b5-ab9848293664", lang)}
        image={banner}
      />
      <div className="mt-24">
        <Wrapper>
          {lang == "fr" ? <LegalFr /> : <></>}
          {lang == "ro" ? <LegalRo /> : <></>}
        </Wrapper>
      </div>
    </div>
  );
}
