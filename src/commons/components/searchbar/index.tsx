import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export type SearchBarVariant = "primary" | "secondary" | "tertiary";
export type SearchBarSize = "small" | "medium" | "large";
export type SearchBarTheme = "light" | "dark";

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: SearchBarVariant;
  size?: SearchBarSize;
  theme?: SearchBarTheme;
  fullWidth?: boolean;
  onSearch?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  variant = "primary",
  size = "medium",
  theme = "light",
  fullWidth = false,
  placeholder = "검색어를 입력해 주세요.",
  className = "",
  disabled = false,
  onSearch,
  ...props
}) => {
  const searchBarClasses = [
    styles.searchBar,
    styles[variant],
    styles[size],
    styles[theme],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(e.currentTarget.value);
    }
    props.onKeyDown?.(e);
  };

  return (
    <div className={searchBarClasses}>
      <div className={styles.iconWrapper}>
        <Image
          src="/icons/search_outline_light_m.svg"
          alt="search"
          width={24}
          height={24}
          className={styles.searchIcon}
        />
      </div>
      <input
        className={styles.input}
        placeholder={placeholder}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        {...props}
      />
    </div>
  );
};

export default SearchBar;

