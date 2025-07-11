"use client";
import React, { use, useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Newsletter from "../Common/Newsletter";
import RecentlyViewdItems from "./RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { addItemToCart } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Product } from "@/types/product";
import { ChevronDown,ShoppingCart, Star } from "lucide-react";

const ShopDetails = ({ item }: { item: Product }) => {
  const { openPreviewModal } = usePreviewSlider();
  const [previewImg, setPreviewImg] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };
  
const chapters = [
  { id: 1, title: "Algebra", videos: ["Intro to Algebra", "Linear Equations", "Quadratic Equations", "Polynomials", "Practice Set"] },
  { id: 2, title: "Probability", videos: ["Basics", "Permutations", "Combinations", "Events", "Sample Problems"] },
  { id: 3, title: "Statistics", videos: ["Mean, Median, Mode", "Data Sets", "Graphs", "Standard Deviation", "Practice"] },
  { id: 4, title: "Geometry", videos: ["Points & Lines", "Angles", "Triangles", "Circles", "Theorems"] },
  { id: 5, title: "Integration", videos: ["Introduction", "Methods of Integration", "Definite Integrals", "Indefinite Integrals", "Applications"] },
];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const ratingDistribution = [
    { stars: 5, percent: 75 },
    { stars: 4, percent: 16 },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 3 },
  ];

  const alreadyExist = localStorage.getItem("itemDetails");
  const itemFromStorage = useAppSelector(
    (state) => state.productDetailsReducer.value
  );

  const product = alreadyExist ? JSON.parse(alreadyExist) : itemFromStorage;

  useEffect(() => {
    localStorage.setItem("itemDetails", JSON.stringify(item));
  }, [item]);

  // pass the item here when you get the real data.
  const handlePreviewSlider = () => {
    openPreviewModal();
  };

  console.log(item);
   const [expandedId, setExpandedId] = useState(null);

    const toggleChapter = (id) => {
      setExpandedId((prev) => (prev === id ? null : id));
    };

  return (
    <>
      {/* <Breadcrumb title={"Shop Details"} pages={["shop details"]} /> */}

      {item.title === "" ? (
        "Please add item Havit HV- USB Gamepad"
      ) : (
        <>
          <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-50">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
              <div className="flex flex-row lg:flex-row gap-7.5 xl:gap-17.5">
                <div className="lg:max-w-[570px] w-full">
                    <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-white border-gray-5 p-4 sm:p-7.5 relative flex items-center justify-center">
                      <div className="flex flex-col sm:flex-nowrap gap-4.5 mt-6">
                        {item.imgs?.thumbnails.map((item, key) => (
                          <button
                            onClick={() => setPreviewImg(key)}
                            key={key}
                            className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-white shadow-1 ease-out duration-200 border-2 hover:border-blue ₹{
                              key === previewImg
                                ? "border-blue"
                                : "border-transparent"
                            }`}
                          >
                            <Image
                              width={50}
                              height={50}
                              src={item}
                              alt="thumbnail"
                            />
                          </button>
                        ))}
                    </div>
                    <div className="pl-10">
                      <button
                        onClick={handlePreviewSlider}
                        aria-label="button for zoom"
                        className="gallery__Image w-11 h-11 rounded-[5px] bg-white shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-blue absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
                      >
                        <svg
                          className="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.11493 1.14581L9.16665 1.14581C9.54634 1.14581 9.85415 1.45362 9.85415 1.83331C9.85415 2.21301 9.54634 2.52081 9.16665 2.52081C7.41873 2.52081 6.17695 2.52227 5.23492 2.64893C4.31268 2.77292 3.78133 3.00545 3.39339 3.39339C3.00545 3.78133 2.77292 4.31268 2.64893 5.23492C2.52227 6.17695 2.52081 7.41873 2.52081 9.16665C2.52081 9.54634 2.21301 9.85415 1.83331 9.85415C1.45362 9.85415 1.14581 9.54634 1.14581 9.16665L1.14581 9.11493C1.1458 7.43032 1.14579 6.09599 1.28619 5.05171C1.43068 3.97699 1.73512 3.10712 2.42112 2.42112C3.10712 1.73512 3.97699 1.43068 5.05171 1.28619C6.09599 1.14579 7.43032 1.1458 9.11493 1.14581ZM16.765 2.64893C15.823 2.52227 14.5812 2.52081 12.8333 2.52081C12.4536 2.52081 12.1458 2.21301 12.1458 1.83331C12.1458 1.45362 12.4536 1.14581 12.8333 1.14581L12.885 1.14581C14.5696 1.1458 15.904 1.14579 16.9483 1.28619C18.023 1.43068 18.8928 1.73512 19.5788 2.42112C20.2648 3.10712 20.5693 3.97699 20.7138 5.05171C20.8542 6.09599 20.8542 7.43032 20.8541 9.11494V9.16665C20.8541 9.54634 20.5463 9.85415 20.1666 9.85415C19.787 9.85415 19.4791 9.54634 19.4791 9.16665C19.4791 7.41873 19.4777 6.17695 19.351 5.23492C19.227 4.31268 18.9945 3.78133 18.6066 3.39339C18.2186 3.00545 17.6873 2.77292 16.765 2.64893ZM1.83331 12.1458C2.21301 12.1458 2.52081 12.4536 2.52081 12.8333C2.52081 14.5812 2.52227 15.823 2.64893 16.765C2.77292 17.6873 3.00545 18.2186 3.39339 18.6066C3.78133 18.9945 4.31268 19.227 5.23492 19.351C6.17695 19.4777 7.41873 19.4791 9.16665 19.4791C9.54634 19.4791 9.85415 19.787 9.85415 20.1666C9.85415 20.5463 9.54634 20.8541 9.16665 20.8541H9.11494C7.43032 20.8542 6.09599 20.8542 5.05171 20.7138C3.97699 20.5693 3.10712 20.2648 2.42112 19.5788C1.73512 18.8928 1.43068 18.023 1.28619 16.9483C1.14579 15.904 1.1458 14.5696 1.14581 12.885L1.14581 12.8333C1.14581 12.4536 1.45362 12.1458 1.83331 12.1458ZM20.1666 12.1458C20.5463 12.1458 20.8541 12.4536 20.8541 12.8333V12.885C20.8542 14.5696 20.8542 15.904 20.7138 16.9483C20.5693 18.023 20.2648 18.8928 19.5788 19.5788C18.8928 20.2648 18.023 20.5693 16.9483 20.7138C15.904 20.8542 14.5696 20.8542 12.885 20.8541H12.8333C12.4536 20.8541 12.1458 20.5463 12.1458 20.1666C12.1458 19.787 12.4536 19.4791 12.8333 19.4791C14.5812 19.4791 15.823 19.4777 16.765 19.351C17.6873 19.227 18.2186 18.9945 18.6066 18.6066C18.9945 18.2186 19.227 17.6873 19.351 16.765C19.4777 15.823 19.4791 14.5812 19.4791 12.8333C19.4791 12.4536 19.787 12.1458 20.1666 12.1458Z"
                            fill=""
                          />
                        </svg>
                      </button>

                      <Image
                        src={item.imgs.previews[previewImg]}
                        alt="items-details"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>   
                </div>

                {/* <!-- item content --> */}
                <div className="max-w-[539px] w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
                      {item.title}
                    </h2>

                    <div className="inline-flex font-medium text-custom-sm text-white bg-orange rounded py-0.5 px-2.5">
                      30% OFF
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
                    <div className="flex items-center gap-2.5">
                      {/* <!-- stars --> */}
                      <div className="flex items-center gap-1">
                        <svg
                          className="fill-[#FFA645]"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_375_9172)">
                            <path
                              d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_375_9172">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <svg
                          className="fill-[#FFA645]"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_375_9172)">
                            <path
                              d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_375_9172">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <svg
                          className="fill-[#FFA645]"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_375_9172)">
                            <path
                              d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_375_9172">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <svg
                          className="fill-[#FFA645]"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_375_9172)">
                            <path
                              d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_375_9172">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <svg
                          className="fill-[#FFA645]"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_375_9172)">
                            <path
                              d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_375_9172">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <span> (5 customer reviews) </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_375_9221)">
                          <path
                            d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                            fill="#22AD5C"
                          />
                          <path
                            d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                            fill="#22AD5C"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_375_9221">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className="text-green"> In Stock </span>
                    </div>
                  </div>

                  <h3 className="font-medium text-custom-1 mb-4.5">
                    <span className="text-sm sm:text-base text-dark">
                      Price: ₹{item.price}
                    </span>
                    <span className="line-through">
                      {" "}
                      ₹{item.discountedPrice}{" "}
                    </span>
                  </h3>

                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                          fill="#3C50E0"
                        />
                      </svg>
                      Free delivery available
                    </li>

                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                          fill="#3C50E0"
                        />
                      </svg>
                      Sales 30% Off Use Code: PROMO30
                    </li>
                  </ul>

                  <form onSubmit={(e) => e.preventDefault()}>

                    <div className="flex flex-wrap items-center gap-4.5">
                      <div className="flex items-center rounded-md border border-gray-3">
                        <button
                          aria-label="button for remove item"
                          className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
                          onClick={() =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                        >
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.33301 10.0001C3.33301 9.53984 3.7061 9.16675 4.16634 9.16675H15.833C16.2932 9.16675 16.6663 9.53984 16.6663 10.0001C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10.0001Z"
                              fill=""
                            />
                          </svg>
                        </button>

                        <span className="flex items-center justify-center w-16 h-12 border-x border-gray-4">
                          {quantity}
                        </span>

                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          aria-label="button for add item"
                          className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
                        >
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.33301 10C3.33301 9.5398 3.7061 9.16671 4.16634 9.16671H15.833C16.2932 9.16671 16.6663 9.5398 16.6663 10C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10Z"
                              fill=""
                            />
                            <path
                              d="M9.99967 16.6667C9.53944 16.6667 9.16634 16.2936 9.16634 15.8334L9.16634 4.16671C9.16634 3.70647 9.53944 3.33337 9.99967 3.33337C10.4599 3.33337 10.833 3.70647 10.833 4.16671L10.833 15.8334C10.833 16.2936 10.4599 16.6667 9.99967 16.6667Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>

                      <button
                        onClick={() => handleAddToCart()}
                        className="inline-flex font-medium text-white bg-orange py-3 px-7 rounded-md ease-out duration-200 hover:bg-orange-dark"
                      >
                        Add to cart
                      </button>
                      <a
                        href="#"
                        className="inline-flex font-medium text-white bg-orange py-3 px-7 rounded-md ease-out duration-200 hover:bg-orange-dark"
                      >
                        Buy Now
                      </a>

                      <a
                        href="#"
                        className="flex items-center justify-center w-12 h-12 rounded-md border border-gray-3 ease-out duration-200 hover:text-white hover:bg-dark hover:border-transparent"
                      >
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.62436 4.42423C3.96537 5.18256 2.75 6.98626 2.75 9.13713C2.75 11.3345 3.64922 13.0283 4.93829 14.4798C6.00072 15.6761 7.28684 16.6677 8.54113 17.6346C8.83904 17.8643 9.13515 18.0926 9.42605 18.3219C9.95208 18.7366 10.4213 19.1006 10.8736 19.3649C11.3261 19.6293 11.6904 19.75 12 19.75C12.3096 19.75 12.6739 19.6293 13.1264 19.3649C13.5787 19.1006 14.0479 18.7366 14.574 18.3219C14.8649 18.0926 15.161 17.8643 15.4589 17.6346C16.7132 16.6677 17.9993 15.6761 19.0617 14.4798C20.3508 13.0283 21.25 11.3345 21.25 9.13713C21.25 6.98626 20.0346 5.18256 18.3756 4.42423C16.7639 3.68751 14.5983 3.88261 12.5404 6.02077C12.399 6.16766 12.2039 6.25067 12 6.25067C11.7961 6.25067 11.601 6.16766 11.4596 6.02077C9.40166 3.88261 7.23607 3.68751 5.62436 4.42423ZM12 4.45885C9.68795 2.39027 7.09896 2.1009 5.00076 3.05999C2.78471 4.07296 1.25 6.42506 1.25 9.13713C1.25 11.8027 2.3605 13.8361 3.81672 15.4758C4.98287 16.789 6.41022 17.888 7.67083 18.8586C7.95659 19.0786 8.23378 19.2921 8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.66C10.6739 20.9855 11.3096 21.25 12 21.25C12.6904 21.25 13.3261 20.9855 13.8832 20.66C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999C15.7662 19.2921 16.0434 19.0786 16.3292 18.8586C17.5898 17.888 19.0171 16.789 20.1833 15.4758C21.6395 13.8361 22.75 11.8027 22.75 9.13713C22.75 6.42506 21.2153 4.07296 18.9992 3.05999C16.901 2.1009 14.3121 2.39027 12 4.45885Z"
                            fill=""
                          />
                        </svg>
                      </a>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-6xl mx-auto p-6">
              <h2 className="text-2xl font-bold mb-4">Online Classes</h2>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Image Section */}
                <div className="flex-shrink-0">
                  <Image
                    src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.7a5f4c1b1d65d660cfa0c3b5b5ef7ed1973d6fbf.png"
                    alt="Instructor"
                    className="rounded-xl w-full md:w-80"
                  />
                </div>

                {/* Right Content Section */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      Mathematics Chapter 1–5
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      by Maths Senior Faculty, CIT Chennai
                    </p>

                    <h4 className="text-md font-bold mt-3">What you will learn?</h4>
                    <p className="text-gray-800 mt-1">
                      Discover the comprehensive and trusted NCERT Mathematics textbook
                      designed for [Grade Level].
                    </p>

                    <button className="bg-purple-500 text-white px-4 py-2 mt-4 rounded-md flex items-center gap-1 text-sm">
                      Select your Language <ChevronDown size={16} />
                    </button>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 border border-orange text-orange rounded-md font-medium hover:bg-orange hover:text-white transition-colors">
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                    <button className="bg-[#FD5C00] text-white px-6 py-2 rounded-md font-bold hover:bg-white  hover:border-orange hover:text-orange transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="mt-8">
                <h4 className="font-bold text-xl mb-2">Course Content</h4>
                <p className="text-gray-800 mb-4">
                  5 Sections | 25 Videos | Hand Written Notes | 4 hours
                </p>

                <h4 className="font-bold text-xl mb-2">Description</h4>
                <p className="text-gray-800">
                  Discover the comprehensive and trusted NCERT Mathematics textbook
                  designed for [Grade Level]. This essential resource covers the entire
                  syllabus with clarity and precision, making it ideal for students
                  aiming to excel in mathematics. Discover the comprehensive and trusted
                  NCERT Mathematics textbook designed for [Grade Level]. This essential
                  resource covers the entire syllabus with clarity and precision,
                  making it ideal for students aiming to excel in mathematics.
                </p>
              </div>
            </div>
            {/* <div className="max-w-6xl mx-auto p-6">
              <h2 className="text-2xl font-bold mb-4">Online Classes</h2>
              <div className="max-w-[90%] mx-auto mt-10 border border-[#5F42D4] rounded-2xl overflow-hidden">
                {chapters.map((chapter, index) => (
                  <div
                    key={chapter.id}
                    className={`flex justify-between items-center p-4 ${
                      index !== chapters.length - 1 ? "border-b border-[#5F42D4]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl"></span>
                      <span className="font-semibold text-lg">
                        Chapter {chapter.id} - {chapter.title}
                      </span>
                    </div>
                    <button className="flex items-center gap-1 bg-[#B463FF] hover:bg-[#B463FF]-500 text-white font-semibold py-2 px-4 rounded-xl text-sm">
                      5 Videos <ChevronDown size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>   */}
            <div className="max-w-6xl mx-auto p-6">
              <h2 className="text-2xl font-bold mb-4">Online Classes</h2>
                <div className="max-w-[90%] mx-auto mt-10 border border-[#5F42D4] rounded-2xl overflow-hidden">
                {chapters.map((chapter, index) => (
                  <div key={chapter.id} className="border-b border-[#5F42D4]">
                    <div
                      className={`flex justify-between items-center p-4 ${
                        index === chapters.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg">
                          Chapter {chapter.id} - {chapter.title}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleChapter(chapter.id)}
                        className="flex items-center gap-1 bg-[#B463FF] hover:bg-[#9a51de] text-white font-semibold py-2 px-4 rounded-xl text-sm"
                      >
                        5 Videos <ChevronDown size={16} />
                      </button>
                    </div>

                    {expandedId === chapter.id && (
                      <ul className="bg-purple-50 px-8 py-4 text-sm text-gray-700 space-y-2">
                        {chapter.videos.map((video, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            🎬 Video {idx + 1}: {video}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>


            <div className="max-w-6xl mx-auto px-4 py-10">
              <h2 className="text-3xl font-bold mb-6">Reviews</h2>
              <div className="grid md:grid-cols-2 gap-10">
                {/* Write a review */}
                <div>
                  <h3 className="text-lg font-medium mb-3">Write your review</h3>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, index) => {
                      const current = index + 1;
                      return (
                        <button
                          key={index}
                          onClick={() => setRating(current)}
                          onMouseEnter={() => setHover(current)}
                          onMouseLeave={() => setHover(0)}
                          className="transition-transform duration-150"
                        >
                          <Star
                            fill={
                              current <= (hover || rating) ? "#facc15" : "none"
                            }
                            stroke={
                              current <= (hover || rating) ? "#facc15" : "#d1d5db"
                            }
                            size={28}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <textarea
                    placeholder="Write here..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full h-32 p-4 rounded-lg border border-gray-5 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                  />
                  <button
                    className="mt-4 px-6 py-2 bg-orange text-white rounded-lg shadow hover:bg-orange-600 transition"
                  >
                    Submit
                  </button>
                </div>

                {/* Rating summary */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h4 className="text-center text-lg font-medium mb-2">Customer reviews</h4>
                  <div className="flex justify-center items-center mb-2">
                    <Star fill="#facc15" stroke="#facc15" />
                    <Star fill="#facc15" stroke="#facc15" />
                    <Star fill="#facc15" stroke="#facc15" />
                    <Star fill="#facc15" stroke="#facc15" />
                    <Star fill="none" stroke="#facc15" />
                  </div>
                  <p className="text-center text-gray-500 mb-6">1,202 global ratings</p>

                  <div className="space-y-2">
                    {ratingDistribution.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-full bg-gray-1 h-3 rounded-full overflow-hidden">
                          <div
                            className="bg-[#261E27] h-3"
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-[#261E27] whitespace-nowrap">
                          {item.stars} {item.stars === 1 ? "Star" : "Stars"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          <RecentlyViewdItems />
        </>
      )}
    </>
  );
};

export default ShopDetails;
