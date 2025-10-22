import Image from "next/image";
import React from "react";
import SectionTitle from "../../SectionTitle";
import { OverviewProps } from "@/types/casePage";

export default function Overview({ title, description, imgs }: OverviewProps) {
  return (
    <div className="w-full flex flex-col gap-[30px] md:gap-[60px]">
      <Image
        className="w-full h-[33px] object-cover sm:h-auto "
        src={"/images/caseBg.svg"}
        alt=""
        width={1000}
        height={100}
      />
      <div className="flex flex-col md:flex-row items-start justify-between gap-[12px]">
        <SectionTitle title={title || ""} />
        <span className="text-[16px] md:text-[24px] leading-[100%] w-full md:w-[55%] font-normal text-[#FFFFFF99]">
          {description}
        </span>
      </div>
      <Image
        className="w-full h-[33px] object-cover sm:h-auto"
        src={"/images/caseBg.svg"}
        alt=""
        width={1000}
        height={100}
      />
      <div className="custom-scrollbar flex w-full flex-row overflow-auto gap-[12px] lg:gap-[60px]">
        {imgs && !!imgs.length &&
          imgs.map((item, index) => (
            <Image
              src={item}
              className="w-[80%] h-[100%] rounded-[12px]"
              width={1920}
              height={1080}
              quality={100}
              priority
              key={index}
              alt="img"
            />
          ))}
      </div>
    </div>
  );
}
