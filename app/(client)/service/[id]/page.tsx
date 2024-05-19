import React from "react";
import MinimalHero from "../../components/MinimalHero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { InformationService } from "../../components/InformationService";

const DetailService = () => {
  return (
    <div>
      <Header />
      <MinimalHero />
      <InformationService />
      <Footer theme="dark" />
    </div>
  );
};

export default DetailService;
