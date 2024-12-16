import Image from "next/image";

export default function Footer(){
    return(
        <div className="relative h-fit md:h-[40dvh] w-screen overflow-hidden flex justify-center items-center">
            <Image 
                src="/svg/footer.svg"
                alt="svg"
                height={5000}
                width={5000}
                className="absolute hidden md:block w-[532px] h-[565px] -top-[120%] scale-110"
            />

            <div className="w-full h-full bg-white/10 backdrop-blur-xl px-4 sm:px-20 text-white flex flex-col justify-center items-center py-8 md:py-0  md:flex-row">
                <div className=" w-full md:w-[60%] h-full py-12 flex justify-end flex-col gap-5">
                    <h2 className="font-bold text-2xl font-Satoshi-Bold">Join our newsletter</h2>
                    <p className="font-Satoshi-Light max-w-md">Sign up to our mailing list below and be the first to<br /> know about new updates. Don't worry, We hate spam <br/> too</p>
                </div>
                <div className=" w-full md:w-[40%] h-full grid grid-cols-2 grid-rows-1">
                    <div className="col-span-1 row-span-1 flex flex-col md:items-center md:justify-center gap-6">
                        <h6 className=" font-Satoshi-Bold font-bold text-2xl">Pages</h6>
                        <ul className=" font-Satoshi-Bold font-bold text-lg text-[#9B9B9B]">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Services</li>
                            <li>404</li>
                        </ul>
                    </div>
                    <div className="col-span-1 row-span-1 flex flex-col justify-center gap-6">
                        <h6 className=" font-Satoshi-Bold font-bold text-2xl">Information</h6>
                        <ul className=" font-Satoshi-Bold font-bold text-lg text-[#9B9B9B]">
                            <li>FAQ</li>
                            <li>Contact</li>
                            <li>Legal</li>
                            <li>Call</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}