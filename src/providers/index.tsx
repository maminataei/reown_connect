import AppRoutes from "../routes";
import ReownProvider from "./ReownProvider";
import RouterProvider from "./RouterProvider";

/**
 * @description Providers is a component that provides the Reown AppKit to the application.
 * @returns {React.ReactNode} The children of the Providers.
 */
const Providers = () => {
  return (
    <RouterProvider>
      <ReownProvider>
        <AppRoutes />
      </ReownProvider>
    </RouterProvider>
  );
};

export default Providers;
