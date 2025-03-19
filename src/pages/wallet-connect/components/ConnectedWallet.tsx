import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { ethers } from "ethers";
import { Copy, Wallet } from "lucide-react";
import Button from "@/components/Button";
import { useTabStore } from "@/store/init";

/**
 * Displays information about the currently connected wallet, including address,
 * connection status, and transaction capabilities
 * @returns {React.ReactNode} A React component showing wallet connection details and controls
 */
const ConnectedWallet = () => {
  const { status } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const { walletInfo: data } = useTabStore();

  /**
   * Shortens an Ethereum address by displaying only the first 6 and last 4 characters
   * @param {string} address - The full Ethereum wallet address to truncate (e.g. "0x1234...5678")
   * @returns {string} The shortened address with format "0x1234...5678" or empty string if no address provided
   */
  const truncateAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#008060] animate-pulse"></div>
          <p className="text-[#212b36] font-medium">Connected Wallet</p>
        </div>
        <div className="flex items-center justify-between p-4 border-2 border-[#008060]/30 rounded-lg bg-gradient-to-r from-[#008060]/5 to-[#00848e]/5">
          <div className="flex items-center gap-3">
            <div className="bg-[#008060] text-white p-2 rounded-full">
              <Wallet className="h-5 w-5" />
            </div>
            <span className="font-mono text-[#212b36] font-semibold">
              {truncateAddress(data?.address || "")}
            </span>
          </div>
          <div className="flex gap-1">
            <Button
              variant="secondary"
              className="!w-8 !h-8 !bg-transparent !text-[#5c6ac4] hover:!bg-[#5c6ac4]/10 !rounded-full"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Button
          variant="secondary"
          disabled={status === "reconnecting" || status === "connecting"}
          className="cursor-pointer"
          onClick={() => {
            alert("coming soon");
          }}
        >
          {status === "reconnecting" || status === "connecting"
            ? "Processing..."
            : "Send Test Transaction"}
        </Button>
      </div>
    </div>
  );
};

export default ConnectedWallet;
