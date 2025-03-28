import { useAppContext } from "../../context/AppContext.jsx";

function ShopCard({ id, name, description, price, img }) {
  const { addToCart } = useAppContext();

  const handleClick = () => {
    addToCart({ id, name, description, price, img });
  };

  return (
    <>
      <div className="relative bg-yellow-800/30 border-yellow-700 border-1 rounded-2xl w-40 md:w-55 shadow-md">
        <img src={img} alt={name} className="rounded-t-2xl" />
        <span className="absolute right-2 top-30 md:top-44 text-center text-2xl font-medium text-neutral-100 mt-2">
          $ {price}
        </span>
        <div className="flex flex-col items-center p-2">
          <h3 className="text-2xl font-medium text-yellow-950">{name}</h3>
          <p className="mt-2">{description}</p>
          <button
            className="bg-white text-black translate-transform ease-in-out duration-300 p-2 rounded-full mt-4 cursor-pointer hover:bg-yellow-700/50 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full border-1 border-stone-400 hover:border-yellow-700"
            onClick={handleClick}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ShopCard;
