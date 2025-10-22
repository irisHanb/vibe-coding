import React from "react";
import styles from "./styles.module.css";

export type InputVariant = "primary" | "secondary" | "tertiary";
export type InputSize = "small" | "medium" | "large";
export type InputTheme = "light" | "dark";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  size?: InputSize;
  theme?: InputTheme;
  fullWidth?: boolean;
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  variant = "tertiary",
  size = "medium",
  theme = "light",
  fullWidth = false,
  error = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
  ...props
}) => {
  const inputWrapperClasses = [
    styles.inputWrapper,
    styles[variant],
    styles[size],
    styles[theme],
    fullWidth ? styles.fullWidth : "",
    error ? styles.error : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={inputWrapperClasses}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      <input className={styles.input} disabled={disabled} {...props} />
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </div>
  );
};

export default Input;
