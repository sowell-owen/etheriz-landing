import Image from "next/image";
import React from "react";
import SectionTitle from "../../SectionTitle";
import { FeedbackProps } from "@/types/casePage";

export default function Feedback({
  title,
  clientImg,
  name,
  jobTitle,
  description,
  stars
}:FeedbackProps) {
  return (
    <div className="mt-[44px] md:mt-[60px] gap-[44px] md:gap-[60px] w-full flex flex-col">
      <Image
        className="w-full h-[33px] object-cover sm:h-auto"
        src={"/images/caseBg.svg"}
        alt=""
        width={1000}
        height={100}
      />
      <div className="gap-[24px] md:gap-[32px] w-full flex flex-col md:flex-row items-start justify-between">
        <SectionTitle title={title || ""} />
        <div className="w-full md:w-[55%] flex flex-col gap-[12px] md:gap-[32px]">
          <div className="flex items-center gap-[6px]">
            <Image
              src={clientImg || ""}
              width={58}
              height={58}
              className="rounded-[100%]"
              alt="Client"
            />
            <div className="flex flex-col">
              <p className="font-normal text-[20px] md:text-[32px] text-white leading-[100%]">
                {name}
              </p>
              <span className="font-normal text-[16px] md:text-[20px] text-[#FFFFFF80] leading-[100%]">
                {jobTitle}
              </span>
            </div>
          </div>
          <span className="font-medium text-[#FFFFFF99] italic leading-[100%] text-[16px] md:text-[20px]">
            {description}
          </span>
          <div className="flex items-center gap-[12px] md:gap-[20px]">
            <div className="flex items-center gap-[2px] md:gap-[6px]">
              {Array.from({ length: stars || 0 }).map(
                (_, index) => (
                  <Image
                    key={index}
                    src="/images/star.svg"
                    alt="Grade"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] md:w-[32px] md:h-[32px]"
                  />
                )
              )}
            </div>
            <p className="font-medium text-white text-[14px] md:text-[20px] leadig-[100%]">
              {stars}/5
            </p>
          </div>
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
