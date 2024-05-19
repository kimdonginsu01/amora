import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import MinimalHero from "../components/MinimalHero";
import OurContact from "../components/OurContact";

const ServicePage = () => {
  return (
    <div>
      <MinimalHero />
      <OurContact />
      <FooterBanner />
      <Footer theme="dark" />
    </div>
  );
};

export default ServicePage;
