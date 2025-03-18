"use client";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * A reusable button component with different variants and states
 * @param {ReactNode} children - The content to display inside the button
 * @param {"primary" | "secondary" | "destructive"} variant - The visual style variant of the button
 * @param {() => void} onClick - The callback function to execute when the button is clicked
 * @param {boolean} disabled - Whether the button is in a disabled state
 * @param {string} className - Additional CSS classes to apply to the button
 * @returns {ReactNode} A styled button component with the specified properties
 */
const Button = ({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "w-full h-12 text-lg font-medium rounded-md flex items-center justify-center transition-colors cursor-pointer";

  const variantStyles = {
    primary: "bg-[#008060] hover:bg-[#008060]/90 text-white",
    secondary: "bg-[#5c6ac4] hover:bg-[#5c6ac4]/90 text-white",
    destructive: "bg-[#d82c0d] hover:bg-[#d82c0d]/90 text-white",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
