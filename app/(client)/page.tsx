import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Offer />
      <Service showPopular />
      <Testimonials />
      <FooterBanner />
    </>
  );
}
