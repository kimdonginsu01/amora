import SectionWrapper from "./ui/SectionWrapper";

import { LocationIcon, PhoneContactIcon, TimeIcon } from "./Icons";

const OurContact = () => {
  const data = [
    {
      icon: <LocationIcon />,
      title: "Our Address",
      desc: ["2690 Hiltona Street Victoria Road New York, Canada"],
    },
    {
      icon: <PhoneContactIcon />,
      title: "Phone Number",
      desc: ["Mobile: +256 214 203 215", "Email: info@rasm.com"],
    },
    {
      icon: <TimeIcon />,
      title: "Hours of Operation",
      desc: ["Monday - Friday: 9AM - 8PM ", "Sunday - Saturday: 10AM - 6PM"],
    },
  ];

  return (
    <SectionWrapper>
      <div className=" gap-[20px] lg:flex">
        <div className="lg:w-[40%] w-full bg-[#212121] p-8">
          <h2 className="text-primary text-xl-32">Our Contact Information</h2>
          <p className="font-red-hat text-white mt-2 mb-[38px] font-light">
            Have a inquiry or some feedback for us? Fill out the form below to
            contact our team.
          </p>
          <div className="flex flex-col gap-8">
            {data.map((item, idx) => (
              <div
                className="px-8 py-4 flex border-solid border-[1px] border-[#5A5A5A] gap-[20px] items-center"
                key={idx}
              >
                <div className="p-[10px] bg-[#2A2A2A] h-fit ">{item.icon}</div>
                <div>
                  <h6 className="text-primary mb-2 tracking-[1px]">
                    {item.title}
                  </h6>
                  {item.desc.map((itemDesc, idx) => (
                    <p
                      className="font-red-hat font-normal text-[#817878]"
                      key={idx}
                    >
                      {itemDesc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[60%] w-full">Map</div>
      </div>
    </SectionWrapper>
  );
};

export default OurContact;
