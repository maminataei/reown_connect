import classNames from "classnames";

interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * @param {string} className - The class name to apply to the card description.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props to apply to the card description.
 * @returns {React.ReactNode} The card description.
 */
const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <div
    className={classNames("text-sm text-muted-foreground", className)}
    {...props}
  />
);

export default CardDescription;
