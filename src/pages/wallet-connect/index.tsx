import { useAppKitAccount } from "@reown/appkit/react";
import Card from "../../components/card/Card";
import CardContent from "../../components/card/CardContent";
import WalletHeader from "./components/WalletHeader";
import WalletFooter from "./components/WalletFooter";
import TabList from "../../components/TabList";
import { useState } from "react";
import QRCodeTab from "./components/tabs/QrCode";
import ManualConnectionTab from "./components/tabs/Manual";

const WalletConnect = () => {
  const { isConnected } = useAppKitAccount();
  const [activeTab, setActiveTab] = useState("qr-code");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-gradient-to-br from-[#f9fafb] to-white p-6 min-h-screen flex items-center justify-center">
      <Card>
        <WalletHeader />
        <CardContent>
          <TabList
            tabs={[
              { id: "qr-code", label: "QR Code" },
              { id: "manual", label: "Manual" },
            ]}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          {activeTab === "qr-code" && <QRCodeTab />}
          {activeTab === "manual" && <ManualConnectionTab />}
        </CardContent>
        {isConnected && <WalletFooter />}
      </Card>
    </div>
  );
};

export default WalletConnect;
