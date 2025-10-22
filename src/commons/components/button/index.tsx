import React from "react";
import styles from "./styles.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonTheme = "light" | "dark";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  theme?: ButtonTheme;
  children: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  theme = "light",
  children,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    styles[theme],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      <span className={styles.text}>{children}</span>
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
