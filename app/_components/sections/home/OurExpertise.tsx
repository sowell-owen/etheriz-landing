import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "../../SectionTitle";
import Image from "next/image";

interface OurExpertiseItem {
  title: string;
  icon: string;
  bg: string;
  description: string;
  id: number;
}
interface OurExpertiseProps {
  data: {
    title: string;
    label: string;
    expertiseData: OurExpertiseItem[];
  };
}

export default function OurExpertise({ data }: OurExpertiseProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 970px)");
    setIsDesktop(mediaQuery.matches);

    const handler = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleAccordionClick = (id: number) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex relative flex-col w-full px-5 mb-[60px] lg:mb-[140px] max-w-[1440px] mx-auto">
      <SectionTitle
        title={data.title}
        label={data.label}
        className="mb-[24px]"
      />

      {isDesktop ? (
        <div className="flex justify-between w-full">
          {data.expertiseData.map((expertise, index) => (
            <div
              key={expertise.id}
              className={`group cursor-pointer w-[25%] transition-all duration-300 px-[5px] ${
                isHovered === index && " w-[40%]"
              }`}
            >
              <div
                onMouseEnter={() => setIsHovered(index)}
                className="relative flex-1 flex min-h-[370px] lg:min-h-[495px] flex-col justify-between bg-[#AFC6FF1A] rounded-xl border border-white/5 p-[20px] md:p-[32px] w-full"
              >
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col">
                    <span className=" text-[24px] lg:text-[36px] font-[600] lg:font-[500] text-white leading-[110%] font-[clash]">
                      {expertise.title}
                    </span>

                    {isHovered === index && (
                      <div className={`pt-[10px]`}>
                        <p className="text-[16px] lg:text-[20px] font-[400] text-white/60 text-start leading-[100%]">
                          {expertise.description}
                        </p>
                      </div>
                    )}
                  </div>
                  {isHovered !== index && (
                    <Image
                      src={expertise.icon}
                      alt="svg"
                      width={0}
                      height={0}
                      sizes="100%"
                      className="w-[45px] mt-auto md:w-[60px]"
                    />
                  )}
                </div>
                {isHovered === index && (
                  <div
                    className={`absolute bottom-0 ${
                      expertise.bg === "/images/expertise/cardBg4.svg"
                        ? "right-[20px]"
                        : "right-0 "
                    } w-[90%] h-auto z-[10]`}
                  >
                    <Image
                      src={expertise.bg}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      priority
                      loading="eager"
                    />
                  </div>
                )}
                {isHovered === index && (
                  <div
                    className={`absolute top-0 left-0 right-0 bottom-0 h-[100%] z-[1] rounded-xl overflow-hidden`}
                  >
                    <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-transparent blur-[80px]"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col w-full items-start gap-[8px] xl:gap-[12px]">
          {data.expertiseData.map((expertise) => {
            const isOpen = openAccordion === expertise.id;

            return (
              <div key={expertise.id} className="w-full">
                <div
                  className={`relative flex flex-col pt-[20px] ${
                    openAccordion === expertise.id ? "pb-0" : "pb-[20px]"
                  } justify-between bg-[#AFC6FF1A] border border-white/5 rounded-3xl w-full transition-all`}
                  onClick={() => handleAccordionClick(expertise.id)}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 bottom-0 h-auto z-0 transition-opacity rounded-3xl overflow-hidden ${
                      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-transparent blur-[80px]"></div>
                  </div>

                  <div
                    ref={contentRef}
                    className={`overflow-hidden transition-all duration-200  ease-in-out ${
                      isOpen
                        ? "h-[300px] flex items-end opacity-100"
                        : "h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col items-start w-full h-[100%] z-[1] overflow-hidden">
                      <span className="text-[24px] text-start px-[20px] sm:text-[36px] font-[clash] font-[600] lg:font-[500] text-white leading-[110%]">
                        {expertise.title}
                      </span>
                      <span className="text-[16px] pt-[16px] sm:text-[20px] font-[400] text-white/60 text-start leading-[100%] pb-[10px] px-[20px]">
                        {expertise.description}
                      </span>
                      <div className="mt-auto ml-auto pl-[20px]">
                        <Image
                          src={expertise.bg}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-[100%] h-[100%] object-cover "
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isOpen
                        ? "opacity-0 h-0 overflow-hidden"
                        : "opacity-100 h-[65px]"
                    } flex flex-row transition-all duration-200 ease-in-out justify-between items-center px-[20px]`}
                  >
                    <div className="flex flex-row items-center w-[85%]">
                      <div className="w-[15%] flex justify-center items-center">
                        <Image
                          src={expertise.icon}
                          alt="svg"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-[45px] lg:w-[60px] h-auto"
                        />
                      </div>
                      <div className="w-[80%] pl-[10px]">
                        <span className="text-[24px] lg:text-[36px] font-[clash] font-[600] leading-[110%] lg:font-[500] text-white">
                          {expertise.title}
                        </span>
                      </div>
                    </div>

                    <div className="w-[15%] pb-[20px]">
                      <Image
                        src="/images/arrowDown.svg"
                        alt="svg"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
