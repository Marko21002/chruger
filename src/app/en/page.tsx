import Feature from "../components/eng/feature";
import About from "../components/eng/about";
import Menu from "../components/eng/Menu";
import Hero from "../components/eng/Hero";
import Delivery from "../components/eng/delivery";
import Testimonials from "../components/eng/testimonials";

export default function EnglishHome() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Menu />
      <Delivery />
      <Testimonials />
    </div>
  );
}
