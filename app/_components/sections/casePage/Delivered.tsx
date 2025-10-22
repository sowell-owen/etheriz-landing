import Image from "next/image";
import React from "react";
import SectionTitle from "../../SectionTitle";
import { DeliveredProps } from "@/types/casePage";

export default function Delivered({
  title,
  challenge,
  result
}:DeliveredProps) {
  return (
    <div className="mt-[44px] md:mt-[60px] gap-[44px] md:gap-[60px] w-full flex flex-col">
      <Image
        className="w-full h-[33px] object-cover sm:h-auto"
        src={"/images/caseBg.svg"}
        alt=""
        width={1000}
        height={100}
      />
      <div className="gap-[24px] md:gap-[32px] w-full flex flex-col lg:flex-row items-start">
        <SectionTitle title={title || ""} />
        <div className="w-full grid grid-cols-2">
          <div className="col-span-1 border-r border-[#252525] ">
            <p className="flex items-center gap-[6px] md:gap-[10px] leading-[100%] text-white font-medium text-[20px] md:text-[32px] py-[8px] px-[12px] md:py-[16px] md:px-[20px]">
              <Image
                src="/images/error.svg"
                className="w-[20px] md:w-[38px] h-[20px] md:h-[38px]"
                width={38}
                height={38}
                alt="Error"
              />
              {challenge?.title}
            </p>
          </div>
          <div className="col-span-1">
            <p className="flex items-center gap-[6px] md:gap-[10px] leading-[100%] text-white font-medium text-[20px] md:text-[32px] py-[8px] px-[12px] md:py-[16px] md:px-[20px]">
              <Image
                src="/images/check_circle.svg"
                className="w-[20px] md:w-[38px] h-[20px] md:h-[38px]"
                width={38}
                height={38}
                alt="Success"
              />
              {result.title}
            </p>
          </div>
          {!!challenge?.data?.length &&
            challenge.data.map((item, index) => (
              <React.Fragment key={index}>
                <div className="border-t border-r border-[#252525] leading-[100%] px-[12px] py-[8px] md:px-[20px] md:py-[16px] text-[14px] md:text-[20px] font-normal text-[#FFFFFF99]">
                  {item}
                </div>
                <div className="border-t border-[#252525] px-[12px] leading-[100%] py-[8px] md:px-[20px] md:py-[16px] text-[14px] md:text-[20px] font-normal text-[#FFFFFF99]">
                  {result.data[index] ?? ""}
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
      <Image
        className="w-full h-[33px] object-cover sm:h-auto"
        src={"/images/caseBg.svg"}
        alt=""
        width={1000}
        height={100}
      />
    </div>
  );
}
