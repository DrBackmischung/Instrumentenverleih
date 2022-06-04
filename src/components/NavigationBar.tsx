import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Container, IconButton, Link, Menu, MenuProps, Toolbar, Typography } from '@mui/material';
import './styles/NavigationBar.scss';
import styled from '@emotion/styled';

function NavigationBar() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [pages, setPages] = useState([
        { name: "Ausleihe", link: "/ausleihe" },
        { name: "Marktplatz", link: "/marktplatz" },
        { name: "Serviceportal", link: "/serviceportal" },
    ]);
  
    const StyledMenu = styled((props: MenuProps) => (
      <Menu
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        {...props}
      />
    ))(({theme})=>({
      '& .MuiPaper-root': {
        borderRadius: 6,
        minWidth:180,
      },
      '& .MuiMenu-list': {
        backgroundColor: '#ba8434',
        padding: '4px 0',
      },
    }));

    return(
        <AppBar
          style={{ backgroundColor: "#393E41", opacity: 1 }}
          position="static"
        >
          <Container fixed>
            <Toolbar>
              <IconButton
                sx={{ height: "40px", width: "40px" }}
                size="large"
                edge="start"
                component={Link}
                href="/"
              >
                <img
                  src="https://raw.githubusercontent.com/DrBackmischung/Kino-Dokumentation/main/KV.png"
                  alt="Kinovation Logo"
                  height={40} />
              </IconButton>
              <Box
                sx={{
                  justifyContent: "space-evenly",
                  flexGrow: 1,
                  display: { xs: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    style={{ backgroundColor: "#ba8434", opacity: 0.95 }}
                    key={page.name}
                    sx={{ my: 2, color: "black", display: "block" }}
                    variant="contained"
                    component={Link}
                    href={page.link}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    );
}

export default NavigationBar;