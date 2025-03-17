import classNames from "classnames";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * @param {string} className - The class name to apply to the card header.
 * @param {React.ReactNode} children - The children to render inside the card header.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props to apply to the card header.
 * @returns {React.ReactNode} The card header.
 */
const CardHeader = ({ className, children, ...props }: CardHeaderProps) => (
  <div
    className={classNames("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {children}
  </div>
);

export default CardHeader;
