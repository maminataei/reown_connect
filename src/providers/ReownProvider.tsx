import { createAppKit } from "@reown/appkit/react";
import { arbitrum, mainnet } from "@reown/appkit/networks";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";

// 1. Get projectId
const projectId = import.meta.env.VITE_PROJECT_ID;

// 3. Create a metadata object - optional
const metadata = {
  name: import.meta.env.VITE_PROJECT_NAME,
  description: import.meta.env.VITE_PROJECT_DESCRIPTION,
  url: import.meta.env.VITE_PROJECT_URL, // origin must match your domain & subdomain
  icons: [import.meta.env.VITE_PROJECT_ICON],
};

// 4. Create a AppKit instance
createAppKit({
  adapters: [new Ethers5Adapter()],
  networks: [arbitrum, mainnet],
  metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeMode: "dark",
  enableWalletGuide: true,
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
