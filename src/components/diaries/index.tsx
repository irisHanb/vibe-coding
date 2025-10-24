"use client";

import { useState } from "react";
import Image from "next/image";
import { Selectbox, SelectboxOption } from "@/commons/components/selectbox";
import { SearchBar } from "@/commons/components/searchbar";
import Button from "@/commons/components/button";
import { Pagination } from "@/commons/components/pagination";
import { EMOTION, EMOTION_INFO, EmotionType } from "@/commons/constants/enum";
import styles from "./styles.module.css";

interface DiaryCard {
  id: number;
  emotion: EmotionType;
  date: string;
  title: string;
  image: string;
}

const mockDiaries: DiaryCard[] = [
  {
    id: 1,
    emotion: EMOTION.SAD,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다. 한줄까지만 노출 됩니다.",
    image: EMOTION_INFO[EMOTION.SAD].iconM,
  },
  {
    id: 2,
    emotion: EMOTION.SURPRISE,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.SURPRISE].iconM,
  },
  {
    id: 3,
    emotion: EMOTION.ANGRY,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.ANGRY].iconM,
  },
  {
    id: 4,
    emotion: EMOTION.HAPPY,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.HAPPY].iconM,
  },
  {
    id: 5,
    emotion: EMOTION.ETC,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다. 한줄까지만 노출 됩니다.",
    image: EMOTION_INFO[EMOTION.ETC].iconM,
  },
  {
    id: 6,
    emotion: EMOTION.SURPRISE,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.SURPRISE].iconM,
  },
  {
    id: 7,
    emotion: EMOTION.ANGRY,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.ANGRY].iconM,
  },
  {
    id: 8,
    emotion: EMOTION.HAPPY,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.HAPPY].iconM,
  },
  {
    id: 9,
    emotion: EMOTION.SAD,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다. 한줄까지만 노출 됩니다.",
    image: EMOTION_INFO[EMOTION.SAD].iconM,
  },
  {
    id: 10,
    emotion: EMOTION.SURPRISE,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.SURPRISE].iconM,
  },
  {
    id: 11,
    emotion: EMOTION.ANGRY,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.ANGRY].iconM,
  },
  {
    id: 12,
    emotion: EMOTION.HAPPY,
    date: "2024. 03. 12",
    title: "타이틀 영역 입니다.",
    image: EMOTION_INFO[EMOTION.HAPPY].iconM,
  },
];

export default function Diaries() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

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

  const handleDeleteClick = (id: number) => {
    console.log("삭제:", id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("페이지 변경:", page);
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
      <div className={styles.main}>
        {mockDiaries.map((diary) => (
          <div key={diary.id} className={styles.diaryCard}>
            <div className={styles.cardImageWrapper}>
              <div className={styles.deleteButtonWrapper}>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteClick(diary.id)}
                >
                  <Image
                    src="/icons/close_outline_light_m_no.svg"
                    alt="delete"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={diary.image}
                  alt={diary.title}
                  width={274}
                  height={208}
                  className={styles.cardImage}
                />
              </div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardInfo}>
                <span
                  className={styles.emotion}
                  style={{ color: EMOTION_INFO[diary.emotion].color }}
                >
                  {EMOTION_INFO[diary.emotion].label}
                </span>
                <span className={styles.date}>{diary.date}</span>
              </div>
              <div className={styles.cardTitle}>{diary.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.gap3}></div>
      <div className={styles.pagination}>
        <Pagination
          variant="primary"
          size="medium"
          theme="light"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <div className={styles.gap4}></div>
    </div>
  );
}
