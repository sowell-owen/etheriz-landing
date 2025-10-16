'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface BrandsProps {
  brands: string[]
}

export default function BrandsRunningLine({brands}:BrandsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap items-wrap w-[100vw] py-6 mb-[60px] lg:mb-[110px]">
      <div className={`marquee items ${!isVisible ? 'paused' : ''}`}>
        {brands.map((brand) => (
          <div className=" w-[152px] flex-shrink-0" key={brand}>
            <Image
              src={`/images/brands/${brand}.svg`}
              alt="brand"
              width={0}
              height={0}
              sizes="auto"
              loading="eager"
              className="w-[80%] object-contain"
            />
          </div>
        ))}
      </div>
      <div className={`marquee items ${!isVisible ? 'paused' : ''}`}>
        {brands.map((brand, index) => (
          <div className=" w-[152px] flex-shrink-0" key={`${brand}${index}`}>
            <Image
              src={`/images/brands/${brand}.svg`}
              alt="brand"
              width={0}
              height={0}
              sizes="auto"
              loading="eager"
              className="w-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
