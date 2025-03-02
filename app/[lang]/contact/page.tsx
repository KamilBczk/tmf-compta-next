"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CgSmartphone, CgPin, CgMail } from "react-icons/cg";
import Banner from "@/components/Banner";
import { translate } from "@/functions/translate";
import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import banner from "@/assets/contact/banner.png";
import { useSearchParams } from "next/navigation";

const createContactSchema = (lang: string) =>
  z.object({
    lastname: z
      .string()
      .min(1, translate("0f03549c-fcae-4a71-baf2-b9051e326e93", lang)),
    firstname: z
      .string()
      .min(1, translate("79ea9c3f-f705-4ea6-9215-21854187db36", lang)),
    email: z
      .string()
      .email(translate("0a8b972e-0cb1-488d-ba16-4402158fce65", lang))
      .min(1, translate("8ae77343-82df-4fcb-8f97-8fb8b5febcf6", lang)),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z
      .string()
      .min(1, translate("c289e764-a39b-491f-9114-eb2fbd6b3d3e", lang)),
  });

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
interface ContactProps {
  params: Promise<{
    lang: string;
  }>;
}

function Contact({ params }: ContactProps) {
  const resolvedParams = React.use(params);
  const { lang } = resolvedParams;
  const searchParams = useSearchParams();
  const prefillEmail = searchParams.get("email") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(createContactSchema(lang)),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstname,
          lastName: data.lastname,
          email: data.email,
          phone: data.phone || "",
          company: data.company || "",
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error(translate("error-sending-message", lang));
      }

      toast.success(translate("33abe4ad-df62-40c7-b218-732fbb64d384", lang), {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      reset();
    } catch (error) {
      console.error(error);
      toast.error(translate("94ad3ec6-bcaf-4ffa-959a-ca4e1ea414a3", lang), {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Banner
          title={translate("34db7e00-fd9d-44bd-9a7c-a16c9341c8f1", lang)}
          image={banner}
        />
      </motion.div>
      <Wrapper small={true}>
        <motion.div
          className="my-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl text-left font-normal">
            <span>
              {translate("f34cccae-4156-4cce-b3a9-0c0a21532111", lang)}
            </span>
            <span className="text-[#002859] font-medium">
              {translate(
                "34db7e00-fd9d-44bd-9a7c-a16c9341c8f1",
                lang
              ).toLowerCase()}
            </span>
          </h3>
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="flex gap-4">
                  <div className="w-full">
                    <label htmlFor="lastname" className="block mb-1">
                      {translate("979d9439-7a8f-4006-8f61-787922efd76b", lang)}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("lastname")}
                      id="lastname"
                      type="text"
                      placeholder="Doe"
                      className={`w-full p-3 border rounded ${
                        errors.lastname ? "border-red-500" : ""
                      }`}
                    />
                    {errors.lastname && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastname.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="firstname" className="block mb-1">
                      {translate("53d77f6b-e12a-433c-87ef-97abc73f0a7e", lang)}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("firstname")}
                      id="firstname"
                      type="text"
                      placeholder="John"
                      className={`w-full p-3 border rounded ${
                        errors.firstname ? "border-red-500" : ""
                      }`}
                    />
                    {errors.firstname && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstname.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <label htmlFor="email" className="block mb-1">
                      {translate("08fb3c72-b701-4238-858e-54a2e8f5fe9b", lang)}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder="john.doe@gmail.com"
                      defaultValue={prefillEmail}
                      className={`w-full p-3 border rounded ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="block mb-1">
                      {translate("e49b81f6-0b9e-48eb-ba84-423ca148e42d", lang)}
                    </label>
                    <input
                      {...register("phone")}
                      id="phone"
                      type="tel"
                      placeholder="0484446998"
                      className="w-full p-3 border rounded"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block mb-1">
                    {translate("63ab02cc-6b83-4d7f-a02f-9965b3772a93", lang)}
                  </label>
                  <input
                    {...register("company")}
                    id="company"
                    type="text"
                    placeholder="TMF Compta"
                    className="w-full p-3 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    {translate("52d0bc43-749e-4f58-aab6-59fe8fd7bc51", lang)}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    className={`w-full p-3 border rounded h-32 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#002859] text-white py-3 px-6 rounded hover:bg-opacity-90 transition-all"
                >
                  {translate("e0b576b6-f0a3-4a5a-aef8-0184234fae25", lang)}
                </button>
              </form>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <iframe
                height="250"
                width="100%"
                loading="lazy"
                className="w-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10070.93994200018!2d4.4855783!3d50.8731058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dcacc3b35dad%3A0x3fea5054a36896de!2sTMF%20Compta!5e0!3m2!1sfr!2sbe!4v1682965907037!5m2!1sfr!2sbe"
              ></iframe>
              <div className="flex flex-col gap-4 mt-8">
                <motion.div
                  className="flex gap-4 items-center text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="bg-[#002859] w-10 h-10 rounded-full text-white flex items-center justify-center">
                    <CgPin size={20} />
                  </div>
                  <a
                    href="https://g.co/kgs/H12xX9a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sterrebeekstraat 154, 1930 Zaventem
                  </a>
                </motion.div>
                <motion.div
                  className="flex gap-4 items-center text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="bg-[#002859] w-10 h-10 rounded-full text-white flex items-center justify-center">
                    <CgSmartphone size={20} />
                  </div>
                  <a href="tel:+3227058099">+32 (0)27 05 80 99</a>
                </motion.div>
                <motion.div
                  className="flex gap-4 items-center text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="bg-[#002859] w-10 h-10 rounded-full text-white flex items-center justify-center">
                    <CgMail size={20} />
                  </div>
                  <a href="mailto:info@tmfcompta.be">info@tmfcompta.be</a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Wrapper>
    </div>
  );
}

export default Contact;
