"use client";
import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { contactForm } from "@/constants/contactForm";

export default function Contact() {
  const [isEmail, setIsEmail] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isText, setIsText] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (success) {
      setSuccess(false);
      return;
    }

    setLoading(true);
    setError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email is incorrect");
      setLoading(false);
      setEmail("");
      return;
    }
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, description }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Error submitting form");
      }

      setSuccess(true);
      setEmail("");
      setName("");
      setDescription("");
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[1440px] flex flex-col sm:flex-row  justify-center w-[100%] z-[1]">
      <div className="flex z-1 flex-col w-[100%] sm:w-[50%]">
        <div className="flex flex-col">
          <SectionTitle title={contactForm.title} />
          <div className="flex flex-col w-[100%] sm:w-[90%] pt-[12px] z-[1]">
            <span className="text-[16px] md:text-[20px] font-[400] text-white/60 leading-[100%]">
              {contactForm.subtitle}
            </span>
            <span className="text-[16px] md:text-[20px] font-[400] text-white/60 pt-0 sm:pt-[12px] leading-[100%]">
              {contactForm.descr}
            </span>
          </div>
        </div>
      </div>
      <div className="flex z-1 justify-center sm:justify-end w-[100%] sm:w-[40%] pt-[24px] sm:pt-[0px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[100%] sm:w-[100%] bg-[#AFC6FF1A] rounded-3xl p-[12px]"
        >
          {success ? (
            <div className="flex flex-col items-center text-center gap-[16px] px-[32px] py-[32px] lg:py-[64px]">
              <Image
                src="/images/done.svg"
                width={40}
                height={40}
                alt="Form sent!"
              />
              <p className="font-normal text-white text-[20px]">
                {contactForm.successForm}
              </p>
            </div>
          ) : (
            <>
              <div className="pb-[12px]">
                <div
                  className={`p-[6px] group transition-all lg:p-[12px] flex flex-row items-center ${
                    isEmail ? " bg-[#AFC6FF1A] " : " bg-[#AFC6FF0D] "
                  } rounded-xl  lg:rounded-3xl w-full`}
                >
                  <div className="w-[10%] flex items-center justify-center">
                    <Image
                      src={
                        error
                          ? "/images/cyrcleMailRed.svg"
                          : "/images/cyrcleMail.svg"
                      }
                      alt="mail"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder={error ? error : "email@example.com"}
                      className={`${
                        error && "!text-red-500"
                      } text-[16px] sm:text-[20px] font-[400] text-white w-[100%] p-[6px] leading-[100%] lg:p-[12px] focus:outline-none focus:border-none`}
                      onFocus={() => setIsEmail(true)}
                      onBlur={() => setIsEmail(false)}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(null);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pb-[12px]">
                <div
                  className={`p-[6px] lg:p-[12px] group  transition-all flex flex-row items-center ${
                    isName ? " bg-[#AFC6FF1A] " : " bg-[#AFC6FF0D] "
                  } rounded-xl  lg:rounded-3xl w-full`}
                >
                  <div className="w-[10%] flex items-center justify-center">
                    <Image
                      src="/images/cyrcleFace.svg"
                      alt="mail"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="text-[16px] sm:text-[20px] leading-[100%] font-[400] text-white w-[100%]  p-[6px] lg:p-[12px] focus:outline-none focus:border-none"
                      onFocus={() => setIsName(true)}
                      onBlur={() => setIsName(false)}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setError(null);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pb-[12px]">
                <div
                  className={`p-[6px] lg:p-[12px] flex flex-row  ${
                    isText ? " bg-[#AFC6FF1A] " : " bg-[#AFC6FF0D] "
                  }rounded-xl  lg:rounded-3xl w-[100%]`}
                >
                  <div className="w-[10%] pt-[12px] sm:pt-[5px]">
                    <Image
                      src="/images/cyrcleHelp.svg"
                      alt="mail"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="w-[90%] pt-1">
                    <textarea
                      placeholder="Describe your question/proposal"
                      className="text-[16px] sm:text-[20px] leading-[100%] resize-none  font-[400] text-white w-[100%] p-[6px] lg:p-[12px] focus:outline-none focus:border-none min-h-[170px] sm:min-h-[auto]"
                      onFocus={() => setIsText(true)}
                      onBlur={() => setIsText(false)}
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        setError(null);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-row justify-center items-center">
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer self-center flex font-medium leading-[100%] items-center justify-center gap-1 text-[16px] sm:text-[20px] !py-[14px] xl:!py-[24]  lg:p-3 bg-white rounded-full hover:opacity-60 w-[100%]"
            >
              {success ? (
                <>
                  <p className="font-medium">{contactForm.anotherRequestBtn}</p>
                  <Image
                    src="/images/arrowCircle.svg"
                    alt="Ether"
                    width={20}
                    height={20}
                  />
                </>
              ) : (
                <>
                  <p className="font-medium">
                    {loading ? "Sending..." : `${contactForm.btn}`}
                  </p>
                  <Image
                    src="/images/etherBlue.svg"
                    alt="Ether"
                    width={24}
                    height={24}
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
