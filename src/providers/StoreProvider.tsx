import { ReactNode } from "react";
import { useTabStore } from "@/store/init";

interface StoreProviderProps {
  children: ReactNode;
}

/**
 * Provider component that wraps the application with Zustand store context.
 * Handles initialization of persisted state and ensures all child components
 * have access to the global state management system.
 *
 * @param {ReactNode} children - Child components that will have access to the Zustand store
 * @returns {ReactNode} Children wrapped with store context and hydrated state
 */
const StoreProvider = ({ children }: StoreProviderProps) => {
  useTabStore.persist.rehydrate();

  return <>{children}</>;
};

export default StoreProvider;
