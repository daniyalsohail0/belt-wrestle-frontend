import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Faqs from "./pages/faqs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  );
}

export default App;
