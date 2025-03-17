import classNames from "classnames";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * @param {string} className - The class name to apply to the card content.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props to apply to the card content.
 * @returns {React.ReactNode} The card content.
 */
const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={classNames("p-6 pt-0", className)} {...props} />
);

export default CardContent;
