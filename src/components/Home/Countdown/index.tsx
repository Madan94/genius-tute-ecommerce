"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CounDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    // @ts-ignore
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 flex justify-center">
      <div className="max-h-[442px] max-w-[90%] w-full bg-[#FFF2EA] rounded-2xl shadow-lg overflow-hidden flex flex-row items-center p-6 sm:p-8">
        
        {/* Offer Text Section */}
        <div className="flex-1 justify-evenly">
          {/* <span className="block text-blue font-semibold text-sm mb-2">
            Don’t Miss!!
          </span> */}

          <h2 className="font-bold text-dark text-4xl sm:text-5xl mb-2">
            Books <span className="font-bold text-[#FF7C20] text-4xl sm:text-5xl mb-2">25% Off</span> Now!
          </h2>

          <p className="font-bold text-dark text-5xl sm:text-5xl mb-2">
            Don't Miss Such a deal. Hurry Up.
          </p>

          {/* CTA Button */}
          <a
            href="/shop-with-sidebar"
            className="inline-flex items-center justify-center font-medium text-white bg-[#ff7c20] py-2 px-6 rounded-md transition duration-200 hover:bg-[#e66b1c]"
          >
            Purchase Now
          </a>
        </div>

        {/* Offer Image */}
        <div className="w-[250px] flex-shrink-0">
          <Image
            src="/images/countdown/offer.png"
            alt="Offer Product"
            className="rounded-lg"
            width={250}
            height={200}
          />
        </div>

      </div>
    </section>
  );
};

export default CounDown;
