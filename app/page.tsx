"use client";

import Image from "next/image";
import Header from "./_components/Header";
import { useEffect, useRef, useState } from "react";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Link from "next/link";
import CaseCards from "./_components/CaseCard";
import { scrollToSection } from "../utils/scrollToSection";
import { ourCases } from "../constants/casesPage";
import { data } from "../constants/homePage";
import SectionTitle from "./_components/SectionTitle";
import OurExpertise from "./_components/sections/home/OurExpertise";
import BrandsRunningLine from "./_components/sections/home/BrandsRunningLine";
import BannerVideo from "./_components/sections/home/BannerVideo";

export default function Home() {
  const [isOffScreen, setIsOffScreen] = useState<Record<string, boolean>>({});
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [isMobile, setIsMobile] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const casesToShow = isMobile ? ourCases.data.slice(0, 3) : ourCases.data;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedOffScreen: Record<string, boolean> = {};
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (id !== null) {
            updatedOffScreen[id] = entry.intersectionRatio < 0.6;
          }
        });
        setIsOffScreen((prev) => ({ ...prev, ...updatedOffScreen }));
      },
      { root: null, threshold: 0.6 }
    );

    Object.keys(cardRefs.current).forEach((id) => {
      const card = cardRefs.current[id];
      if (card) {
        card.setAttribute("data-id", id);
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="w-full relative flex flex-col flex-1 overflow-hidden "
      >
        <div className="relative w-screen overflow-visible z-[0]">
          <div className="flex absolute w-screen sm:right-1/2 sm:translate-x-1/2 sm:w-[1300px] md:w-[1440px]">
            <BannerVideo />
          </div>
        </div>

        <Header onClick={() => scrollToSection(contactRef)} />

        <div className="flex-1 relative flex flex-col pt-[410px] sm:pt-[450px] md:pt-[500px]">
          <div className="text-center text-[28px] md:text-[58px] font-[clash] font-[600] text-white w-full sm:w-[70%] md:w-[90%] px-10 xl:w-[70%] self-center mb-3 leading-[110%]">
            {data.banner.title}
          </div>
          <p
            className=" text-white/40 text-[15px] sm:text-[20px] font-[400] text-center w-[90%] sm:w-[40%] md:w-[70%] lg:w-[40%] self-center mb-8 leading-[100%] [&>span]:text-white [&>span]:opacity-100"
            dangerouslySetInnerHTML={{ __html: data.banner.subtitle }}
          ></p>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="cursor-pointer self-center flex text-[16px] sm:text-[20px] font-[400] items-center pl-6 gap-3  p-3 bg-white rounded-full hover:opacity-60"
          >
            {data.banner.btn}
            <Image
              src="/images/etherBlue.svg"
              alt="Ether"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="flex relative max-w-[1440px] mx-auto mb-[60px] lg:mb-[180px] flex-col justify-center items-center w-full pt-[29px] md:pt-[36px] ">
          <BrandsRunningLine brands={data.brands} />

          <div className="hidden sm:flex z-0 w-full h-full overflow-hidden absolute items-center justify-center  top-0 -right-1/3 bottom-0">
            <Image
              src="/images/Ell.svg"
              alt="bg"
              fill
              className="object-contain scale-150"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between relative px-[20px] lg:gap-[100px]">
            <div className="flex flex-col w-full ">
              <SectionTitle title={data.etherisInfo.title} className="mb-3" />
              <p className="text-[16px] sm:text-[20px] mb-[24px] md:mb-[44px] max-w-4/5 font-[400] text-white/60 leading-[100%]">
                {data.etherisInfo.subtitle}
              </p>
              <div className="flex gap-3 max-w-[412px] border border-white/5 mb-[60px] lg:mb-0 self-start flex-row items-center bg-[#AFC6FF1A] rounded-[24px] p-3 ">
                <Image
                  src="/images/roundedStar.svg"
                  alt="svg"
                  width={0}
                  height={0}
                  sizes="100%"
                  className=" size-[36px] sm:size-[48px]"
                />

                <span className="text-[14px] sm:text-[20px]  font-[400] text-white leading-[110%]">
                  {data.etherisInfo.descr}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-[8px] gap-y-[24px] lg:gap-y-[36px] w-full lg:w-1/2">
              {data.etherisInfo.info.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full text-start lg:text-end"
                >
                  <p className="font-[clash] font-[400] text-[40px] md:text-[58px] border-b-1 leading-[110%] border-[#FFFFFF99] w-full text-white">
                    {item.title}
                  </p>
                  <span className="w-full mt-[12px] font-normal text-[16px] md:text-[20px] text-white/60 leading-[100%]">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <OurExpertise data={data.ourExpertise} />

        <div className="relative z-0 flex justify-center items-center w-full   pb-[90px] lg:pb-[141px]">
          <div className="absolute sm:block bottom-0 z-10 top-0  left-0 -translate-x-1/2 flex items-center justify-center ">
            <Image
              src="/images/Ell.svg"
              alt="bg"
              width={0}
              height={0}
              sizes="auto"
              className="max-w-full  w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-row w-full relative z-10">
            <div className="flex flex-col items-center w-full ">
              <div className="flex flex-row items-center justify-between w-[90%]">
                <div className="flex w-full flex-col-reverse lg:gap-6 lg:flex-row items-start lg:items-center mb-6">
                  <SectionTitle
                    title={data.ourCases.title}
                    label={data.ourCases.label}
                  />
                  <Link href={"/cases"}>
                    <button className="cursor-pointer lg:flex hidden text-[14px] ml-auto md:text-[20px] font-[400] text-white  rounded-4xl border-[1px] border-[#426EFF] py-[6px] px-[12px] lg:py-[12px] lg:px-[24px] items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#426EFF] hover:shadow-[0_0_12px_#426EFF88] hover:text-white">
                      {data.ourCases.btn} &#8594;
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-row items-stretch  sm:w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                <div className="flex flex-col md:flex-row items-stretch px-[20px]">
                  {casesToShow.map((ourCase) => (
                    <CaseCards
                      key={ourCase.id}
                      cardRefs={cardRefs}
                      data={ourCase}
                      hoverable={true}
                      isOffScreen={isOffScreen[ourCase.id.toString()]}
                    />
                  ))}
                  <Link href={"/cases"} className="flex md:hidden mt-[24px]">
                    <button className="w-[80%] mx-auto cursor-pointer text-[16px] font-[400] text-white rounded-4xl border-[1px] border-[#426EFF] py-[16px] transition-all duration-300 ease-in-out hover:bg-[#426EFF] hover:shadow-[0_0_12px_#426EFF88] hover:text-white">
                      {data.ourCases.mobileBtn} &#8594;
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative z-20 flex justify-center">
          <div className="flex flex-col items-start sm:items-center w-[90%] sm:w-full relative z-[1]">
            {/* <div className="absolute sm:block top-[-25%] left-0 right-0 flex items-center justify-center z-[0] ">
              <Image
                src="/images/bgBlockCenter.webp"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div> */}
            <div className="flex flex-row items-center z-[1]">
              <SectionTitle title={data.workProcess.title} twoArrow />
            </div>

            <div className="lg:flex hidden w-full flex-col justify-center items-center pt-[121px] relative">
              <div className="w-full flex flex-col justify-center items-center relative pt-[90px] lg:pt-[121px] pb-[10px]">
                <Image
                  src="/images/snake.webp"
                  alt=""
                  layout="intrinsic"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "70vw",
                    height: "auto",
                  }}
                />
                <div className="absolute top-[21%] right-[18%] ">
                  <div className="flex justify-center items-center w-[30vw]">
                    <Image
                      src="/images/stages/iconFind.svg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                <div className="absolute top-[47%] left-[18%] ">
                  <div className="flex justify-center items-center w-[30vw]">
                    <Image
                      src="/images/stages/iconGrafic.svg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                <div className="absolute top-[72%] right-[18%] ">
                  <div className="flex justify-center items-center w-[30vw]">
                    <Image
                      src="/images/stages/iconTeg.svg"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                <div className="absolute md:flex hidden top-[35%] h-[70vh] bottom-0 right-0 items-center justify-center z-[0] w-[50vw] bg-gradient-to-l from-blue-500/10 via-blue-500/10 to-transparent blur-3xl"></div>
                <div className="absolute md:flex hidden top-[35%] h-[70vh] bottom-0 right-0 items-center justify-center z-[0] w-[50vw] bg-gradient-to-l from-purple-500/5 via-purple-600/5 to-transparent blur-[120px]"></div>

                <div className="absolute md:flex hidden top-[17%] h-[170vh] bottom-0 left-0 items-center justify-center z-[0] w-[70vw] bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-transparent blur-3xl"></div>
                <div className="absolute md:flex hidden top-[17%] h-[170vh] bottom-0 left-0 items-center justify-center z-[0] w-[70vw] bg-gradient-to-r from-purple-500/5 via-purple-600/5 to-transparent blur-3xl"></div>

                <div className="absolute bg-gradient-to-b from-transparent to-black/40 rounded-4xl py-2 -top-[2%] flex flex-col justify-center items-center">
                  <div className=" flex flex-col justify-center items-center  w-full">
                    <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                      {data.workProcess.stage1.label}
                    </button>
                    <div className="py-[6px] lg:py-[12px]">
                      <span className="text-[24px] md:text-[40px] leading-[110%] font-[clash]  font-[600] text-white">
                        {data.workProcess.stage1.title}
                      </span>
                    </div>
                    <p className="text-[14px] md:text-[20px] text-center w-1/2 font-[400] leading-[100%] text-white/60 ">
                      {data.workProcess.stage1.subtitle}
                    </p>
                  </div>
                </div>

                <div className="absolute top-[24%] w-1/3 flex flex-col items-start lg:top-[23%] bg-gradient-to-b from-transparent to-black/40 rounded-4xl py-2 left-[6.5%] ">
                  <div className="flex flex-col items-center ">
                    <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                      {data.workProcess.stage2.label}
                    </button>

                    <div className="py-[6px] lg:py-[12px]">
                      <span className="text-[24px] md:text-[40px] leading-[110%] font-[clash]  font-[600] text-white">
                        {data.workProcess.stage2.title}
                      </span>
                    </div>
                    <p className="text-[14px] md:text-[20px] leading-[100%] text-center font-[400] text-white/60 ">
                      {data.workProcess.stage2.subtitle}
                    </p>
                  </div>
                </div>

                <div className="absolute top-[48%] right-[6.5%] bg-gradient-to-b from-transparent to-black/40 rounded-4xl py-2">
                  <div className="flex flex-col text-center items-center w-[30vw]">
                    <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                      {data.workProcess.stage3.label}
                    </button>
                    <div className="py-[12px]">
                      <span className="text-[24px] md:text-[40px] leading-[110%]  font-[clash]  font-[600] text-white">
                        {data.workProcess.stage3.title}
                      </span>
                    </div>
                    <p className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white/60 ">
                      {data.workProcess.stage3.subtitle}
                    </p>
                  </div>
                </div>

                <div className="absolute top-[72%] left-[6.5%] bg-gradient-to-b from-transparent to-black/40 rounded-4xl py-2">
                  <div className="flex flex-col text-center items-center w-[30vw]">
                    <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                      {data.workProcess.stage4.label}
                    </button>
                    <div className="py-[12px]">
                      <span className="text-[24px] md:text-[40px] leading-[110%] font-[clash]  font-[600] text-white">
                        {data.workProcess.stage4.title}
                      </span>
                    </div>
                    <p className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white/60 ">
                      {data.workProcess.stage4.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center w-[28vw]">
                <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                  {data.workProcess.stage5.label}
                </button>
                <div className="py-[12px]">
                  <span className="text-[24px] md:text-[40px] leading-[110%] font-[clash]  font-[600] text-white">
                    {data.workProcess.stage5.title}
                  </span>
                </div>
                <p className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white/60">
                  {data.workProcess.stage5.subtitle}
                </p>
              </div>
            </div>

            <div className="lg:hidden w-full flex flex-col  pt-[43px] sm:px-[20px]">
              <div className="flex flex-col items-start">
                <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                  {data.workProcess.stage1.label}
                </button>
                <div className="py-[12px]">
                  <span className="text-[24px] md:text-[40px] leading-[110%] font-[clash]  font-[600] text-white">
                    {data.workProcess.stage1.title}
                  </span>
                </div>
                <div className="text-start">
                  <span className="md:text-[20px] text-[14px] font-[400] text-white/60 leading-[100%]">
                    {data.workProcess.stage1.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex flex-row  items-center pt-[8px]">
                <div className="w-[25%]">
                  <Image
                    src="/images/pipe.webp"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="w-[75%]">
                  <Image
                    src="/images/stages/iconFind.svg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start pt-[8px]">
                <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                  {data.workProcess.stage2.label}
                </button>
                <div className="py-[12px]">
                  <span className="text-[24px] md:text-[40px] leading-[110%] font-[clash] font-[600] text-white">
                    {data.workProcess.stage2.title}
                  </span>
                </div>
                <div className="text-start">
                  <span className="md:text-[20px] text-[14px] font-[400] text-white/60 leading-[100%]">
                    {data.workProcess.stage2.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex flex-row  items-center pt-[8px]">
                <div className="w-[25%]">
                  <Image
                    src="/images/pipe.webp"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="w-[75%]">
                  <Image
                    src="/images/stages/iconGrafic.svg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start pt-[8px]">
                <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                  {data.workProcess.stage3.label}
                </button>
                <div className="py-[12px]">
                  <span className="text-[24px] md:text-[40px] leading-[110%] font-[clash]  font-[600] text-white">
                    {data.workProcess.stage3.title}
                  </span>
                </div>
                <div className="text-start">
                  <span className="md:text-[20px] text-[14px] font-[400] text-white/60 leading-[100%]">
                    {data.workProcess.stage3.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex flex-row  items-center pt-[8px]">
                <div className="w-[25%]">
                  <Image
                    src="/images/pipe.webp"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="w-[75%]">
                  <Image
                    src="/images/stages/iconTegMobile.svg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start pt-[8px]">
                <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                  {data.workProcess.stage4.label}
                </button>
                <div className="py-[12px]">
                  <span className="text-[24px] md:text-[40px] leading-[110%] font-[clash]  font-[600] text-white">
                    {data.workProcess.stage4.title}
                  </span>
                </div>
                <div className="text-start">
                  <span className="md:text-[20px] text-[14px] font-[400] text-white/60 leading-[100%]">
                    {data.workProcess.stage4.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex flex-row  items-center pt-[8px]">
                <div className="w-[25%]">
                  <Image
                    src="/images/pipe.webp"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="w-[75%]"></div>
              </div>
              <div className="flex flex-col items-start pt-[8px]">
                <button className="text-[14px] md:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] md:py-3 md:px-6 px-3  flex items-center justify-center">
                  {data.workProcess.stage5.label}
                </button>
                <div className="py-[12px]">
                  <span className="text-[24px] md:text-[40px] leading-[110%]  font-[clash]  font-[600] text-white">
                    {data.workProcess.stage5.title}
                  </span>
                </div>
                <div className="text-start">
                  <span className="md:text-[20px] text-[14px] font-[400] text-white/60 leading-[100%]">
                    {data.workProcess.stage5.subtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full pt-[90px] lg:pt-[185px] relative z-[1] ">
          <div className="absolute left-0px top-[-200px] h-[800px] lg:h-[600px] lg:top-[-60px] w-full z-[0] bg-gradient-to-r from-blue-500/15 via-blue-500/10 to-transparent blur-3xl"></div>
          <div className="absolute left-0px top-[-200px] h-[800px] lg:h-[600px] lg:top-[-60px] w-full z-[0] bg-gradient-to-r from-purple-500/5 via-purple-600/5 to-transparent blur-3xl"></div>
          <div ref={contactRef} className="w-[90%] flex justify-center z-[2]">
            <Contact />
          </div>
        </div>

        <Footer onClick={() => scrollToSection(headerRef)} />
      </div>
    </>
  );
}
