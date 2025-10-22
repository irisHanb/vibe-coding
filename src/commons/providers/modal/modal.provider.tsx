"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";

/**
 * Modal Context Type 정의
 */
interface ModalContextType {
  isOpen: boolean;
  modalContent: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

/**
 * Modal Context 생성
 */
const ModalContext = createContext<ModalContextType | undefined>(undefined);

/**
 * Modal Provider Props
 */
interface ModalProviderProps {
  children: ReactNode;
}

/**
 * Modal Provider 컴포넌트
 * - modal-portal을 사용하여 기본적인 modal 셋팅 구현
 * - children을 감싸는 provider 패턴
 */
export default function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  /**
   * Modal 열기
   */
  const openModal = useCallback((content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  }, []);

  /**
   * Modal 닫기
   */
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
  }, []);

  const value: ModalContextType = {
    isOpen,
    modalContent,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {isOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              aria-hidden="true"
            />
            <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
              {modalContent}
            </div>
          </div>,
          document.body
        )}
    </ModalContext.Provider>
  );
}

/**
 * Modal Hook
 * Modal context를 사용하기 위한 커스텀 훅
 */
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};
