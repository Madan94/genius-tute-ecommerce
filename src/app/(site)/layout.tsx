// "use client";
// import { useState, useEffect } from "react";
// import "../css/euclid-circular-a-font.css";
// import "../css/style.css";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// import { ModalProvider } from "../context/QuickViewModalContext";
// import { CartModalProvider } from "../context/CartSidebarModalContext";
// import { ReduxProvider } from "@/redux/provider";
// import QuickViewModal from "@/components/Common/QuickViewModal";
// import CartSidebarModal from "@/components/Common/CartSidebarModal";
// import { PreviewSliderProvider } from "../context/PreviewSliderContext";
// import PreviewSliderModal from "@/components/Common/PreviewSlider";

// import ScrollToTop from "@/components/Common/ScrollToTop";
// import PreLoader from "@/components/Common/PreLoader";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return (
//     <html lang="en" suppressHydrationWarning={true}>
//       <body>
//         {loading ? (
//           <PreLoader />
//         ) : (
//           <>
//             <ReduxProvider>
//               <CartModalProvider>
//                 <ModalProvider>
//                   <PreviewSliderProvider>
//                     <Header />
//                     {children}

//                     <QuickViewModal />
//                     <CartSidebarModal />
//                     <PreviewSliderModal />
//                   </PreviewSliderProvider>
//                 </ModalProvider>
//               </CartModalProvider>
//             </ReduxProvider>
//             <ScrollToTop />
//             <Footer />
//           </>
//         )}
//       </body>
//     </html>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ import this to get current route

import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";
import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import {CheckoutModalProvider} from "../context/CheckoutModalContextType";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname(); // 👈 gets current URL path

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // 👇 Pages where you want to hide header/footer
  const hideLayout = ["/signin"];

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
                <CartModalProvider>
              <CheckoutModalProvider>
                  <ModalProvider>
                    <PreviewSliderProvider>
                      {!hideLayout.includes(pathname) && <Header />}
                      {children}
                      <QuickViewModal />
                      <CartSidebarModal />
                      <PreviewSliderModal />
                    </PreviewSliderProvider>
                  </ModalProvider>
              </CheckoutModalProvider>
                </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
            {!hideLayout.includes(pathname) && <Footer />}
          </>
        )}
      </body>
    </html>
  );
}
