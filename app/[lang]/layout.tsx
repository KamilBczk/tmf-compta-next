/* NEXT */
import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";

/* COMPONENTS */
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import FloatingActionButton from "@/components/navigation/FloatingActionButton";
/* FUNCTIONS */
import { translate } from "@/functions/translate";
import { generateMetadata as genMeta } from "@/functions/generateMetadata";

/* ASSETS */
import logo from "@/assets/global/logo.svg";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const headersList = await headers();
  const header_url = headersList.get("x-url") || "";
  if (
    header_url.endsWith("/") ||
    header_url.endsWith("/fr") ||
    header_url.endsWith("/ro")
  ) {
    return genMeta("home", (await params).lang);
  } else if (header_url.endsWith("/about")) {
    return genMeta("about", (await params).lang);
  } else if (header_url.endsWith("/contact")) {
    return genMeta("contact", (await params).lang);
  } else if (header_url.endsWith("/general-accounting")) {
    return genMeta("general-accounting", (await params).lang);
  } else {
    return genMeta("legal", (await params).lang);
  }
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  const headersList = await headers();
  const header_url = headersList.get("x-url") || "";
  const navItems = [
    {
      href: `/${lang}`,
      label: translate("1635f5c3-7f8a-42cd-a3b2-444c279f0b7c", lang),
      active: header_url.endsWith(`/${lang}`),
    },
    {
      href: `/${lang}/general-accounting`,
      label: translate("9e52e1ec-ec33-4e9b-a6f8-6b9165411c1f", lang),
      active: header_url.endsWith(`/${lang}/general-accounting`),
    },
    {
      href: `/${lang}/about`,
      label: translate("2ce9c735-c131-40bb-833d-5f1d16447c1c", lang),
      active: header_url.endsWith(`/${lang}/about`),
    },
    {
      href: `/${lang}/contact`,
      label: translate("34db7e00-fd9d-44bd-9a7c-a16c9341c8f1", lang),
      active: header_url.endsWith(`/${lang}/contact`),
    },
  ];

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${manrope.variable} antialiased`}>
        <Header lang={lang} logo={logo} elements={navItems} />
        {children}
        <Footer lang={lang} />
        <FloatingActionButton />
        <Script
          defer
          src="https://umami.kago-group.com/script.js"
          data-website-id="72fd3aaa-61f1-4262-9086-429bd338467c"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
