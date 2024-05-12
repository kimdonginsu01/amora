import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat w-full h-0 pt-hero-bg relative">
      <div
        className="
        pl-section-x
        text-white
        absolute
        top-1/2
        left-0
        -translate-y-1/2
        max-w-[633px]
        "
      >
        <h1 className="font-semibold text-5xl leading-hero-title">
          A way better massage experience
        </h1>
        <h3 className="font-red-hat text-lg mt-3">
          The best massage therapy in Hillcrest
        </h3>
        <div className="mt-8">
          <Button variant="outline">Whats App</Button>
          <Button variant="light">Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
