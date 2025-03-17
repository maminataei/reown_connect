import classNames from "classnames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * @param {string} className - The class name to apply to the card.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props to apply to the card.
 * @returns {React.ReactNode} The card.
 */
const Card = ({ className = "", ...props }: CardProps) => {
  return (
    <div
      className={classNames(
        "w-full max-w-md mx-auto bg-white rounded-lg border border-[#5c6ac4]/20 shadow-lg overflow-hidden",
        className
      )}
      {...props}
    />
  );
};

export default Card;
