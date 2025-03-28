import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import { FaRegTrashAlt } from "react-icons/fa";

function Cart() {
  const { cart, increaseQuantity, removeItem } = useAppContext();

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg">
        <h2 className="mt-24 mb-10 text-black text-5xl text-center">
          Shopping Cart
        </h2>
        <div className="flex flex-col text-black px-2 lg:px-10">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="border-b-1 border-yellow-700 mb-2">
                <div className="flex gap-4">
                  <div>
                    <img src={item.img} alt={item.name} className="w-50 mb-1" />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-medium text-yellow-950">
                        {item.name}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between font-medium mb-2">
                      <span className="rounded-full border-1 px-3 lg:py-1 flex items-center gap-6">
                        <button
                          className="cursor-pointer text-xl"
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          {item.quantity > 1 ? (
                            "-"
                          ) : (
                            <FaRegTrashAlt size={14} />
                          )}
                        </button>
                        {item.quantity}
                        <button
                          className="cursor-pointer text-xl"
                          onClick={() => {
                            increaseQuantity(item.id);
                          }}
                        >
                          +
                        </button>
                      </span>
                      <span className="text-2xl">$ {item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-black text-xl">Your cart is empty.</p>
          )}
          <button className="bg-white text-black translate-transform ease-in-out duration-300 p-2 rounded-full mt-4 cursor-pointer hover:bg-yellow-700/50 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full border-1 border-stone-400 hover:border-yellow-700">
            CHECKOUT
          </button>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
