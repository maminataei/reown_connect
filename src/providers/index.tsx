import ReownProvider from "./ReownProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReownProvider>{children}</ReownProvider>;
};

export default Providers;
