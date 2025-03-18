import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { ethers } from "ethers";
import { Copy, Wallet } from "lucide-react";
import Button from "../../../components/Button";
import { useTabStore } from "../../../store/init";

const ConnectedWallet = () => {
  const { status } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const { walletInfo: data } = useTabStore();
  // Helper to truncate wallet address for display
  const truncateAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleTestTransaction = async () => {
    if (!data?.chainId) return;
    try {
      // Create provider with explicit network configuration
      const provider = new ethers.providers.Web3Provider(
        walletProvider as ethers.providers.ExternalProvider,
        {
          name: data?.chainNamespace,
          chainId: Number(data?.chainId),
        }
      );

      const signer = provider.getSigner(data?.address);
      const tx = await signer?.sendTransaction({
        to: data?.address || "",
        value: ethers.utils.parseEther("0.0001"), // Reduced amount for testing
      });
      console.log("Transaction sent:", tx);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
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
            <button
              className="h-8 w-8 text-[#5c6ac4] hover:text-[#5c6ac4]/80 hover:bg-[#5c6ac4]/10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              title="Copy address"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <Button
          variant="secondary"
          disabled={status === "reconnecting" || status === "connecting"}
          className="cursor-pointer"
          onClick={handleTestTransaction}
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
