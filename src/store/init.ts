import { ChainId, ChainNamespace } from "@reown/appkit-common";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface WalletInfo {
  address: string;
  chainId: ChainId;
  chainNamespace: ChainNamespace;
}

interface TabState {
  currentTab: string;
  setCurrentTab: (tab: string) => void;

  walletInfo: WalletInfo | null;
  setWalletInfo: (info: WalletInfo | null) => void;
}

export const useTabStore = create<TabState>()(
  persist(
    (set, get) => ({
      currentTab: "qr-code",
      /**
       * Updates the currently active tab in the application state
       * @param {string} tab - The identifier of the tab that should become active
       * @returns {void} This function does not return a value
       */
      setCurrentTab: (tab) => set({ ...get(), currentTab: tab }),
      walletInfo: null,
      /**
       * Updates the connected wallet information in the application state
       * @param {WalletInfo | null} info - The wallet details including address and chain information, or null if disconnecting
       * @returns {void} This function does not return a value
       */
      setWalletInfo: (info) => set({ ...get(), walletInfo: info }),
    }),
    {
      name: "reown_connect",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
