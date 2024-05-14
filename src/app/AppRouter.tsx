import Cart from "@/pages/Cart/Cart";
import Store from "@/pages/Store/Store";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/link1" element={<div>link1</div>} />
        <Route path="/link2" element={<div>link2</div>} />
        <Route path="/link3" element={<div>link3</div>} />
        <Route path="/link4" element={<div>link4</div>} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default AppRouter;
