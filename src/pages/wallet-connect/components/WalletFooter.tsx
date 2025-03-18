"use client";

import { useAppKitWallet } from "@reown/appkit-wallet-button/react";
import { useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import { WalletIcon, X } from "lucide-react";
import { useCallback } from "react";
import toast from "react-hot-toast";
import Button from "../../../components/Button";
import { useTabStore } from "../../../store/init";

/**
 * A footer component that handles wallet connection and disconnection functionality.
 * Provides buttons for connecting via QR code and disconnecting an existing wallet connection.
 * Displays connection status and handles success/error notifications.
 * @returns {React.ReactNode} A footer section containing wallet connection controls
 */
const WalletFooter = () => {
  const { disconnect } = useDisconnect();
  const { isConnected } = useAppKitAccount();
  const { connect } = useAppKitWallet({
    /**
     * Callback function executed when wallet connection is successful
     * @param {object} data - The connected wallet data
     * @param {string} data.address - The wallet's Ethereum address
     * @param {number} data.chainId - The ID of the connected blockchain network
     * @param {string} data.chainNamespace - The namespace of the connected chain (e.g. 'evm')
     */
    onSuccess: (data) => {
      toast.success("Wallet connected successfully");
      setWalletInfo({
        address: data.address,
        chainId: data.chainId,
        chainNamespace: data.chainNamespace,
      });
    },
    /**
     * Callback function executed when wallet connection fails
     * @remarks This handler displays an error toast notification to inform the user
     * that the wallet connection attempt was unsuccessful
     */
    onError: () => {
      toast.error("Error during wallet connection");
    },
  });
  const { currentTab, setWalletInfo } = useTabStore();

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnect();
      toast.success("Wallet disconnected successfully");
      setWalletInfo(null);
    } catch {
      toast.error("Error during disconnect");
    }
  }, [disconnect, setWalletInfo]);

  /**
   * Initiates a wallet connection attempt using a QR code via WalletConnect protocol.
   * If the connection fails, displays an error toast notification to the user.
   * @remarks This function is called when the user clicks the "Connect with QR Code" button
   * @async
   */
  const handleQRCode = async () => {
    try {
      await connect("walletConnect");
    } catch {
      toast.error("Error during QR code connection");
    }
  };

  /**
   * Renders the appropriate button based on connection state and current tab.
   * Shows a "Disconnect Wallet" button if connected, otherwise shows either
   * a "Connect with QR Code" or "Connect Wallet" button depending on the tab.
   * @returns {React.ReactNode} The rendered button component with appropriate text and click handler
   */
  const renderButton = () => {
    if (isConnected) {
      return (
        <Button variant="destructive" onClick={handleDisconnect}>
          <X className="mr-2 h-5 w-5" /> Disconnect Wallet
        </Button>
      );
    }

    const buttonText =
      currentTab === "qr-code" ? "Connect with QR Code" : "Connect Wallet";
    const onClick = currentTab === "qr-code" ? handleQRCode : () => {};

    return (
      <Button variant="primary" onClick={onClick}>
        <WalletIcon className="mr-2 h-5 w-5" /> {buttonText}
      </Button>
    );
  };

  return (
    <div className="p-6 pt-0">
      <hr className="my-4 border-[#5c6ac4]/10" />
      {renderButton()}
    </div>
  );
};

export default WalletFooter;
