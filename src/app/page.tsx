import Feature from "./components/feature";
import About from "./components/about";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Delivery from "./components/delivery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Menu />
      <Delivery />
    </div>
  );
}
