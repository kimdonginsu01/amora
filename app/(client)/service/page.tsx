
import CutomerExpectation from "../components/CutomerExpectation";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import MinimalHero from "../components/MinimalHero";

const ServicePage = () => {
  return (
    <div>
      <MinimalHero />
      <Introduction />
      <CutomerExpectation />
      <Footer theme="dark" />
    </div>
  );
};

export default ServicePage;
