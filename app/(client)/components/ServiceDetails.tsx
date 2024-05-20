import { ContactInfo, ServiceCard } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "sanity";
import ServiceContactActions from "./ServiceContactActions";

interface Props {
  details: ServiceCard;
  contactInfo: ContactInfo[];
}

const ServiceDetails = ({ details, contactInfo }: Props) => {
  const listItemStyle = {
    listItem: {
      bullet: ({ children }: any) => (
        <li className="ml-8 mb-1 relative">
          <span
            className="
                before:block
                before:absolute
                before:-left-4
                before:top-1/2
                before:-translate-y-1/2
                before:w-2
                before:h-2
                before:rounded-full
                before:bg-white"
          >
            {children}
          </span>
        </li>
      ),
    },
  };

  return (
    <>
      <h2 className="text-primary text-xl-32">{details.title}</h2>
      <div className="my-7 h-[1px] w-full bg-[rgb(162,136,105)]"></div>
      <PortableText
        value={details.body as TypedObject[]}
        components={listItemStyle}
      />
      <div className="my-7 h-[1px] w-full bg-[#A28869]"></div>
      <ServiceContactActions contactInfo={contactInfo} />
    </>
  );
};

export default ServiceDetails;
