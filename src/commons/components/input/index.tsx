import Image from "next/image";
import styles from "./styles.module.css";

export interface InputProps {
  value?: string;
  placeholder?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  theme?: "light" | "dark";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  className?: string;
  showSearchIcon?: boolean;
}

export default function Input({
  value,
  placeholder = "검색어를 입력해 주세요.",
  variant = "primary",
  size = "medium",
  theme = "light",
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  type = "text",
  className = "",
  showSearchIcon = false,
}: InputProps) {
  const containerClasses = [
    styles.inputContainer,
    styles[variant],
    styles[size],
    styles[theme],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = [styles.input, styles[`input_${size}`]]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      {showSearchIcon && (
        <div className={styles.iconWrapper}>
          <Image
            src="/icons/search_outline_light_m.svg"
            alt="search"
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        className={inputClasses}
      />
    </div>
  );
}
