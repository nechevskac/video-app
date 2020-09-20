import React from 'react';

import { Box, Button, Typography } from '@material-ui/core';
import styled from "@material-ui/styles/styled";

import { ModalContent } from '../enums/modal-content';
import { colorPalette } from '../color-palette';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '10%',
  marginRight: '90px',
  transform: 'rotate3d(-3, 12, 1, -45deg)'
});

const Header = styled(({ indented, ...props }) => <Typography {...props}></Typography>)({
  color: colorPalette.black,
  fontWeight: 800,
  fontSize: '1.2rem',
  textAlign: (props) => props.indented && 'end',
});

const ConferenceButton = styled(Button)({
  color: colorPalette.white,
  backgroundColor: colorPalette.red,
  letterSpacing: '2px',
  fontSize: '0.6rem',
  padding: '3px',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: colorPalette.red,
    opacity: '0.8'
  }
});

const Date = styled(Typography)({
  color: colorPalette.red,
  fontSize: '0.8rem',
  textAlign: 'center',
  fontWeight: 500,
  lineHeight: 2,
});

const Year = styled('span')({
  color: colorPalette.black,
});

const Th = styled('span')({
  fontSize: '0.3rem',
  verticalAlign: 'text-top',
});

type BannerBoardProps = {
  openDialog: (arg: string) => void;
};

const BannerBoard = (props: BannerBoardProps) => {
  const { openDialog } = props;

  return (
    <Container>
      <Header indented={false}>Step Ahead</Header>
      <Header indented={true}>Step Beyond</Header>
      <ConferenceButton onClick={() => openDialog(ModalContent.banner)}>
        VIRTUAL CONFERENCE
      </ConferenceButton>
      <Date variant="h5">
        25 - 29<Th>TH</Th> JANUARY <Year>2021</Year>
      </Date>
    </Container>
  );
};

export default BannerBoard;
