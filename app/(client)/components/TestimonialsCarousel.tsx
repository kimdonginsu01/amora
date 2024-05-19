"use client";

import { Testimonial } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import type { Image as SImage } from "sanity";

type PropType = {
  slides: Testimonial[];
  options?: EmblaOptionsType;
};

const TestimonialsCarousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ stopOnInteraction: false }),
  ]);

  return (
    <div className="embla embla--testimonial" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((item, index) => (
          <div
            className="embla__slide grow-0 shrink-0 basis-testimonial-slide md:basis-testimonial-slide-sm"
            key={index}
          >
            <div className="embla__slide_number bg-secondary p-4 max-w-64 border border-offer-card/30 text-black">
              <p className="font-red-hat">{item.content}</p>
              <div className="h-[1px] bg-dark/20 my-7"></div>
              <div className="flex items-center font-medium">
                {item.clientAvatar?.asset && (
                  <Image
                    className="rounded-full w-16 h-16 object-cover"
                    alt="testimonial-item"
                    src={urlForImage(item.clientAvatar as SImage)}
                    width={60}
                    height={60}
                  />
                )}
                <p className="ml-4">{item.clientName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
