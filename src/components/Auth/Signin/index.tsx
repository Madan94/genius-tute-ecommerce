"use client";
import React from "react";
import Image from "next/image";
import book from "../../../../public/images/hero/book-background.jpg"
import bookThief from "@/assets/images/book-thief.png";
const Signin = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full bg-[#bfff00] text-[#000] text-sm text-center py-2 font-medium z-50">
      Exclusive 10% Offer on your Orders above ₹ 499{" "}
      <a href="#" className="underline">Hurry Up!</a>
    </div>
    <div className="fixed top-9 left-0 w-full h-[58px] bg-white text-[#37455C] text-[30px] text-center py-4 font-medium z-50">
      GENIUS TUTE - Knowledge Begins here!{" "}
    </div>

    <section className="min-h-screen flex items-center justify-center bg-[#fff7f1] px-4 h-full"
    style={{ backgroundImage: `url(${book})` }} 
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 text-center">
        {/* Top Image Strip */}
        <div className="flex overflow-x-auto mb-4">
          {/* <Image
            src={book}
            alt="Book covers"
            className="w-full rounded-t-2xl object-cover"
            width={500}
          />  */}
        </div>

        {/* Cartoon + Offer Section */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Image
            src={book}
            alt="Book thief"
            className="w-16 h-16 object-contain"
          />
          <div className="text-left">
            <h2 className="text-green-700 font-bold text-2xl leading-tight">
              ₹100 OFF <br />
              <span className="text-sm font-normal text-black">on first order</span>
            </h2>
            <p className="text-[10px] mt-1">
              Use Coupon Code <strong className="text-green-800">FLAT100</strong> <br />
              <span className="text-gray-500">Minimum order value ₹599</span>
            </p>
          </div>
        </div>

        {/* Login Text */}
        <h3 className="text-xl font-bold mb-1">Login <span className="text-gray-500">or</span> Signup</h3>
        <p className="text-sm text-gray-500 mb-5">Please enter your mobile number</p>

        {/* Mobile Input */}
        <form>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-4">
            <span className="text-gray-500 mr-2">+91</span>
            <input
              type="phone"
              maxLength={10}
              placeholder="Enter 10 digit number"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 mb-4">
            By continuing, you agree to Genius Tute{" "}
            <a href="#" className="text-orange-500 font-medium underline">
              Terms of Use & Policy
            </a>
          </p>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-orange text-white font-bold py-2 rounded-md hover:bg-orange-dark transition"
          >
            CONTINUE
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Signin;
