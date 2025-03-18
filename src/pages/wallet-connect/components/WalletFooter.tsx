"use client";

import { useAppKitWallet } from "@reown/appkit-wallet-button/react";
import { useDisconnect } from "@reown/appkit/react";
import { WalletIcon, X } from "lucide-react";
import { useCallback } from "react";
import toast from "react-hot-toast";
import Button from "../../../components/Button";
import { useTabStore } from "../../../store/init";

const WalletFooter = () => {
  const { disconnect } = useDisconnect();
  const { connect } = useAppKitWallet({
    onSuccess: (data) => {
      toast.success("Wallet connected successfully");
      setWalletInfo({
        address: data.address,
        chainId: data.chainId,
        chainNamespace: data.chainNamespace,
      });
    },
    onError: () => {
      toast.error("Error during wallet connection");
    },
  });
  const { currentTab, setWalletInfo, walletInfo: data } = useTabStore();

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnect();
      toast.success("Wallet disconnected successfully");
      setWalletInfo(null);
    } catch {
      toast.error("Error during disconnect");
    }
  }, [disconnect, setWalletInfo]);

  const handleQRCode = async () => {
    try {
      await connect("walletConnect");
    } catch {
      toast.error("Error during QR code connection");
    }
  };

  const renderButton = () => {
    if (data) {
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
