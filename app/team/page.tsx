"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "../_components/Header";
import Contact from "../_components/Contact";
import Footer from "../_components/Footer";
import { scrollToSection } from "../../utils/scrollToSection";
import { aboutUs, team } from "../../constants/teamPage";
import SectionTitle from "../_components/SectionTitle";
import { useRouter } from "next/navigation";

const text = "text-[1.3vw] font-[400] text-white/40 pt-[12px]";

export default function Team() {
  const contactRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);
  return (
    <div
      className="container max-w-[1440px] flex flex-col flex-1 pb-[80px]"
      ref={headerRef}
    >
      <div className="bg-black flex-1 flex flex-col items-center ">
        <Header onClick={() => scrollToSection(contactRef)} />

        <div className="w-[90%] flex flex-col items-center pt-[101px]">
          <div className="flex items-center">
            <span className="text-[4vw] font-[clash]  font-[600] text-white">
              Our Team
            </span>
          </div>
          <div className="text-start w-[40vw] pt-[12px]">
            <span className={text}>
              At <span className="text-white">Etheriz</span> , we&apos;re a
              collective of{" "}
              <span className="text-white">blockchain developers</span>,
              <span className="text-white">designers, and innovators</span>{" "}
              passionate about{" "}
              <span className="text-white">
                building the decentralized future.
              </span>
            </span>
          </div>
          <div className="text-center w-[40vw]">
            <span className="text-white text-[1.3vw]">
              building the decentralized future.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[100%]">
        <div className="flex flex-row w-[90%] pt-[190px]">
          <div className="flex flex-row w-[50%] pt-[24px]">
            <div className="pt-[15px]">
              <Image
                src="/images/blueArrow.svg"
                alt="arrow"
                width={24}
                height={44}
                layout="intrinsic"
                className="rotate-180"
              />
            </div>
            <div className="pl-[12px]">
              <span className="text-[2.7vw] font-[clash]  font-[600] text-white">
                Precision in Code. Clarity in Communication. Excellence in
                Delivery.
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[50%]">
            {aboutUs.map((item) => (
              <div key={item.id} className="pt-[15px]">
                <div className="p-[22px] lg:p-[32px]  w-[100%] rounded-xl border-[1px] border-white/20 flex flex-col relative z-[1]">
                  <div className="w-[100%] h-[100%] absolute top-0 left-0 bottom-0 right-0 z-[0]">
                    <Image
                      src="/images/backForCard2.webp"
                      alt="arrow"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="z-[1]">
                    <Image
                      src={item.image}
                      alt="arrow"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className=" w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
                    />
                  </div>
                  <div className="pt-[32px] pb-[16px] z-[1]">
                    <span className="text-[2.5vw] font-[clash]  font-[500] text-white">
                      {item.title}
                    </span>
                  </div>
                  <div className="w-[70%] text-start z-[1]">
                    <span className="text-[1.3vw] font-[400] text-white/40">
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-[90%] pt-[120px]">
          <div className="flex flex-row items-center">
            <SectionTitle title="Team" twoArrow />
          </div>
        </div>
        <div className="flex flex-wrap flex-row w-[90%] pt-[120px] justify-start">
          {team.map((item) => (
            <div key={item.id} className="p-[14px] w-[33%]">
              <div className="flex flex-col items-start p-[14px] rounded-xl border-[1px] border-white/20">
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </div>

                <div className="pt-[24px]">
                  <span className="text-[2vw] font-[500] text-white">
                    {item.name}
                  </span>
                </div>
                <div>
                  <span className="text-[1.5vw] font-[400] text-white/40">
                    {item.role}
                  </span>
                </div>
                <div className="pt-[12px]">
                  <span className="text-[1.3vw] font-[400] text-white/40">
                    {item.description}
                  </span>
                </div>

                {/* <div>
                  {item.social.map((social) => (
                    <div key={social.id} className="flex s items-center">
                      {social.name}
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-full pt-[90px] lg:pt-[185px] relative z-[1] ">
        <div className="absolute left-0px top-[-200px] h-[800px] lg:h-[600px] lg:top-[-60px] w-full z-[0] bg-gradient-to-r from-blue-400/15 via-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute left-0px top-[-200px] h-[800px] lg:h-[600px] lg:top-[-60px] w-full z-[0] bg-gradient-to-r from-purple-500/5 via-purple-600/5 to-transparent blur-3xl"></div>
        <div ref={contactRef} className="w-[90%] flex justify-center">
          <Contact />
        </div>
      </div>

      <Footer onClick={() => scrollToSection(headerRef)} />
    </div>
  );
}
