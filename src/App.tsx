import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Faqs from "./pages/faqs";
import ContactUs from './pages/contact-us'
import ProductPage from "./pages/product";
import BlogPage from "./pages/blog";
import ReviewsPage from "./pages/reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
    </Routes>
  );
}

export default App;
