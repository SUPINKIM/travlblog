import { MutableRefObject, ReactNode } from "react";

export interface ModalStateContext {
  isOpen: boolean;
  modalRef: MutableRefObject<ReactNode>;
}

export interface ModalActionsContext {
  onChangeOpen: (next: boolean) => void;
}

export interface ModalProviderProps {
  children: ReactNode;
}
