"use client";

import { useAppKitAccount } from "@reown/appkit/react";
import NoWallet from "@/pages/wallet-connect/components/NoWallet";
import ConnectedWallet from "@/pages/wallet-connect/components/ConnectedWallet";

/**
 * A tab component that displays either a QR code for wallet connection or the connected wallet information
 * @returns {React.ReactNode} A component that shows the QR code for connecting a wallet when disconnected,
 * or displays wallet information when connected
 */
const QRCodeTab = () => {
  const { isConnected } = useAppKitAccount();

  return (
    <div className="space-y-6">
      {isConnected ? <ConnectedWallet /> : <NoWallet />}
    </div>
  );
};

export default QRCodeTab;
