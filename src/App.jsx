import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "ldrs/grid";

function App() {
  const Home = lazy(() => import("./Home"));
  const SexualHealth = lazy(() => import("./pages/SexualHealth"));
  const WeightLoss = lazy(() => import("./pages/WeightLoss"));
  const HairRegrowth = lazy(() => import("./pages/HairRegrowth"));
  const MentalHealth = lazy(() => import("./pages/MentalHealth"));
  const Shop = lazy(() => import("./pages/shop/Shop"));
  const Cart = lazy(() => import("./pages/Cart"));

  return (
    <>
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center h-screen gap-6 font-[DM_Serif_Display]">
            <span className="text-6xl">heal</span>
            <l-grid size="100" speed="1.5" color="black"></l-grid>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sexual-health" element={<SexualHealth />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/hair-regrowth" element={<HairRegrowth />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
