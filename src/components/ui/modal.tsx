import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { FC, ReactNode } from "react";

import { Dialog, DialogContent,DialogTitle, DialogTrigger } from "./dialog";

interface ModalProps {
  trigger: ReactNode;
  content: ReactNode;
  title?: ReactNode;
  showCloseButton?: boolean;
}

const Modal: FC<ModalProps> = ({
  trigger,
  title,
  content,
  showCloseButton = false,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="w-fit">{trigger}</DialogTrigger>
      {title ? (
        <DialogTitle>{title}</DialogTitle>
      ) : (
        <VisuallyHidden.Root>
          <DialogTitle />
        </VisuallyHidden.Root>
      )}
      <DialogContent showCloseButton={showCloseButton}>{content}</DialogContent>
    </Dialog>
  );
};

export default Modal;
