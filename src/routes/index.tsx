import { Navigate, Route, Routes } from "react-router";
import WalletConnect from "@/pages/wallet-connect/index";
import { Toaster } from "react-hot-toast";

/**
 * Main routing component that defines the application's navigation structure.
 * Handles URL-based routing between different pages and includes a default
 * redirect from the root path to the wallet connection page.
 *
 * @returns {React.ReactNode} A Routes component containing all application routes
 * and a toast notification system
 */
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/wallet-connect" element={<WalletConnect />} />
        <Route path="/" element={<Navigate to="/wallet-connect" />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default AppRoutes;
