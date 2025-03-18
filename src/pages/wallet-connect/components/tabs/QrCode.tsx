"use client";

import { useAppKitWallet } from "@reown/appkit-wallet-button/react";

import { QrCode, Wallet } from "lucide-react";
import Button from "../../../../components/Button";

const QRCodeTab = () => {
  const { connect } = useAppKitWallet();

  const openAppKit = () => {
    connect("walletConnect");
  };
  return (
    <div className="space-y-6">
      <div className="border-2 border-[#5c6ac4]/20 rounded-lg p-6 flex flex-col items-center justify-center bg-white">
        <div className="bg-gradient-to-br from-[#5c6ac4]/10 to-[#00848e]/10 w-56 h-56 rounded-md flex items-center justify-center mb-4 p-3">
          <div className="bg-white p-2 rounded-md w-full h-full flex items-center justify-center">
            <QrCode className="w-32 h-32 text-[#5c6ac4]" />
          </div>
        </div>
        <p className="text-sm text-center text-[#637381]">
          Scan this QR code with your wallet app to connect
        </p>
      </div>
      <Button variant="primary" onClick={openAppKit}>
        <Wallet className="mr-2 h-5 w-5" /> Connect with QR Code
      </Button>
    </div>
  );
};

export default QRCodeTab;
