"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export type SelectboxVariant = "primary" | "secondary" | "tertiary";
export type SelectboxSize = "small" | "medium" | "large";
export type SelectboxTheme = "light" | "dark";

export interface SelectboxOption {
  value: string;
  label: string;
}

export interface SelectboxProps {
  variant?: SelectboxVariant;
  size?: SelectboxSize;
  theme?: SelectboxTheme;
  fullWidth?: boolean;
  disabled?: boolean;
  placeholder?: string;
  options: SelectboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Selectbox: React.FC<SelectboxProps> = ({
  variant = "tertiary",
  size = "medium",
  theme = "light",
  fullWidth = false,
  disabled = false,
  placeholder = "선택하세요",
  options = [],
  value = "",
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const selectboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectboxRef.current &&
        !selectboxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const selectedOption = options.find((opt) => opt.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const selectboxClasses = [
    styles.selectbox,
    styles[variant],
    styles[size],
    styles[theme],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    isOpen ? styles.open : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const dropdownClasses = [
    styles.dropdown,
    styles[size],
    styles[theme],
    isOpen ? styles.dropdownOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.selectboxContainer} ref={selectboxRef}>
      <div className={selectboxClasses} onClick={handleToggle}>
        <span
          className={`${styles.text} ${!selectedValue ? styles.placeholder : ""}`}
        >
          {displayText}
        </span>
        <Image
          src="/icons/arrow_drop_down.svg"
          alt="dropdown arrow"
          width={24}
          height={24}
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
        />
      </div>
      {isOpen && !disabled && (
        <div className={dropdownClasses}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                option.value === selectedValue ? styles.optionSelected : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selectbox;

