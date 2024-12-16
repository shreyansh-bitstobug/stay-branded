import Image from "next/image";
import AnimatedHeading from "./AnimatedTitle/AnimatedHeading";

export default function About(){
    return(
        <div className="relative h-[90dvh] w-screen overflow-hidden flex justify-center items-center px-4 sm:px-10">
            <Image 
            src="/svg/process.svg"
            alt="svg"
            width={5000}
            height={5000}
            className="absolute hidden md:block w-[600px] h-96 scale-125 -left-52 -bottom-60 z-20"
        />

            <div className="w-full h-full flex flex-col justify-center items-center gap-20">
                <div className="w-fit h-fit bg-white/5 backdrop-blur-3xl p-3 rounded-xl">
                    <AnimatedHeading title="About Us" titleClass="font-Satoshi-Bold font-bold text-2xl "/>
                </div>
                <p className="text-white md:text-[2.7rem] text-2xl max-w-4xl text-center font-Satoshi-Bold font-bold leading-[50px]">Hi, we&apos;re Stay Branded{" "} 
                <span className="w-24 h-fit inline-flex justify-center items-center bg-white/5 backdrop-blur-3xl  rounded-xl">
                    <Image 
                        className="h-16 w-20"
                        src="/Images/lion.png"
                        width={5000}
                        height={5000}
                        alt="lion"
                    />   
                </span>{" "}
                We craft cutting edge AI solutions to make organizations more{" "} 
                <span className="text-yellow-50">
                effective and competitive    
                </span>.
                We do so with a motivated team of 9 focused on building world-class solutions.   
                </p>
            </div>
        </div>
    )
}