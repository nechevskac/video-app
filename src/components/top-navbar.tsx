import React from 'react';

import { AppBar, Box, styled } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';

import logo from '../static/logo.jpg';
import { colorPalette } from '../color-palette';

const Navbar = styled(AppBar)({
  position: 'absolute',
  height: '40px',
  backgroundColor: colorPalette.darkBlue,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  paddingRight: '15px',
});

const MenuIcon = styled(MenuRoundedIcon)({
  color: colorPalette.red
});

const TopNavbar = () => {
  return (
    <Navbar>
      <img src={logo} width="120px" height="40px" alt="logo" />
      <Box display="flex" justifyContent="space-between" width="16%" alignItems="center">
        <EventNoteRoundedIcon fontSize="small" />
        <BusinessCenterRoundedIcon fontSize="small" />
        <QuestionAnswerRoundedIcon fontSize="small" />
        <NotificationsRoundedIcon fontSize="small" />
        |
        <AccountCircleRoundedIcon fontSize="small" />
        <MenuIcon fontSize="small" />
      </Box>
    </Navbar>
  );
};
export default TopNavbar;
