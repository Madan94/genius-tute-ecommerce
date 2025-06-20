"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CheckoutModalContextType {
  isCheckoutModalOpen: boolean;
  openCheckoutModal: () => void;
  closeCheckoutModal: () => void;
}

const CheckoutModalContext = createContext<CheckoutModalContextType | undefined>(
  undefined
);

export const useCheckoutModalContext = () => {
  const context = useContext(CheckoutModalContext);
  if (!context) {
    throw new Error("useCheckoutModalContext must be used within a CheckoutModalProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const CheckoutModalProvider = ({ children }: Props) => {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const openCheckoutModal = () => setIsCheckoutModalOpen(true);
  const closeCheckoutModal = () => setIsCheckoutModalOpen(false);

  return (
    <CheckoutModalContext.Provider
      value={{ isCheckoutModalOpen, openCheckoutModal, closeCheckoutModal }}
    >
      {children}
    </CheckoutModalContext.Provider>
  );
};
