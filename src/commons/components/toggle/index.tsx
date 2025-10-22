import React from "react";
import styles from "./styles.module.css";

export type ToggleVariant = "primary" | "secondary" | "tertiary";
export type ToggleSize = "small" | "medium" | "large";
export type ToggleTheme = "light" | "dark";

export interface ToggleProps {
  variant?: ToggleVariant;
  size?: ToggleSize;
  theme?: ToggleTheme;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  variant = "primary",
  size = "medium",
  theme = "light",
  checked = false,
  onChange,
  disabled = false,
  className = "",
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const toggleClasses = [
    styles.toggle,
    styles[variant],
    styles[size],
    styles[theme],
    checked ? styles.checked : styles.unchecked,
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={toggleClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className={styles.thumb} />
    </button>
  );
};

export default Toggle;
