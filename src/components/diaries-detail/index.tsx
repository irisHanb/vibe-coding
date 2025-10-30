"use client";

import Image from "next/image";
import Button from "@/commons/components/button";
import { EMOTION, EMOTION_INFO } from "@/commons/constants/enum";
import styles from "./styles.module.css";

// Mock 데이터
const MOCK_DIARY = {
  title: "이것은 타이틀 입니다.",
  emotion: EMOTION.HAPPY,
  date: "2024. 07. 12",
  content:
    "내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다내용이 들어갑니다",
};

export default function DiariesDetail() {
  const emotionInfo = EMOTION_INFO[MOCK_DIARY.emotion];

  const handleCopyContent = () => {
    navigator.clipboard.writeText(MOCK_DIARY.content);
  };

  const handleEdit = () => {
    console.log("수정");
  };

  const handleDelete = () => {
    console.log("삭제");
  };

  return (
    <div className={styles.container}>
      <div className={styles.gap1}></div>

      {/* detail-title */}
      <div className={styles.detailTitle}>
        <div className={styles.titleSection}>
          <h1 className={styles.titleText}>{MOCK_DIARY.title}</h1>
        </div>
        <div className={styles.emotionDateSection}>
          <div className={styles.emotionWrapper}>
            <Image
              src={emotionInfo.iconS}
              alt={emotionInfo.label}
              width={32}
              height={32}
              className={styles.emotionIcon}
            />
            <span
              className={styles.emotionText}
              style={{ color: emotionInfo.color }}
            >
              {emotionInfo.label}
            </span>
          </div>
          <div className={styles.dateWrapper}>
            <span className={styles.dateText}>{MOCK_DIARY.date}</span>
            <span className={styles.dateText}>작성</span>
          </div>
        </div>
      </div>

      <div className={styles.gap2}></div>

      {/* detail-content */}
      <div className={styles.detailContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentLabel}>내용</div>
          <div className={styles.contentText}>{MOCK_DIARY.content}</div>
        </div>
        <div className={styles.copyButtonWrapper}>
          <button
            className={styles.copyButton}
            onClick={handleCopyContent}
            aria-label="내용 복사"
          >
            <Image
              src="/icons/copy_outline_light_m.svg"
              alt=""
              width={24}
              height={24}
            />
            <span className={styles.copyButtonText}>내용 복사</span>
          </button>
        </div>
      </div>

      <div className={styles.gap3}></div>

      {/* detail-footer */}
      <div className={styles.detailFooter}>
        <Button
          variant="secondary"
          size="medium"
          theme="light"
          onClick={handleEdit}
          className={styles.footerButton}
        >
          수정
        </Button>
        <Button
          variant="secondary"
          size="medium"
          theme="light"
          onClick={handleDelete}
          className={styles.footerButton}
        >
          삭제
        </Button>
      </div>

      <div className={styles.gap4}></div>
      <div className={styles.retrospectInput}>retrospect-input</div>
      <div className={styles.gap5}></div>
      <div className={styles.retrospectList}>retrospect-list</div>
    </div>
  );
}
