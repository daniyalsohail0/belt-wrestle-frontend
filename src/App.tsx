import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Faqs from "./pages/faqs";
import ContactUs from "./pages/contact-us";
import ProductPage from "./pages/product";
import ReviewsPage from "./pages/reviews";
import CookieNotice from "./pages/cookie-notice";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsCondition from "./pages/terms";
import ShippingPolicy from "./pages/shipping-policy";
import RefundPolicy from "./pages/refund-policy";
import { useEffect, useState } from "react";
import Preloader from "./component/ui/Preloader/Preloader";
import CustomProductPage from "./pages/custom-product";
import CustomziedBelts from "./pages/customized-belts";
import Shop from "./pages/shop";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading state on every page change
    setIsLoading(true);

    // Simulate loading delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust delay time as needed

    // Cleanup function to clear timeout
    return () => clearTimeout(delay);
  }, [location]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/reviews" element={<ReviewsPage />} />

          {/** Products Route */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/customized-belts" element={<CustomziedBelts />} />
          

          {/** Checkout Process Routes */}
          <Route path="/checkout">

          </Route>

          {/** Product Routes */}
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/custom-products/:id" element={<CustomProductPage />} />

          {/** Policy Routes */}
          <Route path="/policies">
            <Route path="cookie-policy" element={<CookieNotice />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-condition" element={<TermsCondition />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
