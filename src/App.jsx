import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Layout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Industry from "./pages/Industry";
import Media from "./pages/Media";
import Company from "./pages/Company"

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/media" element={<Media />} />
      </Route>
    </Routes>
  );
}
