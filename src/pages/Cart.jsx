import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from "react";

function Cart() {
  const { cart, increaseQuantity, removeItem, scrollToTop, totalPrice } =
    useAppContext();

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleToast = () =>
    toast("Demo mode: where buttons look useful but aren't!");

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
              <div key={item.id}>
                <div className="flex gap-4 border-b-1 border-yellow-700 mb-2">
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
                      <span className="text-2xl">
                        $ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-stone-500 text-xl text-center">
              Your cart is empty.
            </p>
          )}
          <div className="mt-10 text-2xl flex flex-col">
            <div className="flex justify-between">
              Total:{" "}
              <span className="font-medium">
                $ {totalPrice > 0 ? totalPrice.toFixed(2) : "0.00"}
              </span>
            </div>
            <button
              className="bg-yellow-700/50 hover:bg-yellow-700/80 text-black translate-transform ease-in-out duration-300 p-2 rounded-2xl mt-4 cursor-pointer hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full border-1 border-stone-400 hover:border-yellow-700"
              onClick={handleToast}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
      <div className="mt-100">
        <Footer />
      </div>
    </>
  );
}

export default Cart;
