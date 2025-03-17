import ReownProvider from "./ReownProvider";
import RouterProvider from "./RouterProvider";

/**
 * @description Providers is a component that provides the Reown AppKit to the application.
 * @param {React.ReactNode} children - The children of the Providers.
 * @returns {React.ReactNode} The children of the Providers.
 */
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RouterProvider>
      <ReownProvider>{children}</ReownProvider>
    </RouterProvider>
  );
};

export default Providers;
