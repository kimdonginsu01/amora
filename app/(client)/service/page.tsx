import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import MinimalHero from "../components/MinimalHero";
import Service from "../components/Service";

const ServicePage = () => {
  return (
    <div>
      <MinimalHero />
      <Service />
      <FooterBanner />
      <Footer theme="dark" />
    </div>
  );
};

export default ServicePage;
