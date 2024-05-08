import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-contain bg-no-repeat w-full h-0 pt-hero-bg relative">
      <div
        className="
        px-section
        text-white
        absolute
        top-1/2
        left-0
        -translate-y-1/2"
      >
        <h1 className="font-semibold text-5xl">
          A way better massage experience
        </h1>
        <h3 className="font-red-hat text-lg">
          The best massage therapy in Hillcrest
        </h3>
        <div>
          <Button variant="outline">Whats App</Button>
          <Button variant="light">Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
