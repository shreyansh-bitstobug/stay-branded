"use client";
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#hero-heading", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    })
      .from(
        "#hero-para",
        {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .from(
        "#btn-div",
        {
          y: -30,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      );


      gsap.to("#anim", {
        height: "15rem",
        scrollTrigger: {
          trigger: "#anim",
          start: "top center", 
          end: "=+300 center ", 
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      });
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden text-white">
      <div id="anim" className="w-fit hidden md:block h-44 absolute bottom-0 overflow-hidden left-1/2 transform -translate-x-1/2">
        <Image
          src="/svg/hero.svg"
          alt="hero"
          height={500}
          width={500}
          className=""
        />
      </div>
      <div className="flex flex-col w-screen h-dvh justify-center items-center gap-10 px-4 sm:px-10">
        <h1
          id="hero-heading"
          className="text-5xl font-Satoshi-Bold font-bold text-center md:text-[4.9rem] md:max-w-5xl"
        >
          Ready to <span className="fancy-heading font-light">Scale</span> your
          brand with paid ads?
        </h1>
        <p
          id="hero-para"
          className="font-Satoshi-Med md:text-xl text-lg max-w-3xl text-center font-medium text-[#B6B6B6]"
        >
          If you want to achieve ground-breaking growth, increase sales, and
          profitability with paid ads, then you're in the right place.
        </p>
        <div
          id="btn-div"
          className="md:flex-row flex flex-col md:gap-20 gap-10"
        >
          <AnimatedButton
            title={"View Services"}
            containerClass="text-lg font-Satoshi-Light font-thin text-[#D6D6D6]"
          />
          <button className="font-Satoshi-Light font-thin bg-yellow-50 rounded-xl text-black-0 h-14 w-40 text-lg hover:bg-transparent hover:border-yellow-50 hover:border-2 hover:scale-105 transition-all duration-200 hover:text-white hover:font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
