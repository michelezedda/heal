import { useAppContext } from "../context/AppContext";

function CartBadge() {
  const { cartQuantity } = useAppContext();

  return (
    <>
      <div className="absolute top-3 right-18 bg-yellow-700 rounded-full w-5 h-5 font-[Outfit] flex items-center justify-center">
        <span className="text-white text-sm">{cartQuantity}</span>
      </div>
    </>
  );
}

export default CartBadge;
