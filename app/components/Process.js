import Image from "next/image";
import AnimatedHeading from "./AnimatedTitle/AnimatedHeading";

export default function Process() {
  return (
    <div className="relative h-fit py-10 md:py-0 md:h-dvh w-screen overflow-hidden text-white px-4 sm:px-10">
        <Image 
            src="/svg/process.svg"
            alt="svg"
            width={5000}
            height={5000}
            className="hidden md:block absolute w-[600px] h-96 scale-125 -left-52 -top-36 z-20"
        />
        <Image 
            src="/svg/process2.svg"
            alt="svg"
            width={5000}
            height={5000}
            className="hidden md:block absolute w-[800px] h-[600ox] scale-125 -right-[430px] "
        />
      <div className="w-full h-full flex flex-col justify-center items-center gap-20">
        <div className="w-fit h-fit bg-white/5 backdrop-blur-3xl p-2 rounded-xl">
          <AnimatedHeading
            title="Our Process"
            titleClass="font-Satoshi-Bold font-bold text-2xl"
          />
        </div>
        <div className="grid md:grid-rows-4 md:grid-cols-2 h-fit md:h-[70%] w-[75%] md:gap-5 gap-7">
          <div className="row-span-1 col-span-1">
            <h2 className="md:text-7xl text-5xl font-Satoshi-Bold font-bold text-center md:text-left">
              Our <span className="fancy-heading font-thin">Work</span> Flow
            </h2>
          </div>
          <div className="md:row-span-4 md:col-span-1 row-span-3">
            <div className="bg-white/5 backdrop-blur-3xl p-8 rounded-xl">
              <Image
                src="/Images/process.png"
                alt="process.png"
                width={5000}
                height={5000}
                className="object-cover object-center md:h-[450px] rounded-xl"
              />
            </div>
          </div>
          <div className="row-span-1 col-span-1">
            <p className="font-bold font-Satoshi-Bold text-2xl md:text-3xl text-[#656565] text-center md:text-left">
              Workflows to identify task AI can automate and optimize
            </p>
          </div>
          <div className="row-span-1 col-span-1">
            <p className="font-bold font-Satoshi-Bold text-2xl md:text-3xl text-[#656565] text-center md:text-left">
              Next, we develop and integreate AI solutions into your Workflows
            </p>
          </div>
          <div className="row-span-1 col-span-1">
            <p className="font-bold font-Satoshi-Bold text-2xl md:text-3xl text-center md:text-left">
              Then, we continously refine and improve your AI solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
