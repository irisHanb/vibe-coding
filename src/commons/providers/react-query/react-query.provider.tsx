"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, ReactNode } from "react";

/**
 * React Query Provider Props
 */
interface IReactQueryProviderProps {
  children: ReactNode;
}

/**
 * React Query Provider 컴포넌트
 * - @tanstack/react-query를 사용하여 기본적인 client-cache 셋팅 구현
 * - children을 감싸는 provider 패턴
 */
export default function ReactQueryProvider({
  children,
}: IReactQueryProviderProps) {
  /**
   * QueryClient 인스턴스 생성
   * - useState를 사용하여 리렌더링 시 재생성 방지
   * - staleTime: 1분 - 데이터가 최신으로 간주되는 시간
   * - gcTime: 5분 - 가비지 컬렉션 시간 (이전 cacheTime)
   * - retry: 1회 - 실패 시 재시도 횟수
   * - refetchOnWindowFocus: false - 윈도우 포커스 시 자동 refetch 비활성화
   */
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            gcTime: 5 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
