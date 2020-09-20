import React from 'react';

import { Box, IconButton, Typography, styled } from '@material-ui/core';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

import { ModalContent } from '../enums/modal-content';
import { colorPalette } from '../color-palette';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '11%',
  marginLeft: '95px',
  alignItems: 'center',
  transform: 'rotate3d(3, 5, 1, 45deg)'
});

const Header = styled(Typography)({
  color: colorPalette.red,
  fontWeight: 800,
});

const Text = styled(Typography)({
  color: colorPalette.black,
  letterSpacing: '6px',
});

const PlayIcon = styled(PlayArrowRoundedIcon)({
  color: colorPalette.red,
  fontSize: '2.5rem',
});

type VideoBoardProps = {
  openDialog: (arg: string) => void;
};

const VideoBoard = (props: VideoBoardProps) => {
  const { openDialog } = props;

  return (
    <Container>
      <Header variant="h5">Thermo Fisher</Header>
      <Text variant="h6">SCIENTIFIC</Text>
      <IconButton onClick={() => openDialog(ModalContent.video)}>
        <PlayIcon />
      </IconButton>
    </Container>
  );
};

export default VideoBoard;
