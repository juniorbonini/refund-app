import { BrowserRouter, Route, Routes } from "react-router";

import { SuccessReceipt } from "./pages/SuccessReceipt";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />} />
        <Route element={<Home />} />
        <Route path="/success" element={<SuccessReceipt />} />
      </Routes>
    </BrowserRouter>
  );
}
