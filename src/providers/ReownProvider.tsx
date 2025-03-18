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
 * Provider component that wraps the application with Reown AppKit configuration.
 * The AppKit is initialized above with settings for:
 * - Network support (Arbitrum and Ethereum Mainnet)
 * - Project metadata and identifiers
 * - Ethers.js v5 adapter integration
 * - Analytics and wallet guide features
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to AppKit features
 * @returns {React.ReactNode} Children wrapped with AppKit context
 */
const ReownProvider = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default ReownProvider;
