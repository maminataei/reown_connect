"use client";

import { useAppKitAccount } from "@reown/appkit/react";
import NoWallet from "../NoWallet";
import ConnectedWallet from "../WalletInfo";

const QRCodeTab = () => {
  const { isConnected } = useAppKitAccount();

  return (
    <div className="space-y-6">
      {isConnected ? <ConnectedWallet /> : <NoWallet />}
    </div>
  );
};

export default QRCodeTab;
