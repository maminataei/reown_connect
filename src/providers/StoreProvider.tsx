import { ReactNode } from "react";
import { useTabStore } from "../store/init";

interface StoreProviderProps {
  children: ReactNode;
}

/**
 * @description StoreProvider is a component that initializes the Zustand store.
 * @param {ReactNode} children - The children of the StoreProvider.
 * @returns {ReactNode} The children of the StoreProvider.
 */
const StoreProvider = ({ children }: StoreProviderProps) => {
  // Initialize the store
  useTabStore.persist.rehydrate();

  return <>{children}</>;
};

export default StoreProvider;
