"use client";
import React, { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleLoad = () => {
      setLoading(false);
    };

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (document.readyState === "complete") {
      timeoutId = setTimeout(() => {
        handleLoad();
      }, 300);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 w-screen h-[100%] bg-black">
      <video
        key="loader-video"
        src="/video/Loader.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        width={100}
        height={100}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] z-10`}
      />
    </div>
  );
}
