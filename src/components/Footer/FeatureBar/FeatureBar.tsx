"use client";

import * as React from "react";
import iconDelivery from "./icon-delivery.svg";
import iconSecure from "./icon-secure.svg";
import mdiCashOnDelivery from "./mdi-cash-on-delivery.svg";
import phLineVertical from "./ph-line-vertical.svg";
import Image from "next/image";

// Reusable FeatureItem component
const FeatureItem = ({
  icon,
  label,
  alt,
}: {
  icon: string;
  label: string;
  alt: string;
}) => (
  <div className="flex items-center gap-2">
    <div className="relative w-[50px] h-[50px]">
      <div className="absolute w-full h-full  bg-cover">
        <div className="absolute top-[7px] left-[7px] w-9 h-9 bg-button rounded-[18.12px]" />
      </div>
      <Image
        className="absolute top-3 left-3 w-[25px] h-[25px] text-[#000]"
        src={icon}
        alt={alt}
      />
    </div>
    <span className="font-semibold text-black text-base leading-7 whitespace-nowrap">
      {label}
    </span>
  </div>
);

// Vertical divider component
const Divider = () => (
  <Image
    className="w-[35px] h-[35px]"
    src={phLineVertical}
    alt="Vertical divider"
    aria-hidden="true"
  />
);

export const FeatureBar: React.FC = () => {
  return (
    <section
      className="w-full max-w-full h-[117px] bg-[#bfff00] flex items-center justify-center gap-10 px-4"
      aria-label="Service Features"
    >
      <div className="flex items-center gap-10">
        <FeatureItem
          icon={iconDelivery}
          label="Free Delivery"
          alt="Free delivery icon"
        />
        <Divider />
        <FeatureItem
          icon={mdiCashOnDelivery}
          label="Cash on Delivery"
          alt="Cash on delivery icon"
        />
        <Divider />
        <FeatureItem
          icon={iconSecure}
          label="Original Products"
          alt="Original products icon"
        />
        <Divider />
        <FeatureItem
          icon={iconDelivery}
          label="Easy Replacement"
          alt="Easy replacement icon"
        />
      </div>
    </section>
  );
};
