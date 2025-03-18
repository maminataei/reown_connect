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
      setCurrentTab: (tab) => set({ ...get(), currentTab: tab }),
      walletInfo: null,
      setWalletInfo: (info) => set({ ...get(), walletInfo: info }),
    }),
    {
      name: "reown_connect",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
