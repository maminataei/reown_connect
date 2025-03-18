import CardContent from "../../../components/card/CardContent";
import TabList from "../../../components/TabList";
import { useTabStore } from "../../../store/init";
import ManualConnectionTab from "./tabs/Manual";
import QRCodeTab from "./tabs/QrCode";

/**
 * A component that renders the wallet connection interface with tabs for QR code and manual connection methods.
 * Manages the active tab state and displays the appropriate connection component based on the selected tab.
 * @returns {React.ReactNode} A tabbed interface for wallet connection options
 */
const WalletContent = () => {
  const { currentTab, setCurrentTab, walletInfo } = useTabStore();
  /**
   * Updates the currently active tab when a user selects a different connection method
   * @param {string} tab - The ID of the tab to activate ('qr-code' or 'manual')
   */
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <CardContent>
      {!walletInfo && (
        <TabList
          tabs={[
            {
              id: "qr-code",
              label: "QR Code",
            },
            {
              id: "manual",
              label: "Manual",
            },
          ]}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      )}
      {currentTab === "qr-code" && <QRCodeTab />}
      {currentTab === "manual" && <ManualConnectionTab />}
    </CardContent>
  );
};

export default WalletContent;
