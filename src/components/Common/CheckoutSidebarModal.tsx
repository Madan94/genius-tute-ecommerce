"use client";
import React, { useEffect, useState } from "react";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import EmptyCart from "../Common/CartSidebarModal/EmptyCart";

const CheckoutSidebarModal = () => {
  const { isCartModalOpen, closeCartModal } = useCartModalContext();
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cod", // cash on delivery default
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".modal-content")) {
        closeCartModal();
      }
    }

    if (isCartModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartModalOpen, closeCartModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    // You’d connect to backend/payment gateway here
    alert(`Order placed by ${formData.fullName} for $${totalPrice}`);
    closeCartModal();
  };

  return (
    <div
      className={`fixed top-0 left-0 z-99999 overflow-y-auto no-scrollbar w-full h-screen bg-dark/70 ease-linear duration-300 ${
        isCartModalOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-end">
        <div className="w-full max-w-[500px] shadow-1 bg-white px-4 sm:px-7.5 lg:px-11 relative modal-content">
          <div className="sticky top-0 bg-white flex items-center justify-between pb-7 pt-4 sm:pt-7.5 lg:pt-11 border-b border-gray-3 mb-7.5">
            <h2 className="font-medium text-dark text-lg sm:text-2xl">
              Checkout
            </h2>
            <button
              onClick={closeCartModal}
              aria-label="close modal"
              className="text-dark-5 hover:text-dark"
            >
              ✕
            </button>
          </div>

          <div className="h-[66vh] overflow-y-auto no-scrollbar">
            {cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                >
                  <option value="cod">Cash on Delivery</option>
                  <option value="card">Card (Coming Soon)</option>
                </select>
              </form>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-gray-3 bg-white pt-5 pb-4 sm:pb-7.5 lg:pb-11 mt-7.5 sticky bottom-0">
              <div className="flex items-center justify-between gap-5 mb-6">
                <p className="font-medium text-xl text-dark">Total:</p>
                <p className="font-medium text-xl text-dark">₹{totalPrice}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full font-medium text-white bg-orange py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-orange-dark"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSidebarModal;
