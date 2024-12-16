"use client"
import { useState } from "react";
import AnimatedHeading from "./AnimatedTitle/AnimatedHeading";
import IndustriesBox from "./IndustriesBox";
import { useTabs } from "../hooks/use-tabs";
import { Framer } from "../lib/Framer";

export default function Tabs() {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Marketing",
        children: <IndustriesBox />,
        icon:"/svg/marketing.svg",
        activeIcon:"/svg/activeMarketing.svg",
        id: "Marketing",
      },
      {
        label: "Branding",
        children: <IndustriesBox />,
        icon:"/svg/branding.svg",
        activeIcon:"/svg/activeBranding.svg",
        id: "Branding",
      },
      {
        label: "SEO",
        children: <IndustriesBox />,
        icon:"/svg/seo.svg",
        activeIcon:"/svg/activeSeo.svg",
        id: "SEO",
      },
      {
        label: "Advertise",
        children:<IndustriesBox />,
        icon:"/svg/advertise.svg",
        activeIcon:"/svg/activeAdvertise.svg",
        id: "Advertise",
      },
      {
        label: "Development",
        children: <IndustriesBox />,
        icon:"/svg/development.svg",
        activeIcon:"/svg/activeDevelopment.svg",
        id: "Development",
      },
    ],
    initialTabId: "Matches",
  });
  const framer = useTabs(hookProps);

  return (
    <div className="w-full flex flex-col">
      <div
        className="w-full flex px-8 pt-16 border-b border-[#3A3A3A] overflow-x-auto scrollbar-hide justify-center"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex justify-center items-center space-x-4">
          <Framer.Tabs {...framer.tabProps} />
        </div>
      </div>

      <div className="pt-10">{framer.selectedTab.children}</div>
    </div>
  );
}
