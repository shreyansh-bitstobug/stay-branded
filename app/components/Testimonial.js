import AnimatedHeading from "./AnimatedTitle/AnimatedHeading";
import TestimonialSlider from "./TestimmonialSlider";
import TestimonialSliderHorizontal from "./TestimonialSliderHorizontal";

export default function Testimonial() {
  return (
    <div className="relative h-fit md:h-[130dvh] w-screen overflow-x-hidden text-white py-8 md:py-0 px-4 sm:px-10">
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <div className="w-fit h-fit bg-white/5 backdrop-blur-3xl p-3 rounded-xl">
          <AnimatedHeading
            title="Testimonial"
            titleClass="font-Satoshi-Bold font-bold text-2xl "
          />
        </div>
        <h2 className="font-Satoshi-Bold font-bold text-5xl text-center">
          There&apos;s a reason people are
          <br /> <span className="fancy-heading font-thin">Having</span> us
        </h2>
        <p className="font-Satoshi-Light text-base">
          Hear how we helped companies grow and achieve those heights
        </p>
        <div className="w-[75%] h-[60%] hidden md:block mt-8 bg-white/10 backdrop-blur-xl p-5 rounded-3xl">
          <div className="w-full h-full  grid grid-cols-3 grid-rows-1 bg-black-0 p-4 rounded-3xl gap-4">
            <TestimonialSlider className="col-span-1" sliderDirection="up" />
            <TestimonialSlider className="col-span-1" sliderDirection="down" />
            <TestimonialSlider className="col-span-1" sliderDirection="up" />
          </div>
        </div>
        <div className="w-full h-full md:hidden flex flex-col gap-3 mt-10">
          <TestimonialSliderHorizontal sliderDirection="UP"/>
          <TestimonialSliderHorizontal sliderDirection="down"/>
          <TestimonialSliderHorizontal sliderDirection="up"/>
        </div>
      </div>
    </div>
  );
}
