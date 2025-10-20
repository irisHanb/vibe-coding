/**
 * URL 경로 상수 정의
 * - 다이나믹 라우팅 지원
 * - 페이지별 접근 권한 및 UI 노출 설정 관리
 */

/**
 * 접근 권한 타입
 */
export const ACCESS_TYPE = {
  PUBLIC: "PUBLIC", // 누구나 접근 가능
  MEMBER_ONLY: "MEMBER_ONLY", // 회원 전용
} as const;

export type AccessType = (typeof ACCESS_TYPE)[keyof typeof ACCESS_TYPE];

/**
 * UI 노출 설정 인터페이스
 */
interface UIVisibility {
  header: boolean; // 헤더 노출 여부
  logo: boolean; // 로고 노출 여부
  darkModeToggle: boolean; // 다크모드 전환 토글 노출 여부
  banner: boolean; // 배너 노출 여부
  navigation: boolean; // 네비게이션 노출 여부
  footer: boolean; // 푸터 노출 여부
}

/**
 * URL 메타데이터 인터페이스
 */
interface URLMetadata {
  path: string; // URL 경로
  accessType: AccessType; // 접근 권한
  visibility: UIVisibility; // UI 노출 설정
}

/**
 * 인증 관련 URL
 */
export const AUTH_URL = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
} as const;

/**
 * 일기 관련 URL
 */
export const DIARY_URL = {
  LIST: "/diaries",
  DETAIL: "/diaries/[id]", // 다이나믹 라우팅
} as const;

/**
 * 사진 관련 URL
 */
export const PICTURE_URL = {
  LIST: "/pictures",
} as const;

/**
 * 모든 URL 통합 객체
 */
export const URL = {
  AUTH: AUTH_URL,
  DIARY: DIARY_URL,
  PICTURE: PICTURE_URL,
} as const;

/**
 * 다이나믹 라우팅 헬퍼 함수
 */
export const getDiaryDetailUrl = (id: string | number): string => {
  return `/diaries/${id}`;
};

/**
 * URL 메타데이터 정의
 */
export const URL_METADATA: Record<string, URLMetadata> = {
  [AUTH_URL.LOGIN]: {
    path: AUTH_URL.LOGIN,
    accessType: ACCESS_TYPE.PUBLIC,
    visibility: {
      header: false,
      logo: false,
      darkModeToggle: false,
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  [AUTH_URL.SIGNUP]: {
    path: AUTH_URL.SIGNUP,
    accessType: ACCESS_TYPE.PUBLIC,
    visibility: {
      header: false,
      logo: false,
      darkModeToggle: false,
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  [DIARY_URL.LIST]: {
    path: DIARY_URL.LIST,
    accessType: ACCESS_TYPE.PUBLIC,
    visibility: {
      header: true,
      logo: true,
      darkModeToggle: false,
      banner: true,
      navigation: true,
      footer: true,
    },
  },
  [DIARY_URL.DETAIL]: {
    path: DIARY_URL.DETAIL,
    accessType: ACCESS_TYPE.MEMBER_ONLY,
    visibility: {
      header: true,
      logo: true,
      darkModeToggle: false,
      banner: false,
      navigation: false,
      footer: true,
    },
  },
  [PICTURE_URL.LIST]: {
    path: PICTURE_URL.LIST,
    accessType: ACCESS_TYPE.PUBLIC,
    visibility: {
      header: true,
      logo: true,
      darkModeToggle: false,
      banner: true,
      navigation: true,
      footer: true,
    },
  },
} as const;

/**
 * 경로로 메타데이터 조회 헬퍼 함수
 */
export const getURLMetadata = (path: string): URLMetadata | undefined => {
  // 다이나믹 라우팅 경로 처리
  if (path.startsWith("/diaries/") && path !== "/diaries") {
    return URL_METADATA[DIARY_URL.DETAIL];
  }

  return URL_METADATA[path];
};

/**
 * 회원 전용 페이지 확인 헬퍼 함수
 */
export const isMemberOnlyPage = (path: string): boolean => {
  const metadata = getURLMetadata(path);
  return metadata?.accessType === ACCESS_TYPE.MEMBER_ONLY;
};

/**
 * UI 노출 여부 확인 헬퍼 함수
 */
export const getUIVisibility = (path: string): UIVisibility | undefined => {
  const metadata = getURLMetadata(path);
  return metadata?.visibility;
};
