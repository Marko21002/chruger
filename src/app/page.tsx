import Feature from "./components/feature";
import About from "./components/about";
import Menu from "./components/Menu";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Menu />
    </div>
  );
}
