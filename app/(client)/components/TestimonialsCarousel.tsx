"use client";

import clientImg from "@/public/client_1.png";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

type PropType = {
  slides: any[];
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
          <div className="embla__slide grow-0 shrink-0 basis-testimonial-slide md:basis-testimonial-slide-sm" key={index}>
            <div className="embla__slide_number bg-secondary p-4 max-w-64 border border-offer-card/30">
              <p className="font-red-hat">
                I was very impresed by the avivon service, lorem ipsum is simply
                free text used by copytyping.
              </p>
              <div className="h-[1px] bg-dark/20 my-7"></div>
              <div className="flex items-center font-medium">
                <Image
                  className="rounded-full w-16 h-16 object-cover"
                  alt="testimonial-item"
                  src={clientImg}
                />
                <p className="ml-4">Jessica Brown</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
