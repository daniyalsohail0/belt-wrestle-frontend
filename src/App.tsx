import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Faqs from "./pages/faqs";
import ContactUs from "./pages/contact-us";
import ProductPage from "./pages/product";
import BlogPage from "./pages/blog";
import ReviewsPage from "./pages/reviews";
import CookieNotice from "./pages/cookie-notice";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsCondition from "./pages/terms";
import ShippingPolicy from "./pages/shipping-policy";
import RefundPolicy from "./pages/refund-policy";
import CustomKeychains from "./pages/custom-keychains";
import CustomPatches from "./pages/custom-patches";
import CustomShirts from "./pages/custom-shirts";
import { useEffect, useState } from "react";
import Preloader from "./component/ui/Preloader/Preloader";
import AEWBelts from "./pages/aew-belts";

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
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />

          {/* <Route path="/collection">
            <Route path="aew-belts" element={<AEWBelts />} />
          </Route> */}

          <Route path="/shop" element={<AEWBelts />} />

          <Route path="/custom">
            <Route path="keychains" element={<CustomKeychains />} />
            <Route path="patches" element={<CustomPatches />} />
            <Route path="tshirts" element={<CustomShirts />} />
          </Route>

          <Route path="/product/:id" element={<ProductPage />} />

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
