import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to add items to the cart
  const addToCart = (newItem) => {
    setCart((prevCart) => {
      let itemFound = false;

      const updatedCart = prevCart.map((item) => {
        if (item.id === newItem.id) {
          itemFound = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return itemFound
        ? updatedCart
        : [...prevCart, { ...newItem, quantity: 1 }];
    });
  };

  // Function to increase items quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to remove items to the cart
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <AppContext.Provider
      value={{
        scrollToTop,
        addToCart,
        cart,
        cartQuantity,
        increaseQuantity,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
