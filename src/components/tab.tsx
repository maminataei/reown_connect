interface ITabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

/**
 * A single tab item component that displays a tab with active state styling
 * @param {TabItemProps} props - The props for the TabItem component
 * @returns {JSX.Element} The rendered TabItem component
 */
const Tab = ({ id, label, isActive, onClick }: ITabProps) => {
  return (
    <button
      key={id}
      onClick={onClick}
      className={`py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? "bg-[#5c6ac4] text-white"
          : "bg-[#f9fafb] text-[#637381] hover:bg-[#5c6ac4]/10"
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
