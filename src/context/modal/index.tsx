import { createContext, FC, ReactNode, useRef, useState } from "react";

import {
  ModalActionsContext,
  ModalProviderProps,
  ModalStateContext,
} from "./types";

export const StateContext = createContext<ModalStateContext>({
  isOpen: false,
  modalRef: { current: null },
});

export const ActionsContext = createContext<ModalActionsContext>({
  onChangeOpen: (_: boolean) => {},
});

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, toggleOpen] = useState(false);

  const modalRef = useRef<ReactNode | null>(null);

  return (
    <StateContext.Provider value={{ isOpen, modalRef }}>
      <ActionsContext.Provider
        value={{
          onChangeOpen: toggleOpen,
        }}
      >
        {children}
        {modalRef.current}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};

export default ModalProvider;
