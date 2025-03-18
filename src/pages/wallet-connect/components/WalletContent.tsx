import CardContent from "../../../components/card/CardContent";
import TabList from "../../../components/TabList";
import { useTabStore } from "../../../store/init";
import QRCodeTab from "./tabs/QrCode";

const WalletContent = () => {
  const { currentTab, setCurrentTab, walletInfo } = useTabStore();
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
          ]}
          activeTab={currentTab}
          onTabChange={handleTabChange}
        />
      )}
      {currentTab === "qr-code" && <QRCodeTab />}
    </CardContent>
  );
};

export default WalletContent;
