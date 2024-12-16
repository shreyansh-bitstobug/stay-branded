import Image from "next/image";

const data = [
  {
    icon: "/Images/meta.png",
    name: "Meta Ads",
    description:
      "Reach your ideal audience on Facebook and Instagram with our expertly managed Meta Ads campaigns. We focus on driving real results—whether it’s brand awareness, lead generation, or conversions—while optimizing your budget to get the most value from every dollar spent",
    points: [
      "Comprehensive Audience Research & Targeting",
      "Ad Creation and Copywriting",
      "A/B Testing for Optimized Performance",
      "Ongoing Campaign Management and Monitoring",
      "Custom Budget Optimization Strategies",
      "Detailed Analytics and Report",
      "Retargeting Campaigns to Maximize Conversions",
      "Constinous Ad Creative Updates Based on Performance",
    ],
  },
  {
    icon: "/Images/google.png",
    name: "Google Ads",
    description:
      "Reach your ideal audience on Facebook and Instagram with our expertly managed Meta Ads campaigns. We focus on driving real results—whether it’s brand awareness, lead generation, or conversions—while optimizing your budget to get the most value from every dollar spent",
    points: [
      "Comprehensive Audience Research & Targeting",
      "Ad Creation and Copywriting",
      "A/B Testing for Optimized Performance",
      "Ongoing Campaign Management and Monitoring",
      "Custom Budget Optimization Strategies",
      "Detailed Analytics and Report",
      "Retargeting Campaigns to Maximize Conversions",
      "Constinous Ad Creative Updates Based on Performance",
    ],
  },
  {
    icon: "/Images/tiktok.png",
    name: "TikTok Ads",
    description:
      "Reach your ideal audience on Facebook and Instagram with our expertly managed Meta Ads campaigns. We focus on driving real results—whether it’s brand awareness, lead generation, or conversions—while optimizing your budget to get the most value from every dollar spent",
    points: [
      "Comprehensive Audience Research & Targeting",
      "Ad Creation and Copywriting",
      "A/B Testing for Optimized Performance",
      "Ongoing Campaign Management and Monitoring",
      "Custom Budget Optimization Strategies",
      "Detailed Analytics and Report",
      "Retargeting Campaigns to Maximize Conversions",
      "Constinous Ad Creative Updates Based on Performance",
    ],
  },
];

export default function IndustriesBox() {
  return (
    <div className="relative w-full h-full bg-white/10 backdrop-blur-xl p-4 md:p-8 rounded-xl">
      <div className="grid w-full h-fit md:h-[85dvh] md:grid-cols-3 md:grid-rows-1 bg-[#252525] rounded-xl">
        {data.map((item, index) => (
          <div key={index} className="w-full h-full flex">
            <div className="col-span-1 row-span-1 row w-full h-full flex flex-col p-7 md:p-5 gap-4 justify-center">
              <div className="w-full h-fit flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={500}
                  height={500}
                  className="w-20 h-20 object-cover object-center"
                />
              </div>
              <h1 className=" font-Satoshi-Bold font-bold text-xl md:text-3xl">
                {item.name}
              </h1>
              <p className=" font-Satoshi-Light text-xs">{item.description}</p>
              <p className=" font-Satoshi-Bold text-xl">
                What&apos;s <span className="fancy-heading">Included</span>?
              </p>
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
                    <p className="text-xs font-Satoshi-Med font-medium">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
