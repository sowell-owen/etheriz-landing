import { BannerProps } from "@/types/casePage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoGlobeOutline } from "react-icons/io5";

export default function Banner({
  title = "",
  subtitle = "",
  img = "",
  link = "#",
}: BannerProps) {
  return (
    <div className="flex-1 flex flex-col-reverse md:flex-col items-center w-[100%] md:w-[80%]">
      <div className="flex flex-col items-center text-center text-white">
        <h2 className="text-[28px] md:text-[58px] leading-[110%] font-semibold font-[clash]">
          {title}
        </h2>
        <span className="mt-[12px] font-normal leading-[100%] text-[16px] md:text-[20px]">
          {subtitle}
        </span>
        {link && (
          <Link href={link}>
            <button className="cursor-pointer mt-[24px] gap-[8px] hover:bg-[#426EFF80] text-[14px] leading-[100%] md:text-[20px] font-[400] text-white bg-[#426EFF40] border-white/10 border rounded-3xl py-[12px] px-[24px] flex items-center justify-center">
              View in Web <IoGlobeOutline size={20} />
            </button>
          </Link>
        )}
      </div>
        {img && (
            <Image
        src={img}
        className="w-[100%] h-full mb-[40px]  md:mt-[40px] md:mb-[0px] rounded-[12px]"
        alt="Banner"
        width={1920}
        height={1080}
        quality={100}
        priority
        loading="eager"
      />
        )}
    </div>
  );
}
