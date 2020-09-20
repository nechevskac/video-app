import { useState } from "react";

import { ModalContent } from "../enums/modal-content";

export type Dialog = {
  isOpen: boolean;
  content: ModalContent;
};

const useDialog = () => {
  const [dialogState, setDialogState] = useState<Dialog>({
    isOpen: false,
    content: ModalContent.empty
  });

  const openDialog = (input: ModalContent) => {
    setDialogState({
      isOpen: true,
      content: input
    });
  };

  const closeDialog = () => {
    setDialogState({
      isOpen: false,
      content: ModalContent.empty
    });
  };
  
  return [dialogState, openDialog, closeDialog] as any;
};

export default useDialog;
