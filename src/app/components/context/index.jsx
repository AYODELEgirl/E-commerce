"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext(
  {
    cart: 0,
    allItems: [],
    cartItem: {},
    total: 0,
    open: true,
    openModal: false,
  },
  () => {}
);

export function AppWrapper({ children }) {
  let [state, setState] = useState({
    cart: 0,
    allItems: [],
    cartItem: {},
    total: 0,
    open: true,
    openModal: false,
  });
  return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);