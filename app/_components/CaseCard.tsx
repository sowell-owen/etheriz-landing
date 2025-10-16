import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type OurCase = {
  id: string | number;
  image: string;
  title: string;
  description: string;
  tags: string[];
};

interface CaseCardsProps {
  data: OurCase;
  hoverable?: boolean;
  isOffScreen?: boolean;
  cardRefs?: React.MutableRefObject<
    Record<string | number, HTMLDivElement | null>
  >;
}

export default function CaseCards({
  data,
  hoverable = false,
  isOffScreen = false,
  cardRefs,
}: CaseCardsProps) {
  const [isHoveredCase, setIsHoveredCase] = useState<string | number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHoveredCase(data.id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHoveredCase(null);
    }
  };

  return (
    <div
      key={data.id}
      className={`
        ${
          hoverable
            ? "px-0 sm:px-[5px] pt-[8px] max-w-[750px] mx-auto"
            : "my-[12px]"
        }
      `}
      ref={(el) => {
        if (el && cardRefs) cardRefs.current[data.id] = el;
      }}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex ${
          hoverable
            ? "flex-col justify-between md:min-w-[400px] "
            : "gap-[40px]"
        } w-full bg-[#AFC6FF1A] border-[1px] border-white/5 rounded-xl p-[12px] h-full relative z-[1]`}
      >
        {(hoverable && isHoveredCase) === data.id && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-[#AFC6FF1A] backdrop-blur-sm z-[0] rounded-xl" />
        )}

        <div
          className={`flex w-[100%] ${
            hoverable ? "flex-col h-[100%]" : "gap-[20px]"
          }`}
        >
          <div
            className={`${
              hoverable
                ? "flex flex-col h-[max-content] relative"
                : "w-[50%] h-[100%]"
            }`}
          >
            <Image
              src={data.image}
              alt=""
              width={400}
              height={200}
              quality={100}
              priority
              loading="eager"
              className={`z-[1] w-[100%] rounded-xl object-cover ${
                !hoverable && "h-[100%]"
              }`}
            />

            {(hoverable && isHoveredCase) === data.id && (
              <div className="absolute left-0 top-[100%] flex pt-[12px] items-center w-[100%]">
                <div className="flex flex-row flex-wrap gap-2">
                  {data.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center bg-[#426EFF40] rounded-3xl py-[8px] px-[16px]"
                    >
                      <span className="text-[20px] font-[400] text-white ">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className={`flex flex-col justify-between h-[100%] ${
              hoverable ? "" : "w-[50%]"
            }`}
          >
            <div
              className={`px-[12px] flex flex-col justify-between py-[12] h-[100%]`}
            >
              {!hoverable && (
                <div className="flex flex-row flex-wrap gap-2">
                  {data.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center bg-[#426EFF40] rounded-3xl py-[8px] px-[16px]"
                    >
                      <span className="text-[20px] font-[400] text-white ">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-[12px]">
                <span className="text-[24px] md:text-[32px] font-[600] md:font-[500] font-[clash] leading-[110%] text-white text-start">
                  {data.title}
                </span>
                <span className="md:text-[16px] text-[14px] leading-[100%] font-[400] text-white/40 text-start">
                  {data.description}
                </span>
              </div>

              {!hoverable && (
                <Link href={`/cases/${data.title.replace(/\s+/g, "-")}`}>
                  <button className="text-white cursor-pointer hover:text-[#426EFF] bg-[#426EFF40] hover:bg-transparent border border-white/0 hover:border-white/10 font-[400] flex items-center gap-1 text-base py-3 px-6 rounded-full self-start mt-9 transition-colors duration-200">
                    View Case <FaArrowRight size={10} />
                  </button>
                </Link>
              )}
            </div>

            {hoverable && (
              <Link
                href={`/cases/${data.title.replace(/\s+/g, "-")}`}
                className="z-10 inline-block mt-[10px] w-[max-content]"
              >
                <button
                  className={`font-[400] flex items-center gap-1 text-base py-3 px-6 rounded-full self-start transition-colors mt-[20px] lg:mt-[0] duration-200
        ${
          (hoverable && isHoveredCase === data.id) || isMobile
            ? "bg-[#426EFF40] text-white border border-white/0 cursor-pointer"
            : "text-[#426EFF] border border-white/10 cursor-default"
        }`}
                >
                  View Case <FaArrowRight size={10} />
                </button>
              </Link>
            )}
          </div>
        </div>

        {hoverable && (
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 duration-500 rounded-xl z-[0] transition-opacity"
            style={{
              opacity: isOffScreen && isOffScreen ? 0.4 : 0,
            }}
          />
        )}
      </div>
    </div>
  );
}
