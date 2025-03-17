"use client";

import TabList from "./TabList";

interface ConnectionTabsProps {
  activeTab: "qr" | "manual";
  setActiveTab: (tab: "qr" | "manual") => void;
}

/**
 * A component that displays connection method tabs (QR Code and Manual Connection)
 * @param {ConnectionTabsProps} props - The props for the ConnectionTabs component
 * @returns {JSX.Element} The rendered ConnectionTabs component
 */
export default function ConnectionTabs({
  activeTab,
  setActiveTab,
}: ConnectionTabsProps) {
  const tabs = [
    { id: "qr", label: "QR Code" },
    { id: "manual", label: "Manual Connection" },
  ];

  return (
    <TabList
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={(tabId) => setActiveTab(tabId as "qr" | "manual")}
    />
  );
}
