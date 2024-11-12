import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { FC, ReactNode } from "react";

import { useModalActionsContext, useModalStateContext } from "@/hooks/modal";

import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

interface ModalProps {
  trigger?: ReactNode;
  content: ReactNode;
  title?: ReactNode;
  showCloseButton?: boolean;
  isOpen?: boolean;
  onOpenChange?: (next: boolean) => void;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal: FC<ModalProps> = ({
  trigger,
  title,
  content,
  onCancel,
  onConfirm,
  showCloseButton = false,
}) => {
  const { isOpen } = useModalStateContext();
  const { onChangeOpen } = useModalActionsContext();

  return (
    <Dialog open={isOpen} onOpenChange={onChangeOpen}>
      {trigger ? (
        <DialogTrigger>{trigger}</DialogTrigger>
      ) : (
        <VisuallyHidden.Root>
          <DialogTrigger />
        </VisuallyHidden.Root>
      )}
      {title ? (
        <DialogTitle>{title}</DialogTitle>
      ) : (
        <VisuallyHidden.Root>
          <DialogTitle />
        </VisuallyHidden.Root>
      )}
      <DialogContent showCloseButton={showCloseButton}>
        {content}
        <DialogFooter>
          <div className="w-full grid grid-cols-2 gap-x-[8px]">
            <Button
              tabIndex={-1}
              onClick={onCancel}
              variant="outline"
              className="h-[46px] border-red-500"
            >
              취소
            </Button>
            <Button
              onClick={onConfirm}
              variant="default"
              className="border-red-500 bg-red-500 text-white h-[46px] hover:bg-red-600"
            >
              확인
            </Button>
          </div>
        </DialogFooter>
        <VisuallyHidden.Root>
          <DialogDescription />
        </VisuallyHidden.Root>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
