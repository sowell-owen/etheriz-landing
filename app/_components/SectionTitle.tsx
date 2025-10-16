import Image from "next/image";
import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
  twoArrow?: boolean;
  label?: string;
}
export default function SectionTitle({
  title,
  className,
  twoArrow = false,
  label,
}: SectionTitleProps) {
  return (
    <div className={`${className} flex flex-col-reverse lg:flex-row  gap-[8px] sm:gap-[24px] items-start lg:items-center`}>
      <div
        className='flex items-center gap-[12px] font-[clash] text-[28px] md:text-[40px] lg:text-[58px]'
      >
        <Image
          src="/images/blueArrow.svg"
          alt="Next.js logo"
          width={0}
          height={0}
          sizes="100%"
          className="rotate-180 w-[14px] md:w-[20px] lg:w-[30px] "
        />
        <p className="text-white font-semibold leading-[110%]">{title}</p>
        {twoArrow && (
          <Image
            src="/images/blueArrow.svg"
            alt="Next.js logo"
            width={0}
            height={0}
            sizes="100%"
            className="rotate-[180] w-[14px] md:w-[20px] lg:w-[30px]"
          />
        )}
      </div>
      {label && (
        <button className="text-[14px] md:text-[20px] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[6px] px-[12px] md:py-[12px] md:px-[24px]">
          {label}
        </button>
      )}
    </div>
  );
}
