import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppContext.Provider value={{ scrollToTop }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
