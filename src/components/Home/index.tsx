import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Bestseller from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Newsletter from "../Common/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Bestseller />
      {/* <PromoBanner /> */}
      {/* <BestSeller /> */}
      <CounDown />
      {/* <Newsletter /> */}
    </main>
  );
};

export default Home;
