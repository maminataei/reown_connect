"use client";

import { Wallet } from "lucide-react";
import Button from "../../../../components/Button";

const ManualConnectionTab = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3 bg-white p-6 rounded-lg border-2 border-[#5c6ac4]/20">
        <p className="text-[#212b36] font-medium">
          Enter your WalletConnect connection URL:
        </p>
        <input
          type="text"
          placeholder="wc:a281567bb3e4..."
          //   value={connectionUrl}
          //   onChange={(e) => setConnectionUrl(e.target.value)}
          className="w-full border border-[#5c6ac4]/30 focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20 h-12 px-3 rounded-md outline-none transition-all"
        />
      </div>
      <Button
        variant="primary"
        //   onClick={onConnect} disabled={!connectionUrl}
      >
        <Wallet className="mr-2 h-5 w-5" /> Connect Wallet
      </Button>
    </div>
  );
};

export default ManualConnectionTab;
