import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Faqs from "./pages/faqs";
import ProductPage from "./pages/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/product-page" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
