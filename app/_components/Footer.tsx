import Image from "next/image";
import Link from "next/link";
import { footer } from "../../constants/footer";

export default function Footer({ onClick }: { onClick: () => void }) {
  return (
    <footer className="flex justify-center w-full z-[20] pt-[60px] md:pt-[80px] pb-[12px] md:pb-[50px]">
      <div className="relative flex flex-col items-center w-[90%] rounded-3xl z-[1] bg-[#AFC6FF1A] px-[12px] py-[12px] md:p-[32px]">
        <div className="absolute top-0 left-0 w-full h-full z-[0] rounded-[20px] overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/40 via-blue-600/30 to-transparent blur-3xl"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-between z-[1] w-[100%]">
          <div className="flex flex-col sm:flex-row items-center">
            <Link href={"/"}>
              <div className="w-[100%]">
                <Image
                  src={footer.footerLogo}
                  alt="Next.js logo"
                  width={0}
                  height={0}
                  className="w-[100%] h-[auto]"
                  priority
                />
              </div>
            </Link>
            <div className="flex flex-row pl-0 sm:pl-[10px] lg:pl-[24px] pt-[12px] sm:pt-[0px]">
              {footer.socials.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-[45px] h-[45px] sm:w-[35px] sm:h-[35px] lg:w-[45px] lg:h-[45px]"
                >
                  <button className=" cursor-pointer flex justify-center items-center h-[40px] w-[40px] sm:h-[30px] sm:w-[30px]  lg:h-[40px] lg:w-[40px] rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border10">
                    <Image
                      src={item.icon}
                      alt="medium"
                      width={20}
                      height={20}
                      sizes="100vw"
                      className=" w-[20px] h-[20px] sm:w-[15px] sm:h-[15px] lg:w-[20px] lg:h-[20px]"
                    />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <nav className="flex items-center justify-center  gap-3 pt-[24px] sm:pt-[0px]">
            {/* <Link href={'/team'}>
              <button className=" cursor-pointer flex items-center gap-1 text-[16px] p-1 hover:bg-white/10  bg-white/5 rounded-full border10 text-white pr-6">
                <div className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full bg-white/5 blueGradient border10">
                  <Image
                    src="/images/psychology.svg"
                    alt="Team"
                    width={16}
                    height={16}
                    className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]"
                  />
                </div>
                Team
              </button>
            </Link> */}

            <Link href={"/cases"}>
              <button className=" cursor-pointer flex items-center gap-[12px] text-[16px] p-1 hover:bg-white/10  bg-white/5 rounded-full border10 text-white pr-[24px]">
                <div className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full bg-white/5 blueGradient border10">
                  <Image
                    src="/images/work.svg"
                    alt="Projects"
                    width={16}
                    height={16}
                    className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]"
                  />
                </div>
                Projects
              </button>
            </Link>
            <button
              onClick={onClick}
              className=" cursor-pointer flex items-center gap-[12px] rounded-full border10 text-white p-[5px] md:pr-[24px] md:p-1 hover:bg-white/10 bg-white/5"
            >
              <div className="w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full bg-white/5 blueGradient border10">
                <Image
                  src="/images/arrowsTop.svg"
                  alt="Projects"
                  width={16}
                  height={16}
                  className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]"
                />
              </div>
              <span className="hidden md:block text-[16px]">Scroll up</span>
            </button>
          </nav>
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-center z-[1] w-[100%] pt-[32px] ">
          <button className="text-[16px] lg:text-[20px] leading-[100%] font-[400] text-white bg-[#426EFF40] rounded-3xl sm:rounded-xl py-[12px] px-[24px] flex items-center justify-center ">
            {footer.text}
          </button>

          <div className="flex flex-col items-center sm:flex-row mt-[12px] xl:mt-0 xl:ml-auto gap-[12px] lg:gap-[30px]">
            <p className="text-[14px] md:text-[16px] font-[400] leading-[100%] text-white/60">
              © 2025 Etheriz. All Rights Reserved.
            </p>

            {/* <div className="flex flex-row gap-[12px] md:gap-[30px]">
              <p className="cursor-pointer text-[14px] md:text-[16px] font-[400] leading-[100%] text-white/60 hover:text-white underline">
                [Privacy Policy]
              </p>
              <p className="cursor-pointer text-[14px] md:text-[16px] font-[400] text-white/60 leading-[100%] hover:text-white underline">
                [Terms of Service]
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
