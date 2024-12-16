import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Industries from "./components/Industries";
import ParticleAnimation from "./components/ui/ParticleAnimation";
import { Spotlight } from "./components/ui/Spotlight";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      <Carousel />
      <About />
      <Process />
      <Industries />
      <Pricing />
      <Testimonial />
      <Brand />
      <Footer />
    </main>
  );
}
