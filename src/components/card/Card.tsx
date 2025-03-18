import classNames from "classnames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * A container component that provides a consistent card layout with shadow and border styling
 * @param {string} className - Additional CSS classes to apply to the card container
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional HTML div attributes to apply
 * @returns {React.ReactNode} A styled card container with the specified properties
 */
const Card = ({ className = "", ...props }: CardProps) => {
  return (
    <div
      className={classNames(
        "w-full max-w-md mx-auto bg-white rounded-lg border border-[#5c6ac4]/20 shadow-lg overflow-hidden transition-all duration-300 animate-in fade-in-0",
        className
      )}
      {...props}
    />
  );
};

export default Card;
