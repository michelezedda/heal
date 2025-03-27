import React from "react";

function CartBadge() {
  return (
    <>
      <div className="absolute top-3 right-18 bg-yellow-700 rounded-full w-5 h-5 font-[Outfit] flex items-center justify-center">
        <span className="text-white text-sm">0</span>
      </div>
    </>
  );
}

export default CartBadge;
