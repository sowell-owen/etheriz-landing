import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { footer } from "@/constants/footer";
import { header } from "@/constants/header";

export default function Header({ onClick }: { onClick: () => void }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 767);
        if (window.innerWidth >= 767) {
          setOpenMenu(false);
        }
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (openMenu) {
      document.body.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeEventListener("touchmove", preventDefault);
      document.body.style.overflow = "";
    }

    return () => {
      document.body.removeEventListener("touchmove", preventDefault);
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  return (
    <header className="absolute z-[10] top-0 flex w-full justify-center bg-transparent ">
      <div className="flex items-center w-full p-[12px] justify-between sm:p-[24px]">
        <Link href={"/"}>
          <div className="md:w-[130px] w-[90px]">
            <Image
              src="/images/logo.svg"
              alt="Next.js logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100vw",
                height: "auto",
              }}
              priority
            />
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav
            ref={navRef}
            className={`items-center gap-3 flex ${
              isMobile &&
              "bg-[#111419] fixed w-[80%] duration-500 h-[100%] flex-col items-start py-[32px] px-[20px] top-0 z-1 right-[-100%]"
            } ${openMenu && "!right-[0%] overflow-hidden"}`}
          >
            {isMobile && (
              <Image
                src="/images/mobileMenuBg.svg"
                alt="bg"
                width={100}
                height={100}
                className="absolute z-[-1] right-0 top-0 w-[100%] h-[100%] opacity-10 object-cover"
              />
            )}
            {isMobile && (
              <div className="flex flex-row w-[100%] items-center justify-between mb-[24px]">
                <SectionTitle title="Navigation" />
                <Image
                  src="/images/close.svg"
                  alt="Close"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={() => setOpenMenu(false)}
                />
              </div>
            )}

            {/* <Link href={'/team'}>
              <button className={button}>
                <div className={icon}>
                  <Image
                    src="/images/psychology.svg"
                    alt="Team"
                    width={16}
                    height={16}
                  />
                </div>
                Team
              </button>
            </Link> */}
            <Link href={"/cases"} className="w-[100%]">
              <button className={button}>
                <div className={icon}>
                  <Image
                    src="/images/work.svg"
                    alt="Projects"
                    width={16}
                    height={16}
                  />
                </div>
                {header.projectsBtn}
              </button>
            </Link>
            {isMobile && (
              <button
                className={button}
                onClick={() => {
                  setOpenMenu(false);
                  onClick();
                }}
              >
                <div className={icon}>
                  <Image
                    src="/images/mail.svg"
                    alt="Projects"
                    width={16}
                    height={16}
                  />
                </div>
                {header.contactUsBtn}
              </button>
            )}

            {isMobile && (
              <div className="mt-auto flex flex-col items-center w-full gap-[24px]">
                <div className="flex flex-row gap-[4px]">
                  {footer.socials.map((item) => (
                    <Link
                      href={item.link}
                      key={item.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="cursor-pointer h-[40px] w-[40px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border-1 border-white/10">
                        <Image
                          src={item.icon}
                          alt="medium"
                          width={16}
                          height={16}
                          sizes="100vw"
                          className=" w-[16px] h-16"
                        />
                      </button>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col items-center text-white/60 text-[14px] font-normal">
                  <p>© 2025 Etheriz. All Rights Reserved.</p>
                </div>
              </div>
            )}
          </nav>

          <button onClick={onClick} className={buttonWhite}>
            {header.goToFormBtn}
            <div className="size-[32px] cursor-pointer sm:size-10   flex items-center justify-center rounded-full bg-[#426EFF]">
              <Image
                src="/images/ether.svg"
                alt="Ether"
                width={40}
                height={40}
                sizes="100vw"
                className="w-[16px] sm:w-[24px] h-[auto]"
              />
            </div>
          </button>

          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div
              className="rounded-full border p-[4px]"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                className="relative size-[32px] sm:size-10  flex items-center justify-center rounded-full border overflow-hidden before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(180deg,rgba(66,110,255,0.45),rgba(66,110,255,0.05))] before:z-0"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <Image
                  src="/images/dehaze.svg"
                  alt="Menu"
                  width={14}
                  height={14}
                  className="relative w-[14px] h-[14px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const icon =
  "size-10 flex items-center justify-center rounded-full bg-white/5 blueGradient border10";
const button =
  "cursor-pointer w-[100%] md:w-max-content flex items-center gap-3 text-[16px] p-[3px] hover:bg-white/10  bg-white/5 rounded-full border10 text-white pr-6 ";
const buttonWhite =
  "cursor-pointer  flex items-center gap-3 text-[16px]  p-[3px] bg-white rounded-full  pl-6";
