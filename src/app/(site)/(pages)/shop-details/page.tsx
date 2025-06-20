import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import { Product } from "@/types/product";
import shopData from "@/components/Shop/shopData";

export const metadata: Metadata = {
  title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const ShopDetailsPage = () => {
  return (
    <main>
      {shopData.map((item,key) => (
        <ShopDetails key={key} item={item} />
      ))}
      </main>
  );
};

export default ShopDetailsPage;
// Example: /product/3
// import { useRouter } from "next/router";
// import shopData from "@/components/Shop/shopData";
// import ShopDetails from "@/components/ShopDetails";

// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Convert id to number and find matching product
//   const product = shopData.find((item) => item.id === Number(id));

//   if (!product) return <p>Product not found.</p>;

//   return <ShopDetails item={product} />;
// };

// export default ProductPage;
