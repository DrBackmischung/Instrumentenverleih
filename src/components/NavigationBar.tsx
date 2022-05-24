import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Typography } from '@mui/material';
import './styles/NavigationBar.scss';

const pages = ['Instrumente', 'Reparatur', 'Marktplatz']

const NavigationBar = () => {

    return(
        <AppBar position="relative">
            <Toolbar variant="regular" className="toolbar">
                <Typography 
                    variant = "h6"
                    noWrap
                    component="a"
                    href="/"
                    className="toolbarText"
                >
                    Instrumente
                </Typography>
                
                <Typography
                    variant = "h6"
                    noWrap
                    component="a"
                    href="/"
                    className="toolbarText"
                >
                    Reperatur
                </Typography>
                <Typography
                    variant = "h6"
                    noWrap
                    component="a"
                    href="/"
                    className="toolbarText"
                >
                    Marktplatz
                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;

