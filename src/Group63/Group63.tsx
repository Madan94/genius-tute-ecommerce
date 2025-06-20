"use client";

import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Select } from "../Select/Select";
import group from "./group.png";

export const Box = (): JSX.Element => {
  return (
    <div className="relative w-[1346px] h-[1667px]">
      <div className="fixed w-[1372px] h-[1667px] top-0 left-0">
        <div className="absolute top-80 left-[663px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[21px] whitespace-nowrap">
          Mathematics Chapter 1-5
        </div>

        <div className="absolute top-[423px] left-[663px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[21px] whitespace-nowrap">
          What you will learn?
        </div>

        <div className="absolute w-[1346px] h-[150px] top-[62px] left-0">
          <p className="absolute w-[1346px] top-0 left-0 [font-family:'Poppins-Light',Helvetica] font-light text-black text-2xl text-justify tracking-[0] leading-[29.7px]">
            Discover the comprehensive and trusted NCERT Mathematics textbook
            designed for [Grade Level]. This essential resource covers the
            entire syllabus with clarity and precision, making it ideal for
            students aiming to excel in mathematics. Discover the comprehensive
            and trusted NCERT Mathematics textbook designed for [Grade Level].
            This essential resource covers the entire syllabus with clarity and
            precision, making it ideal for students aiming to excel in
            mathematics.
          </p>

          <p className="absolute w-[1346px] top-0 left-0 [font-family:'Poppins-Light',Helvetica] font-light text-black text-2xl text-justify tracking-[0] leading-[29.7px]">
            Discover the comprehensive and trusted NCERT Mathematics textbook
            designed for [Grade Level]. This essential resource covers the
            entire syllabus with clarity and precision, making it ideal for
            students aiming to excel in mathematics. Discover the comprehensive
            and trusted NCERT Mathematics textbook designed for [Grade Level].
            This essential resource covers the entire syllabus with clarity and
            precision, making it ideal for students aiming to excel in
            mathematics.
          </p>
        </div>

        <p className="w-[1280px] top-[856px] left-[7px] text-[28px] leading-[34.7px] absolute [font-family:'Poppins-Light',Helvetica] font-light text-black text-justify tracking-[0]">
          Discover the comprehensive and trusted NCERT Mathematics textbook
          designed for [Grade Level]. This essential resource covers the entire
          syllabus with clarity and precision, making it ideal for students
          aiming to excel in mathematics. Discover the comprehensive and trusted
          NCERT Mathematics textbook designed for [Grade Level]. This essential
          resource covers the entire syllabus with clarity and precision, making
          it ideal for students aiming to excel in mathematics.
        </p>

        <p className="w-[524px] top-[465px] left-[663px] text-2xl leading-[29.7px] absolute [font-family:'Poppins-Light',Helvetica] font-light text-black text-justify tracking-[0]">
          Discover the comprehensive and trusted NCERT Mathematics textbook
          designed for [Grade Level].
        </p>

        <p className="absolute w-[461px] top-[362px] left-[663px] [font-family:'Poppins-Light',Helvetica] font-light text-black text-2xl text-justify tracking-[0] leading-[29.7px]">
          by Maths Senior Faculty, CIT Chennai
        </p>

        <div className="top-0 left-0 absolute [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[38px] tracking-[0] leading-[30px] whitespace-nowrap">
          Description
        </div>

        <div className="absolute top-[244px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[38px] tracking-[0] leading-[30px] whitespace-nowrap">
          Online Classes
        </div>

        <div className="top-[686px] left-[3px] absolute [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[38px] tracking-[0] leading-[30px] whitespace-nowrap">
          Course Content
        </div>

        <div className="top-[1090px] left-[7px] absolute [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[38px] tracking-[0] leading-[30px] whitespace-nowrap">
          Course Modules
        </div>

        <div className="top-[804px] left-[7px] absolute [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[38px] tracking-[0] leading-[30px] whitespace-nowrap">
          Description
        </div>

        <p className="top-[738px] left-1 [font-family:'Poppins-Light',Helvetica] font-light text-black text-[34px] absolute tracking-[0] leading-[30px] whitespace-nowrap">
          5 Sections | 25 Videos | Hand Written Notes | 4 hours
        </p>

        <div className="flex w-[245px] h-[72px] items-center justify-center gap-2.5 px-[87px] py-[25px] absolute top-[642px] left-[942px] bg-[#fd5c00] rounded-[5px]">
          <Button
            className="!h-[unset] !mr-[-29.00px] !ml-[-29.00px] !flex-[0_0_auto] !relative !w-[unset]"
            color="primary"
            size="medium"
          />
        </div>

        <div className="flex w-[245px] h-[72px] items-center justify-center gap-2.5 px-[75px] py-[22px] absolute top-[642px] left-[666px] rounded-[5px] border border-solid border-[#d46336]">
          <img
            className="relative w-[34.94px] h-[33.61px] mt-[-2.80px] mb-[-2.80px] ml-[-43.97px]"
            alt="Group"
            src={group.src}
          />

          <Button
            className="!h-[unset] !mr-[-43.97px] !ml-[-1.03px] !flex-[0_0_auto] !relative !w-[unset]"
            color="error"
            size="medium"
          />
        </div>

        <Avatar
          avatarVariant="default"
          className="!absolute bg-[url(/class-image-1.png)] !left-0 !top-[310px]"
        />
        <Card
          cardVariant="default"
          className="!absolute !left-[13px] !top-[1156px]"
          imgClassName="!left-0 !top-[303px]"
          imgClassNameOverride="!left-0 !top-[404px]"
          lineClassName="!left-0 !top-[100px]"
          lineClassNameOverride="!left-0 !top-[205px]"
          mdiTickCircleClassName="!left-9 !top-[35px]"
          mdiTickCircleClassName1="!left-9 !top-60"
          mdiTickCircleClassName2="!left-9 !top-[334px]"
          mdiTickCircleClassName3="!left-9 !top-[448px]"
          mdiTickCircleClassNameOverride="!left-9 !top-[139px]"
        />
        <div className="flex flex-col w-[311px] items-start gap-2.5 absolute top-[567px] left-[666px]">
          <Select
            className="!self-stretch !w-full"
            color="primary"
            disabled="enabled"
            simpleLineIconsClassName="!left-[282px] !top-5"
          />
        </div>
      </div>
    </div>
  );
};
