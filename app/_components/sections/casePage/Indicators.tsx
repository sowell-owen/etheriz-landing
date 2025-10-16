import { IndicatorsProps } from "@/types/casePage";
import React from "react";

export default function Indicators({
  indicators
}:IndicatorsProps) {
  return (
    <div className="grid grid-cols-2 md:flex gap-[8px] mt-[70px] mb-[44px] md:mb-[80px] items-start w-full justify-between">
      {!!indicators.length &&
        indicators.map((item, index) => (
          <div key={index} className="text-white w-full flex flex-col">
            <p className="font-normal font-[clash] text-[40px] lg:text-[58px] leading-[110%] border-b-[1px] border-[#FFFFFF99]">
              {item.title}
            </p>
            <span className="font-normal text-[16px] lg:text-[20px] leading-[100%] text-[#FFFFFF99]">
              {item.subtitle}
            </span>
          </div>
        ))}
    </div>
  );
}
