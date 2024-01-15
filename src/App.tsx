import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />

      {/* Policy Routes */}
      <Route path="/policies">
        <Route path="cookie-policy" element={<CookieNotice />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-condition" element={<TermsCondition />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
