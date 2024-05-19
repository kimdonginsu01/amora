import { Testimonial } from "@/sanity.types";
import { getHomePageTestimonial } from "@/sanity/lib/api";
import TestimonialsCarousel from "./TestimonialsCarousel";
import SectionWrapper from "./ui/SectionWrapper";

const Testimonials = async () => {
  const data = await getHomePageTestimonial();
  return (
    <SectionWrapper
      variant="black"
      className="pt-12 pb-56 md:pb-56 mb-44 relative"
    >
      <div className="flex flex-wrap gap-y-4">
        <div className="md:w-1/2">
          <p className="font-red-hat uppercase text-title">{data.subHeading}</p>
          <p className="text-primary text-xl-42">
            {data.heading}
          </p>
        </div>
        <p className="md:w-1/2 text-light-dark font-red-hat content-center">
          {data.description}
        </p>
      </div>

      <div className="absolute -bottom-16 left-0 right-0">
        <TestimonialsCarousel
          slides={data.testimonials as unknown as Testimonial[]}
          options={{ loop: true, dragFree: false }}
        />
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
