import React from 'react';
import ReactPlayer from 'react-player';

import { ClickAwayListener, Dialog, DialogContent, styled } from '@material-ui/core';

import { ModalContent } from '../enums/modal-content';
import image from '../static/banner.png';

const Content = styled(DialogContent)({
  padding: 0 + '!important',
  overflow: 'hidden',
});

type ModalProps = {
  dialogState: any;
  closeDialog: () => void;
};

const Modal = (props: ModalProps) => {
  const { dialogState, closeDialog } = props;

  const getDialogContent = () => {
    switch (dialogState.content) {
      case ModalContent.video:
        return <ReactPlayer url="https://www.youtube.com/watch?v=bVYLlR_Tl44" width="500px" height="340px" />;
      case ModalContent.banner:
        return <img src={image} />;
    }
  };

  return (
    <Dialog open={dialogState.isOpen}>
      <ClickAwayListener onClickAway={closeDialog}>
        <Content>{getDialogContent()}</Content>
      </ClickAwayListener>
    </Dialog>
  );
};

export default Modal;
