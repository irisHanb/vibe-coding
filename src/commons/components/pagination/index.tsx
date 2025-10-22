import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export type PaginationVariant = "primary" | "secondary" | "tertiary";
export type PaginationSize = "small" | "medium" | "large";
export type PaginationTheme = "light" | "dark";

export interface PaginationProps {
  variant?: PaginationVariant;
  size?: PaginationSize;
  theme?: PaginationTheme;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  variant = "primary",
  size = "medium",
  theme = "light",
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  const paginationClasses = [
    styles.pagination,
    styles[variant],
    styles[size],
    styles[theme],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={paginationClasses}>
      <button
        className={`${styles.navButton} ${isPrevDisabled ? styles.disabled : ""}`}
        onClick={handlePrevious}
        disabled={isPrevDisabled}
        aria-label="Previous page"
      >
        <Image
          src={
            isPrevDisabled
              ? "/icons/leftdisabled_outline_light_m.svg"
              : "/icons/leftenable_outline_light_m.svg"
          }
          alt="Previous"
          width={24}
          height={24}
        />
      </button>

      <div className={styles.pageNumbers}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`${styles.navButton} ${isNextDisabled ? styles.disabled : ""}`}
        onClick={handleNext}
        disabled={isNextDisabled}
        aria-label="Next page"
      >
        <Image
          src={
            isNextDisabled
              ? "/icons/rightdisabled_outline_light_m.svg"
              : "/icons/rightenable_outline_light_m.svg"
          }
          alt="Next"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default Pagination;

