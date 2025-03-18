import classNames from "classnames";

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * @param {string} className - The class name to apply to the card title.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props to apply to the card title.
 * @returns {React.ReactNode} The card title.
 */
const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <div
    className={classNames(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

export default CardTitle;
