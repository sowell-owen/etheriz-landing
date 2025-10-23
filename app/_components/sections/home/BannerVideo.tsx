"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function BannerVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // const [videoSrc, setVideoSrc] = useState("");
  // const [imgOrVideo, setImgOrVideo] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    setIsClient(true);
    setWidth(window.innerWidth);
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   function updateVideoSrc() {
  //     const isMobile = window.innerWidth < 640;
  //     setVideoSrc(
  //       isMobile ? "/video/EtherisAnimMobile.mp4" : "/video/EtherisAnim.mp4"
  //     );
  //   }

  //   updateVideoSrc();
  //   window.addEventListener("resize", updateVideoSrc);

  //   return () => window.removeEventListener("resize", updateVideoSrc);
  // }, []);

  // useEffect(() => {
  //   const video = videoRef.current;

  //   if (video) {
  //     const playPromise = video.play();

  //     if (playPromise !== undefined) {
  //       playPromise
  //         .then(() => setImgOrVideo(false))
  //         .catch(() => setImgOrVideo(true));
  //     }
  //   }
  // }, [videoSrc]);

  useEffect(() => {
    function checkVisibility() {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

      const video = videoRef.current;
      if (video) {
        if (isVisible) {
          video.play();
        } else {
          video.pause();
        }
      }
    }

    checkVisibility();

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  if (!isClient) return;
  return (
    <div ref={containerRef}>
      {width <= 639 ? (
        <>
          <Image
            key="lights"
            src="/video/lights.svg"
            alt="lights"
            width={100}
            height={100}
            className="w-full absolute top-[-20px] object-cover h-[150vh] opacity-[0.7]"
          />
          <Image
            key="fallback-image"
            src="/video/mobileBanner.webp"
            alt="Banner"
            width={400}
            height={400}
            className="w-full absolute object-cover top-[30px]"
            loading="eager"
            quality={100}
            priority
          />
        </>
      ) : (
        <video
          key="banner-video"
          ref={videoRef}
          src="/video/EtherisAnim.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full"
        />
      )}
    </div>
  );
}
