import React from "react";
import OfferCard from "./OfferCard";

const Offer = () => {
  return (
    <div className="bg-dark px-section-x py-section-y">
      <div className="text-center w-[582px] mx-auto">
        <h2 className="font-red-hat text-title">GET A DISCOUNT</h2>
        <h1 className="text-primary text-xl-42 mt-4">Special Offers</h1>
        <p className="font-red-hat text-light-dark mt-8">
          Are you looking for affordable massage prices in Dubai? Explore our
          current promotions and discover deals to suit your budget.
        </p>
      </div>
      <div className="mt-9 grid grid-cols-10 gap-6 items-center">
        <OfferCard className="col-span-3" />
        <OfferCard className="col-span-4" />
        <OfferCard className="col-span-3" />
      </div>
    </div>
  );
};

export default Offer;
