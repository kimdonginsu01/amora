import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div
      className="bg-hero-bg
        bg-cover
        bg-no-repeat
        bg-center
        w-full
        h-0
        pt-100svh
        md:pt-hero-bg
        text-center md:text-left
        relative"
    >
      <div className="max-w-content mx-auto px-section-x">
        <div
          className="
        text-white
        absolute
        left-1/2 md:left-unset
        -translate-x-1/2 md:translate-x-0
        bottom-8 md:bottom-unset
        md:top-1/2
        md:-translate-y-1/2
        w-full md:w-unset md:max-w-[633px]
        "
        >
          <h1 className="font-semibold text-4xl md:text-5xl leading-hero-title">
            A way better massage experience
          </h1>
          <h3 className="font-red-hat md:text-lg mt-3">
            The best massage therapy in Hillcrest
          </h3>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start">
            <Button variant="outline">Whats App</Button>
            <Button variant="light">Book now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
