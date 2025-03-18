import Card from "../../components/card/Card";
import WalletContent from "./components/WalletContent";
import WalletFooter from "./components/WalletFooter";
import WalletHeader from "./components/WalletHeader";

/**
 * Main page component for wallet connection functionality. Provides a user interface
 * for connecting cryptocurrency wallets using WalletConnect protocol. Contains header
 * with connection status, main content area for connection methods, and footer.
 *
 * @returns {React.ReactNode} A page component with wallet connection interface wrapped in a card
 */
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
