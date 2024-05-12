"use client";

import useSize from "@/app/hooks/useWindowResize";
import AboutUsImage from "@/public/AboutUs_long.png";
import Image from "next/image";
import { LegacyRef, useEffect, useRef, useState } from "react";

const StyledImage = () => {
  const parentImgRef: LegacyRef<HTMLImageElement> = useRef(null);
  const upperImgRef: LegacyRef<HTMLImageElement> = useRef(null);
  const lowerImgRef: LegacyRef<HTMLImageElement> = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  const { width } = useSize();

  useEffect(() => {
    if (
      isLoaded &&
      upperImgRef.current &&
      lowerImgRef.current &&
      parentImgRef.current
    ) {
      const parentHeight = parentImgRef.current?.clientHeight;
      upperImgRef.current.style.height = `${parentHeight * 0.7}px`;
      lowerImgRef.current.style.height = `${parentHeight * 0.25}px`;
    }
  }, [isLoaded, width]);

  return (
    <div className="relative">
      <Image
        ref={parentImgRef}
        className="opacity-0"
        alt="image"
        src={AboutUsImage}
        onLoad={handleLoaded}
      />
      <div className="absolute top-0 left-0 w-full rounded-68 overflow-hidden">
        <Image
          ref={upperImgRef}
          className="object-cover object-top"
          alt="image"
          src={AboutUsImage}
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          ref={lowerImgRef}
          className="object-cover object-bottom"
          alt="image"
          src={AboutUsImage}
        />
      </div>
    </div>
  );
};

export default StyledImage;
