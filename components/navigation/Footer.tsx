"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Wrapper from "../Wrapper";
import { translate } from "@/functions/translate";

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const pathname = usePathname();
  const isContactPage = pathname.endsWith("/contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    if (email) {
      const encodedEmail = encodeURIComponent(email.toString());
      window.location.href = `/${lang}/contact?email=${encodedEmail}`;
    }
  };

  return (
    <>
      {!isContactPage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="my-24 sm:my-32 md:my-48 px-4 sm:px-0"
        >
          <div className="mx-auto max-w-xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold relative text-center"
            >
              {translate("6d4142f7-27cb-4189-be6b-6f78b89f5659", lang)}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-xs sm:text-sm md:text-base text-center"
            >
              {translate("f3a9a22f-e9ca-4736-be39-c8040fa2ed64", lang)}
            </motion.p>
            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row mt-6 sm:mt-8 gap-4 sm:gap-0"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-[#193175] border"
                />
                <div className="sm:ml-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-block py-3 px-6 bg-[#193175] text-white border transition-all hover:bg-blue-900 rounded-lg"
                  >
                    {translate("e0b576b6-f0a3-4a5a-aef8-0184234fae25", lang)}
                  </button>
                </div>
              </motion.div>
            </form>
          </div>
        </motion.div>
      )}
      <div className="bg-[#193175]">
        <Wrapper>
          <div className="px-4 sm:px-8 md:px-12 py-8">
            <div className="flex flex-col items-center">
              <div className="text-center">
                <p>
                  <span className="text-xs uppercase tracking-wide text-gray-100">
                    {translate("4cb3f1f3-37dd-4f7b-847b-473b6ff9441d", lang)}
                  </span>

                  <a
                    href="mailto:info@tmfcompta.be"
                    className="block text-lg sm:text-xl md:text-3xl font-medium text-white hover:opacity-75"
                  >
                    info@tmfcompta.be
                  </a>
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 text-white">
                <div>
                  <ul className="mt-6 text-sm sm:text-base flex flex-wrap justify-center gap-4">
                    {[
                      {
                        href: `/${lang}`,
                        text: translate(
                          "1635f5c3-7f8a-42cd-a3b2-444c279f0b7c",
                          lang
                        ),
                      },
                      {
                        href: `/${lang}/services`,
                        text: translate(
                          "9e52e1ec-ec33-4e9b-a6f8-6b9165411c1f",
                          lang
                        ),
                      },
                      {
                        href: `/${lang}/projects`,
                        text: translate(
                          "2ce9c735-c131-40bb-833d-5f1d16447c1c",
                          lang
                        ),
                      },
                      {
                        href: `/${lang}/contact`,
                        text: translate(
                          "34db7e00-fd9d-44bd-9a7c-a16c9341c8f1",
                          lang
                        ),
                      },
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="transition hover:opacity-75"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 border-t border-gray-100 pt-8 sm:pt-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                <ul className="flex flex-wrap justify-center sm:justify-start gap-4 text-base">
                  <li className="text-gray-100">
                    {"Website by "}
                    <a
                      href="https://kago-group.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-100 transition hover:opacity-75"
                    >
                      <span className="underline">Kago Group</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://kago-group.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-100 transition hover:opacity-75"
                    >
                      {translate("dd7f6812-7a06-4d4e-b9b5-ab9848293664", lang)}
                    </a>
                  </li>
                </ul>

                <p className="text-base text-gray-100 text-center sm:text-left">
                  &copy; 2023-2025. TMF Compta. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
