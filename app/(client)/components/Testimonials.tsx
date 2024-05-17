import Image from "next/image";
import React from "react";
import clientImg from "@/public/client_1.png";
import TestimonialsCarousel from "./TestimonialsCarousel";
import SectionWrapper from "./ui/SectionWrapper";

const Testimonials = () => {
  return (
    <SectionWrapper variant="dark" className="pt-12 pb-56 md:pb-56 mb-44 relative">
        <div className="flex flex-wrap gap-y-4">
          <div className="md:w-1/2">
            <p className="font-red-hat uppercase text-title">Customer Review</p>
            <p className="text-primary text-xl-42">
              What They’re Talking About Center
            </p>
          </div>
          <p className="md:w-1/2 text-light-dark font-red-hat content-center">
            There are many variations of passages of available but the majority
            have suffered in form, by injected words which don&apos;t look.
            There are many variations of passages.
          </p>
        </div>

        <div className="absolute -bottom-16 left-0 right-0">
          <TestimonialsCarousel
            slides={[1, 2, 3, 4, 5, 6, 7]}
            options={{ loop: true, dragFree: false }}
          />
        </div>
    </SectionWrapper>
  );
};

export default Testimonials;
