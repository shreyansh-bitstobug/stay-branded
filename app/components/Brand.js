import Image from "next/image";

export default function Brand() {
  return (
    <div className="relative h-dvh w-screen overflow-hidden text-white flex justify-center items-center px-4 sm:px-10">
        <Image 
                src="/svg/footer.svg"
                alt="svg"
                height={5000}
                width={5000}
                className="absolute hidden md:block w-[532px] h-[565px] -bottom-[32%] scale-110"
            />
      <div className="bg-white/10 backdrop-blur-xl w-full md:w-[75%] h-[60%] md:h-[70%] rounded-3xl flex flex-col items-center  justify-center py-3 md:py-14 px-3 md:px-10 gap-14">
        <h2 className="font-bold font-Satoshi-Bold text-3xl md:text-7xl text-center md:leading-[60px]">
          Ready to scale{" "}
          <span className="fancy-heading font-thin">Your brand</span> to
          <br /> new heights?
        </h2>
        <p className="font-Satoshi-Light font-thin text-lg text-center">
          If you want to achieve ground-breaking growth with increased sales and
          <br />
          profitability with paid ads, then you&apos;re in the right place
        </p>
        <div className="relative flex items-center w-full max-w-xl mx-auto bg-black rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="your_mail@gmail.com"
            className="w-full px-4 py-3 text-white bg-[#0E0E0E] outline-none placeholder-[#565656] font-Satoshi-Bold font-bold"
          />
          <button className="flex items-center justify-center w-16 h-full bg-[#D2D2D2]">
            <span className="">
              <Image 
                src="/svg/arrow.svg"
                alt="arrow"
                width={500}
                height={500}
                className="h-6 w-6"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
