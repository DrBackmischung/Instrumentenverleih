import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, ButtonGroup, Container, IconButton, Link, Menu, MenuProps, Toolbar, Typography } from '@mui/material';
import './styles/NavigationBar.scss';

function NavigationBar() {

    const [pages, setPages] = useState([
        { name: "Home", link: "/" },
        { name: "Ausleihe", link: "/ausleihe" },
        { name: "Marktplatz", link: "/marktplatz" },
        { name: "Serviceportal", link: "/serviceportal" },
    ]);

    return(
        <AppBar
          style={{ backgroundColor: "rgba(5,10,15,255)", opacity: 1 }}
          position="sticky"
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
                  {pages.map((page) => (
                    <Button
                      className='button'
                      style={{ backgroundColor: "rgba(10, 40, 40, 0.3)", opacity: 0.95, color: "#959595" }}
                      key={page.name}
                      sx={{ my: 2, color: "black", display: "block" }}
                      variant="contained"
                      component={Link}
                      href={page.link}
                    >
                      {page.name}
                    </Button>
                  ))}
                </ButtonGroup>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    );
}

export default NavigationBar;