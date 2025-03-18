import { Navigate, Route, Routes } from "react-router";
import WalletConnect from "../pages/wallet-connect";
import { Toaster } from "react-hot-toast";

/**
 * @description AppRoutes is the main component that defines the routes for the application.
 * @returns {React.ReactNode} The routes for the application.
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
