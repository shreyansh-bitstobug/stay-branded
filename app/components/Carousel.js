"use client";
import Image from "next/image";

const data = [
  {
    src: "/Images/car5.png",
    alt: "Car 1",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 2",
  },
  {
    src: "/Images/car3.png",
    alt: "Car 3",
  },
  {
    src: "/Images/car3.png",
    alt: "Car 4",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 5",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 6",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 7",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 8",
  },
  {
    src: "/Images/car3.png",
    alt: "Car 9",
  },
  {
    src: "/Images/car3.png",
    alt: "Car 10",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 11",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 12",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 13",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 14",
  },
  {
    src: "/Images/car3.png",
    alt: "Car 15",
  },
  {
    src: "/Images/car3.png",
    alt: "Car 16",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 17",
  },
  {
    src: "/Images/car5.png",
    alt: "Car 18",
  },
];

export default function Carousel() {
  return (
    <div className="relative h-[40dvh] w-screen overflow-x-hidden text-white flex flex-col items-center justify-center">
      <div className="w-screen justify-center items-center flex">
        <p className="font-Satoshi-Med font-medium text-xl">
          You are in <span className="fancy-heading">good</span> hands
        </p>
      </div>
      <div className="relative mx-auto h-32 w-[90%] grid place-items-center overflow-hidden">
        <div className="flex w-[calc(250px*18)] animate-scroll1">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative h-fit w-64 flex items-center px-4"
            >
              <Image
                className="w-full h-fit object-center"
                width={5000}
                height={5000}
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-[#1D1D1D] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#1D1D1D] to-transparent z-10"></div>
      </div>
    </div>
  );
}
