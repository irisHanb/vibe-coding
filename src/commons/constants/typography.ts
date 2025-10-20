// Typography Token Definition
// 국문: Pretendard, 영문/숫자: SUIT

// Font Families
export const FONT_FAMILY = {
  KR: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  EN: "SUIT Variable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
} as const;

// Font Weights
export const FONT_WEIGHT = {
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  EXTRABOLD: 800,
} as const;

// Typography Style Interface
interface TypographyStyle {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
}

// Web Typography (Desktop)
export const WEB = {
  HEADLINE: {
    HEADLINE01: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: 48,
      lineHeight: 60,
    },
    HEADLINE02: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: 36,
      lineHeight: 48,
    },
    HEADLINE03: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: 28,
      lineHeight: 36,
    },
  },
} as const;

// Mobile Typography
export const MOBILE = {
  HEADLINE: {
    HEADLINE01: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: 24,
      lineHeight: 32,
    },
    HEADLINE02: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.EXTRABOLD,
      fontSize: 22,
      lineHeight: 30,
    },
    HEADLINE03: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: 20,
      lineHeight: 28,
    },
  },
  TITLE: {
    TITLE01: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: 18,
      lineHeight: 24,
    },
    TITLE02: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: 16,
      lineHeight: 22,
    },
    TITLE03: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: 14,
      lineHeight: 20,
    },
    SUBTITLE01: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: 14,
      lineHeight: 22,
    },
    SUBTITLE02: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: 12,
      lineHeight: 18,
    },
  },
  BODY: {
    BODY01_M: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.MEDIUM,
      fontSize: 16,
      lineHeight: 24,
    },
    BODY02_M: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.MEDIUM,
      fontSize: 14,
      lineHeight: 22,
    },
    BODY03_M: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.MEDIUM,
      fontSize: 12,
      lineHeight: 18,
    },
    BODY01_R: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.REGULAR,
      fontSize: 16,
      lineHeight: 22,
    },
    BODY02_R: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.REGULAR,
      fontSize: 14,
      lineHeight: 20,
    },
    BODY03_R: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.REGULAR,
      fontSize: 12,
      lineHeight: 16,
    },
  },
  CAPTION: {
    CAPTION01: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: 12,
      lineHeight: 14,
    },
    CAPTION02_M: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: 10,
      lineHeight: 12,
    },
    CAPTION02_S: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.MEDIUM,
      fontSize: 10,
      lineHeight: 12,
    },
    CAPTION03: {
      fontFamily: FONT_FAMILY.KR,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: 8,
      lineHeight: 10,
    },
  },
} as const;

// Typography 통합 객체
export const TYPOGRAPHY = {
  WEB,
  MOBILE,
} as const;

// Typography Token Type
export type TypographyToken = typeof TYPOGRAPHY;

// Helper function: CSS 스타일 문자열 생성
export const getTypographyStyle = (style: TypographyStyle): string => {
  return `
    font-family: ${style.fontFamily};
    font-weight: ${style.fontWeight};
    font-size: ${style.fontSize}px;
    line-height: ${style.lineHeight}px;
  `.trim();
};

// Tailwind CSS 클래스명 생성 헬퍼
export const getTypographyClass = (
  device: "WEB" | "MOBILE",
  category: string,
  name: string
): string => {
  return `typo-${device.toLowerCase()}-${category.toLowerCase()}-${name.toLowerCase()}`;
};
