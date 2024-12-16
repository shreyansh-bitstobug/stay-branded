"use client";
import { useState } from "react";
import AnimatedHeading from "./AnimatedTitle/AnimatedHeading";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";

const data = [
  {
    plan: "Basic",
    price: "$999",
    description: "For organization looking to get started with AI automations.",
    points: [
      "1 dedicated developer",
      "Custom workflow automations",
      "AI business consulting",
      "Chatbot & LLM development",
      "Voice assistant",
      "Cancel and pause anytime",
    ],
    index: 1,
  },
  {
    plan: "Professional",
    price: "$1299",
    description: "For organization looking to get started with AI automations.",
    points: [
      "1 dedicated developer",
      "Custom workflow automations",
      "AI business consulting",
      "Chatbot & LLM development",
      "Voice assistant",
      "Cancel and pause anytime",
    ],
    index: 2,
  },
  {
    plan: "Basic",
    price: "$999",
    description: "For organization looking to get started with AI automations.",
    points: [
      "1 dedicated developer",
      "Custom workflow automations",
      "AI business consulting",
      "Chatbot & LLM development",
      "Voice assistant",
      "Cancel and pause anytime",
    ],
    index: 3,
  },
];

export default function Pricing() {
  const [newBtn, setNewBtn] = useState(false);

  return (
    <div className="relative h-fit py-10 md:py-0 md:h-[130dvh] w-screen overflow-hidden text-white px-4 sm:px-10">
      <div className="w-full h-full flex flex-col justify-center items-center gap-7">
        <div className="w-fit h-fit bg-white/5 backdrop-blur-3xl p-2 rounded-xl">
          <AnimatedHeading
            title="Our Pricing"
            titleClass="font-Satoshi-Bold font-bold text-2xl"
          />
        </div>
        <h1 className="font-Satoshi-Bold font-bold text-4xl md:text-6xl">
          The <span className="fancy-heading font-thin">Plans</span> we provide
        </h1>
        <p className="md:text-lg text-[#B6B6B6] font-Satoshi-Med font-medium max-w-xl text-center">
          Three flexible plans designed to fit your needs. Wether you're just
          starting with AI & automations, or scaling advanced options
        </p>

        <div className="grid w-[75%] md:h-[80vh] h-fit grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-7">
          {data.map((item) => (
            <div key={item.index} className="w-full h-full flex">
              {item.index === 2 ? (
                <div className="relative p-[2px] w-full h-fit md:h-full rounded-3xl bg-gradient-to-b from-[#997B02] to-[#FFCD03]">
                  <div
                    key={item.index}
                    className="flex flex-col col-span-1 row-span-1 bg-[#0B0B0B] px-5 py-10 rounded-3xl gap-6 w-full md:h-full h-fit"
                  >
                    <AnimatedHeading
                      title={item.plan}
                      titleClass="text-3xl font-Satoshi-Med font-medium"
                    />
                    <p className="text-white font-Satoshi-Bold font-bold text-5xl">
                      {item.price}{" "}
                      <span className="font-Satoshi-Light font-thin text-2xl">
                        /month
                      </span>
                    </p>
                    <p className=" font-Satoshi-Med font-medium text-sm">
                      {item.description}
                    </p>
                    <AnimatedButton
                      title="Book a call"
                      containerClass="bg-[#242424] font-Satoshi-Med font-medium rounded-xl h-16 w-full"
                    />
                    <div className="">
                      {item.points.map((p, index) => (
                        <div key={index} className="flex items-center gap-2 pb-3">
                          <Image
                            className="w-2 h-2"
                            src="/svg/Subtract.svg"
                            alt="svg"
                            width={500}
                            height={500}
                          />
                          <p className="text-xs font-Satoshi-Med font-medium">
                            {p}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={item.index}
                  className="flex flex-col col-span-1 row-span-1 bg-[#0B0B0B] px-5 py-10 rounded-3xl gap-8 md:gap-6 w-full md:h-full h-fit"
                >
                  <AnimatedHeading
                    title={item.plan}
                    titleClass="text-3xl font-Satoshi-Med font-medium"
                  />
                  <p className="text-white font-Satoshi-Bold font-bold text-5xl">
                    {item.price}{" "}
                    <span className="font-Satoshi-Light font-thin text-2xl">
                      /month
                    </span>
                  </p>
                  <p className=" font-Satoshi-Med font-medium text-sm">
                    {item.description}
                  </p>
                  <button className="bg-[#242424] font-Satoshi-Med font-medium rounded-xl h-16">
                    Book a call
                  </button>
                  <div className="">
                    {item.points.map((p, index) => (
                      <div key={index} className="flex items-center gap-2 pb-3">
                        <Image
                          className="w-2 h-2"
                          src="/svg/Subtract.svg"
                          alt="svg"
                          width={500}
                          height={500}
                        />
                        <p className="text-xs font-Satoshi-Med font-medium">
                          {p}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
