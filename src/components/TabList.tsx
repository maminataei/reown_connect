"use client";

import Tab from "./tab";

interface ITab {
  id: string;
  label: string;
}

interface ITabListProps {
  tabs: ITab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

/**
 * A reusable tab list component that displays a row of tabs with active state styling
 * @param {TabListProps} props - The props for the TabList component
 * @returns {JSX.Element} The rendered TabList component
 */
export default function TabList({
  tabs,
  activeTab,
  onTabChange,
}: ITabListProps) {
  return (
    <div
      className={`grid grid-cols-${tabs.length} mb-6 bg-[#f9fafb] rounded-md overflow-hidden`}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          label={tab.label}
          isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        />
      ))}
    </div>
  );
}
