"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap/all";
import { useWindowScroll } from "react-use";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const navItems = [{name:"About", href: "/About"},
    {name:"Blog", href: "/Blog"},
    {name:"Services", href: "/Services"},
    {name:"Process", href: "/Process"},
];

export default function Navbar() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  const navContainerRef = useRef(null);

  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-10 z-50 h-6 border-none transition-all duration-700 sm:inset-x-20"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 bg-white/10 backdrop-blur-xl rounded-2xl">
        <nav className="flex size-full items-center justify-between p-2">
          <div className="">
            <Image
              src=""
              alt=""
              height={500}
              width={500}
              className="h-12 w-12"
            />
          </div>
          <div className="flex items-center gap-16">
            {navItems.map((item, index) => (
              <Link href={item.href} key={index} className=" font-Satoshi-Med font-medium text-[#C4C4C4]">{item.name}</Link>
            ))}
            <AnimatedButton title="Book a call" containerClass="" />
          </div>
        </nav>
      </header>
    </div>
  );
}
