import classNames from "classnames";

interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * A component for displaying descriptive text within a card
 * @param {string} className - Additional CSS classes to apply to the description container
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional HTML div attributes to apply
 * @returns {React.ReactNode} A styled description container with the specified properties
 */
const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <div
    className={classNames("text-sm text-muted-foreground", className)}
    {...props}
  />
);

export default CardDescription;
