import Cart from "@/pages/Cart";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/link1" element={<div>link1</div>} />
        <Route path="/link2" element={<div>link2</div>} />
        <Route path="/link3" element={<div>link3</div>} />
        <Route path="/link4" element={<div>link4</div>} />
      </Routes>
    </>
  );
}

export default AppRouter;
