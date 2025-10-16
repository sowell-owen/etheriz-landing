import React from "react";
import SectionTitle from "../../SectionTitle";
import { TechStackProps } from "@/types/casePage";

export default function TechStack({
  title,
  data
}:TechStackProps) {
  return (
    <div className="mt-[44px] md:mt-[60px] w-full flex flex-col gap-[24px] md:gap-[32px] md:flex-row items-start justify-between">
      <SectionTitle title={title || ""} />
      <div className="w-full md:w-[55%] flex items-center flex-wrap gap-[8px]">
        {!!data.length &&
          data.map((item, index) => (
            <div
              key={index}
              className="text-[16px] md:text-[20px] leading-[100%] text-white font-normal py-[8px] px-[16px] md:py-[12px] md:px-[24px] bg-[#AFC6FF1A] border-1 border-[#FFFFFF0D] rounded-[16px]"
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}
