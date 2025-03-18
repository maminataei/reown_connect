"use client";

import { X } from "lucide-react";
import Button from "../../../components/Button";
import { useDisconnect } from "@reown/appkit/react";

const WalletFooter = () => {
  const { disconnect } = useDisconnect();
  async function handleDisconnect() {
    try {
      await disconnect();
    } catch (error) {
      console.error("Error during disconnect:", error);
    }
  }
  return (
    <div className="p-6 pt-0">
      <hr className="my-4 border-[#5c6ac4]/10" />
      <Button variant="destructive" onClick={handleDisconnect}>
        <X className="mr-2 h-5 w-5" /> Disconnect Wallet
      </Button>
    </div>
  );
};

export default WalletFooter;
