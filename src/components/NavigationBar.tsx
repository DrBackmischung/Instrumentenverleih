import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, ButtonGroup, Container, IconButton, Link, Menu, MenuProps, Toolbar, Typography } from '@mui/material';
import './styles/NavigationBar.scss';
import { useTranslation } from 'react-i18next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getCookie } from '../CookieHandler';

function NavigationBar() {

  const {t} = useTranslation();

  const userID: string = getCookie("userId");
  console.log(userID);

    return(
        <AppBar
          style={{ backgroundColor: "rgba(5,10,15,255)", opacity: 1 }}
          position="static"
        >
          <Container>
            <Toolbar>
              <Box 
                sx={{
                  justifyContent: "space-evenly",
                  flexGrow: 1,
                  display: { xs: "flex" },
                }}
              >
              <ButtonGroup>
                <Button
                  className='button'
                  style={{ backgroundColor: "rgba(10, 40, 40, 0.3)", opacity: 0.95, color: "white" }}
                  key="home"
                  sx={{ my: 2, color: "black", display: "block" }}
                  variant="contained"
                  component={Link}
                  href="/"
                >
                  {t("menu_home")}
                </Button>
                <Button
                  className='button'
                  style={{ backgroundColor: "rgba(10, 40, 40, 0.3)", opacity: 0.95, color: "white" }}
                  key="rent"
                  sx={{ my: 2, color: "black", display: "block" }}
                  variant="contained"
                  component={Link}
                  href="/ausleihe"
                >
                  {t("menu_rent")}
                </Button>
                <Button
                  className='button'
                  style={{ backgroundColor: "rgba(10, 40, 40, 0.3)", opacity: 0.95, color: "white" }}
                  key="market"
                  sx={{ my: 2, color: "black", display: "block" }}
                  variant="contained"
                  component={Link}
                  href="/marktplatz"
                >
                  {t("menu_market")}
                </Button>
                <Button
                  className='button'
                  style={{ backgroundColor: "rgba(10, 40, 40, 0.3)", opacity: 0.95, color: "white" }}
                  key="service"
                  sx={{ my: 2, color: "black", display: "block" }}
                  variant="contained"
                  component={Link}
                  href="/serviceportal"
                >
                  {t("menu_service")}
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <IconButton aria-label="delete" color="secondary" href="/login">
                  <AccountCircleIcon />
                </IconButton>
              </ButtonGroup>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    );
}

export default NavigationBar;