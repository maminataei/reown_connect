import classNames from "classnames";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * @param {string} className - The class name to apply to the card footer.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props to apply to the card footer.
 * @returns {React.ReactNode} The card footer.
 */
const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <div
    className={classNames("flex items-center p-6 pt-0", className)}
    {...props}
  />
);

export default CardFooter;
