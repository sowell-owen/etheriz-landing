"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "../_components/Header";
import Contact from "../_components/Contact";
import Footer from "../_components/Footer";
import CaseCards from "../_components/CaseCard";
import { scrollToSection } from "../../utils/scrollToSection";
import { ourCases } from "../../constants/casesPage";
import Image from "next/image";

export default function Cases() {
  const contactRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-col flex-1 relative overflow-hidden"
        ref={headerRef}
      >
        <Header onClick={() => scrollToSection(contactRef)} />

        <div className="flex-1 flex flex-col items-center container mx-auto max-w-[1440px] relative">
          <Image
            src={"/images/blur.svg"}
            width={100}
            height={100}
            alt="Blur"
            className="absolute w-[100vw] object-cover blur-[4px] h-[1100px] top-0 left-0 z-[-1]"
          />

          <div className="w-[90%] flex flex-col items-center pt-[101px]">
            <div className="flex items-center">
              <span className="text-[32px] md:text-[58px] font-[clash] leading-[110%] font-semibold text-white">
                {ourCases.banner.title}
              </span>
            </div>
            <span className="text-[16px] md:text-[20px] w-full md:w-[46%] font-[400] leading-[100%] text-white/40 pt-[12px] flex flex-col text-center">
              <span className="text-white">{ourCases.banner.subtitle}</span>
              <div
                dangerouslySetInnerHTML={{ __html: ourCases.banner.descr }}
              />
            </span>
          </div>
          <div className="flex flex-col z-1 items-stretch px-[20px] mt-[45px] md:mt-[90px] xl:mt-[101px] w-[100%] gap-[10px]">
            {ourCases.data.map((ourCase) => (
              <CaseCards
                key={ourCase.id}
                data={ourCase}
                hoverable={width < 1100}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full pt-[90px] lg:pt-[185px] relative z-[1] ">
        <div className="absolute left-0px top-[-200px] h-[800px] lg:h-[550px] lg:top-[60px] w-full z-[0] bg-gradient-to-r from-blue-400/10 via-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute left-0px top-[-200px] h-[800px] lg:h-[550px] lg:top-[60px] w-full z-[0] bg-gradient-to-r from-purple-500/5 via-purple-600/5 to-transparent blur-3xl"></div>
        <div
          ref={contactRef}
          className="flex-col items-center w-[90%] flex justify-between"
        >
          <Contact />
          <Footer onClick={() => scrollToSection(headerRef)} />
        </div>
      </div>
    </>
  );
}
