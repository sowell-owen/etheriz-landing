"use client";
import Contact from "@/app/_components/Contact";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { scrollToSection } from "@/utils/scrollToSection";
import { useParams } from "next/navigation";
import React, { useRef } from "react";
import { caseData } from "../../../constants/casePage";
import Banner from "@/app/_components/sections/casePage/Banner";
import {
  BannerProps,
  DeliveredProps,
  FeedbackProps,
  OverviewProps,
  TechStackProps,
} from "@/types/casePage";
import Overview from "@/app/_components/sections/casePage/Overview";
import Delivered from "@/app/_components/sections/casePage/Delivered";
import Indicators from "@/app/_components/sections/casePage/Indicators";
import TechStack from "@/app/_components/sections/casePage/TechStack";
import Feedback from "@/app/_components/sections/casePage/Feedback";
import Image from "next/image";

export default function CasePage() {
  const params = useParams();

  const data = caseData.find(
    (item) =>
      item.banner.title
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-") === decodeURIComponent(params.id as string)
  );

  const contactRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className="flex flex-col items-center pb-[50px] pt-[155px] relative overflow-hidden"
        ref={headerRef}
      >
        <Header onClick={() => scrollToSection(contactRef)} />

        <div className="max-w-[1440px] flex flex-col items-center px-[20px] relative">
          <Image
            src={"/images/blur.svg"}
            width={100}
            height={100}
            alt="Blur"
            className="absolute w-[100%] object-cover blur-[4px] h-[1100px] top-[-155px] left-0 z-[-1]"
          />

          <Banner {...(data?.banner as BannerProps)} />
          <Indicators indicators={data?.indicators || []} />
          <Overview {...(data?.overview as OverviewProps)} />
          <Delivered {...(data?.weDelivered as DeliveredProps)} />
          <TechStack {...(data?.techStack as TechStackProps)} />
          <Feedback {...(data?.feedback as FeedbackProps)} />
        </div>
      </div>

      <div className="flex flex-col items-center w-full pt-[90px] lg:pt-[185px] relative z-[1] ">
        <div className="absolute left-0px top-[-100px] h-[800px] lg:h-[600px] lg:top-[-60px] w-full z-[0] bg-gradient-to-r from-blue-400/15 via-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute left-0px top-[-100px] h-[800px] lg:h-[600px] lg:top-[-60px] w-full z-[0] bg-gradient-to-r from-purple-500/5 via-purple-600/5 to-transparent blur-3xl"></div>
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
