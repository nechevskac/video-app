import React from 'react';
import ReactPlayer from 'react-player';

import { Box, styled } from '@material-ui/core';

import BannerBoard from './banner-board';
import Modal from './modal';
import VideoBoard from './video-board';

import useDialog from '../hooks/useDialog';
import video from '../static/entrance-lobby.mp4';
import { colorPalette } from '../color-palette';

const RootContainer = styled(Box)({
  minHeight: '120vh',
  maxHeight: '118vh',
  marginTop: '-18px',
  overflow: 'hidden',
  backgroundColor: colorPalette.darkBlue,
});

const Video = styled(Box)({
  position: 'absolute',
  width: '100%',
});

const Boards = styled(Box)({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  height: '118vh',
  alignItems: 'center'
});

const Home = () => {
  const [dialogState, openDialog, closeDialog] = useDialog();

  return (
    <RootContainer>
      <Video>
        <ReactPlayer url={video} width="100%" height="100%" playing loop /> 
      </Video>
      <Boards>
        <VideoBoard openDialog={openDialog} />
        <BannerBoard openDialog={openDialog} />
      </Boards>
      <Modal dialogState={dialogState} closeDialog={closeDialog} />
    </RootContainer>
  );
};

export default Home;
