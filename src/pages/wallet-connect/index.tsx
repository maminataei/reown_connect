import Card from "../../components/card/Card";
import WalletContent from "./components/WalletContent";
import WalletFooter from "./components/WalletFooter";
import WalletHeader from "./components/WalletHeader";

const WalletConnect = () => {
  return (
    <div className="bg-gradient-to-br from-[#f9fafb] to-white p-6 min-h-screen flex items-center justify-center">
      <Card>
        <WalletHeader />
        <WalletContent />
        <WalletFooter />
      </Card>
    </div>
  );
};

export default WalletConnect;
