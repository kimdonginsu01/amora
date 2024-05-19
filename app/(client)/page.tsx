import AboutUs from "./components/AboutUs";
import FooterBanner from "./components/FooterBanner";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import PopularService from "./components/PopularService";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Offer />
      <PopularService />
      <Testimonials />
      <FooterBanner />
    </>
  );
}
