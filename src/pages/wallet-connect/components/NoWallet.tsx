"use client";
import { Wallet } from "lucide-react";

/**
 * A component that displays a message when no wallet is connected, showing a wallet icon
 * and prompting the user to connect their wallet to proceed with transactions
 * @returns {React.ReactNode} A styled container with wallet icon and connection prompt
 */
const NoWallet = () => {
  return (
    <div className="border-2 border-[#5c6ac4]/20 rounded-lg p-6 flex flex-col items-center justify-center bg-[#f9fafb]">
      <div className="w-56 h-56 rounded-md flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#e4e9f2] flex items-center justify-center">
          <Wallet className="h-8 w-8 text-[#5c6ac4]/60" />
        </div>
        <div className="text-center">
          <h3 className="font-medium text-[#212b36] mb-2">
            Wallet Not Connected
          </h3>
          <p className="text-sm text-[#637381]">
            Connect your wallet to continue with the transaction process
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoWallet;
