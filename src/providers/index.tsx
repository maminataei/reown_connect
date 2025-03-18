import AppRoutes from "../routes";
import ReownProvider from "./ReownProvider";
import RouterProvider from "./RouterProvider";
import StoreProvider from "./StoreProvider";

/**
 * @description Providers is a component that provides the Reown AppKit to the application.
 * @returns {React.ReactNode} The children of the Providers.
 */
const Providers = () => {
  return (
    <StoreProvider>
      <RouterProvider>
        <ReownProvider>
          <AppRoutes />
        </ReownProvider>
      </RouterProvider>
    </StoreProvider>
  );
};

export default Providers;
