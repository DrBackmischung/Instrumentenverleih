import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, ButtonGroup, Container, IconButton, Link, Menu, MenuProps, Toolbar, Typography } from '@mui/material';
import './styles/NavigationBar.scss';
import { useTranslation } from 'react-i18next';

function NavigationBar() {

  const {t} = useTranslation();

    const [pages, setPages] = useState([
        { name: t("menu_home"), link: "/" },
        { name: t("menu_rent"), link: "/ausleihe" },
        { name: t("menu_home"), link: "/marktplatz" },
        { name: t("menu_home"), link: "/serviceportal" },
    ]);

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
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    );
}

export default NavigationBar;