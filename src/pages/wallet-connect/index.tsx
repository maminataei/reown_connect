import Card from "../../components/card/Card";
import CardContent from "../../components/card/CardContent";
import CardHeader from "../../components/card/CardHeader";
import CardTitle from "../../components/card/CardTitle";

const WalletConnect = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Crypto Wallet Connection</h2>
            {isConnected && (
              <span className="bg-white text-[#008060] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <CheckCircle className="h-3 w-3" /> Connected
              </span>
            )}
          </div>
          <p className="text-white/80 text-sm mt-1">
            Connect your cryptocurrency wallet using WalletConnect v2
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default WalletConnect;
