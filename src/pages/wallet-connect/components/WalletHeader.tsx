import { CheckCircleIcon, Loader2Icon } from "lucide-react";
import CardHeader from "../../../components/card/CardHeader";
import CardTitle from "../../../components/card/CardTitle";
import { useAppKitAccount } from "@reown/appkit/react";

/**
 * A component that displays the header section of the wallet connection interface.
 * Shows connection status indicators and descriptive text about wallet connectivity.
 * Handles different states like connecting, reconnecting and connected.
 * @returns {React.ReactNode} A header component with wallet connection status and description
 */
const WalletHeader = () => {
  const { status } = useAppKitAccount();
  return (
    <CardHeader>
      <CardTitle>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Crypto Wallet Connection</h2>
          {status && ["connecting", "reconnecting"].includes(status) && (
            <span className="bg-white text-[#008060] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Loader2Icon className="h-3 w-3 animate-spin" /> Connecting...
            </span>
          )}
          {status === "connected" && (
            <span className="bg-white text-[#008060] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <CheckCircleIcon className="h-3 w-3" /> Connected
            </span>
          )}
        </div>
        <p className="text-white/80 text-sm mt-1">
          Connect your cryptocurrency wallet using WalletConnect v2
        </p>
      </CardTitle>
    </CardHeader>
  );
};

export default WalletHeader;
