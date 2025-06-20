"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

import mainbanner1 from "../../../../public/images/hero/main-banner1.jpg";
import mainbanner2 from "../../../../public/images/hero/main-banner2.jpg";
import mainbanner3 from "../../../../public/images/hero/main-banner3.jpg";
import mainbanner4 from "../../../../public/images/hero/main-banner4.jpg";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div>
            <Image
              src={mainbanner1}
              alt="main-banner"
              width={1488}
              height={587}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div>
            <Image
              src={mainbanner2}
              alt="main-banner"
              width={1488}
              height={587}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div>
            <Image
              src={mainbanner3}
              alt="main-banner"
              width={1488}
              height={587}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div>
            <Image
              src={mainbanner4}
              alt="main-banner"
              width={1488}
              height={587}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
