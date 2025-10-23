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
  value,
  onChange,
  className = "",
}) => {
  const initialValue = value ?? (options.length > 0 ? options[0].value : "");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const selectboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newValue = value ?? (options.length > 0 ? options[0].value : "");
    setSelectedValue(newValue);
  }, [value, options]);

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

  const containerClasses = [
    styles.selectboxContainer,
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  const selectboxClasses = [
    styles.selectbox,
    styles[`${variant}__${theme}`],
    styles[size],
    disabled ? styles.disabled : "",
    isOpen ? styles.open : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const dropdownClasses = [
    styles.dropdown,
    styles[`dropdown__${variant}__${theme}`],
    styles[`dropdown__${size}`],
    isOpen ? styles.dropdownOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses} ref={selectboxRef}>
      <div
        className={selectboxClasses}
        onClick={handleToggle}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          } else if (e.key === "Escape" && isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <span
          className={`${styles.text} ${
            !selectedValue ? styles.placeholder : ""
          }`}
        >
          {displayText}
        </span>
        <span className={`${styles.arrowContainer}`}>
          <Image
            src="/icons/arrow_drop_down.svg"
            alt="dropdown arrow"
            width={8.6}
            height={4.7}
            className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
          />
        </span>
      </div>
      {isOpen && !disabled && (
        <div className={dropdownClasses} role="listbox">
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                option.value === selectedValue ? styles.optionSelected : ""
              }`}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={option.value === selectedValue}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(option.value);
                }
              }}
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
