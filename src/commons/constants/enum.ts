import { BLUE, GRAY, GREEN, RED, YELLOW } from "./color";

/**
 * 감정(Emotion) 타입 정의
 */
export const EMOTION = {
  HAPPY: "HAPPY",
  SAD: "SAD",
  ANGRY: "ANGRY",
  SURPRISE: "SURPRISE",
  ETC: "ETC",
} as const;

export type EmotionType = (typeof EMOTION)[keyof typeof EMOTION];

/**
 * 감정별 상세 정보
 */
export const EMOTION_INFO = {
  [EMOTION.HAPPY]: {
    label: "행복해요",
    iconM: "/images/emotion-happy-m.png",
    iconS: "/images/emotion-happy-s.png",
    color: RED["60"],
  },
  [EMOTION.SAD]: {
    label: "슬퍼요",
    iconM: "/images/emotion-sad-m.png",
    iconS: "/images/emotion-sad-s.png",
    color: BLUE["60"],
  },
  [EMOTION.ANGRY]: {
    label: "화나요",
    iconM: "/images/emotion-angry-m.png",
    iconS: "/images/emotion-angry-s.png",
    color: GRAY["60"],
  },
  [EMOTION.SURPRISE]: {
    label: "놀랐어요",
    iconM: "/images/emotion-surprise-m.png",
    iconS: "/images/emotion-surprise-s.png",
    color: YELLOW["60"],
  },
  [EMOTION.ETC]: {
    label: "기타",
    iconM: "/images/emotion-etc-m.png",
    iconS: "/images/emotion-etc-s.png",
    color: GREEN["60"],
  },
} as const;
