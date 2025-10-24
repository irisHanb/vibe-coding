"use client";

import { useState } from "react";
import Image from "next/image";
import { Selectbox, SelectboxOption } from "@/commons/components/selectbox";
import { SearchBar } from "@/commons/components/searchbar";
import Button from "@/commons/components/button";
import styles from "./styles.module.css";

export default function Diaries() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterOptions: SelectboxOption[] = [
    { value: "all", label: "전체" },
    { value: "happy", label: "기쁨" },
    { value: "sad", label: "슬픔" },
    { value: "angry", label: "화남" },
    { value: "surprise", label: "놀람" },
    { value: "etc", label: "기타" },
  ];

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  const handleSearch = (value: string) => {
    console.log("검색:", value);
  };

  const handleWriteClick = () => {
    console.log("일기쓰기 클릭");
  };

  return (
    <div className={styles.container}>
      <div className={styles.gap1}></div>
      <div className={styles.search}>
        <div className={styles.searchLeft}>
          <Selectbox
            variant="tertiary"
            size="medium"
            theme="light"
            options={filterOptions}
            value={selectedFilter}
            onChange={handleFilterChange}
            className={styles.selectbox}
          />
          <SearchBar
            variant="primary"
            size="medium"
            theme="light"
            placeholder="검색어를 입력해 주세요."
            onSearch={handleSearch}
            className={styles.searchbar}
          />
        </div>
        <Button
          variant="primary"
          size="medium"
          theme="light"
          onClick={handleWriteClick}
          className={styles.writeButton}
        >
          <>
            <Image
              src="/icons/plus_outline_light_m.svg"
              alt="plus"
              width={24}
              height={24}
            />{" "}
            일기쓰기
          </>
        </Button>
      </div>
      <div className={styles.gap2}></div>
      <div className={styles.main}></div>
      <div className={styles.gap3}></div>
      <div className={styles.pagination}></div>
      <div className={styles.gap4}></div>
    </div>
  );
}
