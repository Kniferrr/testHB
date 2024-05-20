import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Store = lazy(() => import("@/pages/Store/Store"));
const Cart = lazy(() => import("@/pages/Cart/Cart"));

const routes = [
  { path: "/", element: <Store /> },
  { path: "/link1", element: <div>link1</div> },
  { path: "/link2", element: <div>link2</div> },
  { path: "/link3", element: <div>link3</div> },
  { path: "/link4", element: <div>link4</div> },
  { path: "/Cart", element: <Cart /> },
];

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
