import Image from "next/image";
import { PhoneContactIcon } from "./Icons";
import ModalBooking from "./ModalBooking";
import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";
import { useState } from "react";

export const InformationService = () => {
  const contactsIcon = [
    {
      to: "",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0412 11.9225C16.3964 12.019 16.6379 12.3268 16.7873 12.6631L18.1506 15.73C18.3281 16.1294 18.2522 16.6324 18.0211 17.0034C17.6454 17.6065 17.219 18.4113 17.5195 19.0551C18.273 20.6694 19.3163 21.6556 20.8905 22.4199C21.5336 22.7322 22.333 22.2737 22.9363 21.8901C23.2837 21.6692 23.7737 21.5849 24.1485 21.7553L27.3456 23.2093C27.6758 23.3594 27.9776 23.5984 28.0742 23.9478C28.5818 25.7841 26.3648 28.1448 24.652 28.1448C22.9711 28.1448 21.3066 27.8138 19.7537 27.1706C18.2007 26.5274 16.7896 25.5847 15.601 24.3963C14.4125 23.2079 13.4696 21.797 12.8264 20.2442C12.1831 18.6915 11.852 17.0272 11.852 15.3465C11.852 13.6365 14.206 11.4239 16.0412 11.9225ZM16.6719 16.2299L15.4186 13.4103C15.1563 13.4339 14.7459 13.5762 14.2729 13.9836C13.6362 14.5321 13.4063 15.1205 13.4063 15.3465C13.4063 16.8231 13.6972 18.2853 14.2623 19.6495C14.8275 21.0137 15.6558 22.2533 16.7001 23.2974C17.7443 24.3415 18.9841 25.1698 20.3485 25.7348C21.7129 26.2999 23.1752 26.5908 24.652 26.5908C24.8786 26.5908 25.4685 26.3599 26.0172 25.7217C26.4268 25.2454 26.5672 24.8337 26.589 24.5724L23.6883 23.2533C23.3819 23.4461 22.9346 23.7116 22.4384 23.884C21.8983 24.0716 21.0626 24.2311 20.2115 23.8179C18.3464 22.9123 17.029 21.679 16.1111 19.7124C15.7255 18.8862 15.8629 18.0744 16.0385 17.5339C16.2071 17.0148 16.4738 16.5509 16.6719 16.2299Z"
            fill="#A28869"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 35.9958C28.8366 35.9958 36 28.8333 36 19.9979C36 11.1625 28.8366 4 20 4C11.1634 4 4 11.1625 4 19.9979C4 22.6639 4.65221 25.1776 5.80579 27.3881C5.91509 27.5976 5.94573 27.84 5.88457 28.0682L4.06762 34.8483C3.88546 35.528 4.50756 36.15 5.18739 35.9679L11.9925 34.1447C12.2194 34.0839 12.4604 34.1138 12.6691 34.2216C14.8653 35.3555 17.3579 35.9958 20 35.9958ZM34.1714 19.9979C34.1714 27.8235 27.8267 34.1675 20 34.1675C17.6566 34.1675 15.451 33.6002 13.5081 32.597C12.9146 32.2906 12.207 32.1944 11.5193 32.3787L6.24375 33.792L7.65084 28.5414C7.8362 27.8497 7.73774 27.1379 7.42695 26.5423C6.40638 24.5867 5.82857 22.3624 5.82857 19.9979C5.82857 12.1723 12.1733 5.82833 20 5.82833C27.8267 5.82833 34.1714 12.1723 34.1714 19.9979Z"
            fill="#A28869"
          />
        </svg>
      ),
    },
    {
      to: "",
      icon: <PhoneContactIcon className="inline-block" />,
    },
  ];

  const data = [
    {
      minute: "60min",
      prince: "690 AED",
    },
    {
      minute: "90min",
      prince: "990 AED",
    },
  ];
  return (
    <SectionWrapper variant="black">
      <div className=" gap-[20px] lg:flex">
        <div className="lg:w-[40%] w-full bg-[#212121] h-[536px] relative font-red-hat">
          <Image
            alt="main hero banner"
            src="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/03/07190040/356811300_972028774198922_7404995085289163317_n.jpeg?tr=w-1920"
            width={482}
            height={536}
            className="object-cover h-full w-full"
          />
          <div
            className="absolute w-full  text-xl backdrop-blur-[7.5px] py-5 bottom-0 bg-black] p-8"
            style={{ background: "rgba(0,0,0,0.7)" }}
          >
            {data.map((item, idx) => {
              return (
                <div className="flex justify-between mb-2" key={idx}>
                  <p className="font-light">{item.minute}</p>{" "}
                  <p className="text-primary font-semibold">{item.prince}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-[60%] w-full font-red-hat">
          <h2 className="text-primary text-xl-32">Swedish Massage</h2>
          <div className="my-7 h-[1px] w-full bg-[rgb(162,136,105)]"></div>
          <p className="">
            At Prive Spa, your Dubai’s Lomi Lomi journey begins with a
            personalised consultation. Our therapists, drawn from a pool of
            experienced Russian and Ukrainian professionals, take the time to
            understand your individual needs and health history.
            <br /> This approach enables them to customise the treatment to suit
            your objectives
          </p>
          <br />
          <p>
            Embark on the most complete journey of sensations focused on
            relaxation and beauty:
          </p>
          <ul>
            <li className="ml-8 mb-[4px] flex- items-center">
              <span className="h-[8px] inline-block rounded-full mr-2 w-[8px] bg-white "></span>
              Thermal baths
            </li>
            <li className="ml-8 mb-[4px] flex- items-center">
              <span className="h-[8px] inline-block rounded-full mr-2 w-[8px] bg-white "></span>
              35 minute body massage with our Signature Orange Garden Oil
            </li>
            <li className="ml-8 mb-[4px] flex- items-center">
              <span className="h-[8px] inline-block rounded-full mr-2 w-[8px] bg-white "></span>
              25 minute face massage with Gua Sha
            </li>
            <li className="ml-8 mb-[4px] flex- items-center">
              <span className="h-[8px] inline-block rounded-full mr-2 w-[8px] bg-white "></span>
              Refreshing hydrogel face mask
            </li>
            <li className="ml-8 mb-[4px] flex- items-center">
              <span className="h-[8px] inline-block rounded-full mr-2 w-[8px] bg-white "></span>
              Scalp massage
            </li>
            <li className="ml-8 mb-[4px] flex- items-center">
              <span className="h-[8px] inline-block rounded-full mr-2 w-[8px] bg-white "></span>
              Virgin Sparkling Rosé Wine or juice
            </li>
          </ul>
          <div className="my-7 h-[1px] w-full bg-[#A28869]"></div>
          <div className="flex flex-wrap-reverse md:justify-between gap-y-4">
            <Button variant="dark" className="w-full md:w-unset">
              BOOKING NOW
            </Button>
            <div className="flex justify-center h-full w-full md:w-unset">
              {contactsIcon.map((item, index) => (
                <Button key={index} variant="dark" className="!p-[10px]">
                  <span>{item.icon}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
