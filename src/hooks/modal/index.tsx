import { ReactNode, useContext } from "react";

import Modal from "@/components/ui/modal";
import { ActionsContext, StateContext } from "@/context/modal";

interface OpenModalParams {
  onConfirm?: () => void;
  onCancel?: () => void;
  showConfirmButton?: boolean;
  showCloseButton?: boolean;
  showCancelButton?: boolean;
  children: ReactNode;
}

export const useModalStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useModalStateContext must be used within a ModalProvider");
  }

  return context;
};

export const useModalActionsContext = () => {
  const context = useContext(ActionsContext);

  if (!context) {
    throw new Error(
      "useModalActionsContext must be used within a ModalProvider"
    );
  }

  return context;
};

export const useModal = () => {
  const { modalRef } = useModalStateContext();
  const { onChangeOpen } = useModalActionsContext();

  const open = ({
    onConfirm,
    onCancel,
    children,
    ...rest
  }: OpenModalParams) => {
    onChangeOpen(true);

    const promise = new Promise<boolean>((resolve) => {
      modalRef.current = (
        <Modal
          {...rest}
          onConfirm={() => {
            onConfirm?.();
            resolve(true);
            close();
          }}
          onCancel={() => {
            onCancel?.();
            resolve(false);
            close();
          }}
          content={children}
        />
      );
    });

    return promise;
  };

  const close = () => {
    onChangeOpen(false);
    modalRef.current = null;
  };

  return {
    open,
    close,
  };
};
