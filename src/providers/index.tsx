import AppRoutes from "@/routes";
import ReownProvider from "@/providers/ReownProvider";
import RouterProvider from "@/providers/RouterProvider";
import StoreProvider from "@/providers/StoreProvider";

/**
 * Root provider component that wraps the application with necessary context providers.
 * Combines StoreProvider for state management, RouterProvider for navigation,
 * and ReownProvider for blockchain functionality.
 * @returns {React.ReactNode} The application wrapped with all required providers
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
