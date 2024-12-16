import React from "react";
import { cn } from "../../lib/utils";

export const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      width="1172"
      height="1094"
      viewBox="0 0 1172 1094"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_9_123)">
        <path
          d="M-133.675 271.556L-283.153 100.838L922 823.014L1071.48 993.733L-133.675 271.556Z"
          fill="#FF8133"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_9_123"
          x="-383.153"
          y="0.837891"
          width="1554.63"
          height="1092.9"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_9_123"
          />
        </filter>
      </defs>
    </svg>
  );
};
