import AnimatedHeading from "./AnimatedTitle/AnimatedHeading";
import ParticleAnimation from "./ui/ParticleAnimation";
import ParticleAnimationRight from "./ui/ParticleAnimationRight";
import Tabs from "./Tabs"

export default function Industries() {
  return (
    <div className="relative h-fit md:h-[200dvh] w-screen overflow-hidden text-white py-6 md:py-0 px-4 sm:px-10">
      <div className="absolute w-[30vh] h-[30vh] left-0 -z-10">
        <ParticleAnimation />
      </div>
      <div className="absolute w-[60vh] h-[50vh] right-0 -top-[20%]">
        <ParticleAnimationRight />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <div className="w-fit h-fit bg-white/5 backdrop-blur-3xl p-3 rounded-xl">
          <AnimatedHeading
            title="Industries"
            titleClass="font-Satoshi-Bold font-bold text-2xl "
          />
        </div>
        <h1 className="font-Satoshi-Bold font-bold text-4xl md:text-6xl text-center">
          Industries we <span className="fancy-heading font-thin">work</span> with
        </h1>
        <p className="md:text-lg font-Satoshi-Light font-light max-w-md text-center">
          Hear the success stories of the business we&apos;ve helped thrive with AI. 
          We work with variety of diffrent industries
        </p>
        <div className=" w-full md:w-[75%] h-fit md:h-[120dvh]">
            <Tabs />
        </div>
      </div>
    </div>
  );
}
