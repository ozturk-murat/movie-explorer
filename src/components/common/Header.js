import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import Icon from '../../assets/Logo';

function Header() {
  const navigate = useNavigate();
  return (
    <Box component="header" marginBottom={10}>
      <AppBar position="relative">
          <IconButton onClick={() => navigate('/')}>
            <Icon/>
          </IconButton>
      </AppBar>
    </Box>
  );
}

export default Header;