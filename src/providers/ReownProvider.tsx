import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { arbitrum, mainnet } from "@reown/appkit/networks";

// 1. Get projectId
const projectId = import.meta.env.PROJECT_ID;

// 3. Create a metadata object - optional
const metadata = {
  name: import.meta.env.PROJECT_NAME,
  description: import.meta.env.PROJECT_DESCRIPTION,
  url: import.meta.env.PROJECT_URL, // origin must match your domain & subdomain
  icons: [import.meta.env.PROJECT_ICON],
};

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks: [arbitrum, mainnet],
  metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

/**
 * @description ReownProvider is a component that provides the Reown AppKit to the application.
 * @param {React.ReactNode} children - The children of the ReownProvider.
 * @returns {React.ReactNode} The children of the ReownProvider.
 */
const ReownProvider = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default ReownProvider;
