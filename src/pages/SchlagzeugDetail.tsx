import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from 'react';
import "./styles/VerstaerkerDetail.scss";

import Uebersicht from '../ressources/VorteileDrum.jpg';
import Schlagzeug from '../ressources/Schlagzeug.svg'
import MainDrum from '../ressources/MainDrum.svg';
import DoppelBecken from '../ressources/DoppelBecken.svg';



function SchlagzeugDetail(){


    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true
    });

    const checkForDevice = () => {
        let windowWidth = window.innerWidth;
        if(windowWidth < 767){
            return true;
        }else{
            return false;
        }
    }

    

    return(
        <div className='main'>

            <AppBar 
                position="sticky" 
                className="rentBar"
                style={{
                    background: 'rgba(10, 10, 10, 0.3)'
                }}
            >
                <Toolbar>
                    <Typography className="rentBarHeader" sx={{ flexGrow: 0.85 }}>
                        Yamaha Schlagzeug
                    </Typography>
                    <Button className="rentBarButton" sx={{background: 'rgba(10, 10, 10, 0.7)', color:'white', borderRadius: 4 }}>
                        Leihen
                    </Button>
                </Toolbar>
            </AppBar>


            <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} rowSpacing={0}>
                
                <Grid item xs={12} sm={12} md={12} lg={4} order={{xs:2, sm:2, md:2, lg: 2}}>
                    
                    <Box sx={{mt: (checkForDevice() ? 20 : 25)}}>
                        <picture >
                            <img src={Schlagzeug} alt="Schlagzeug" srcSet={Schlagzeug}/>
                        </picture>
                    </Box>

                    

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={8} order={{xs:1, sm:1, md:1, lg: 1}} >
                    <Typography variant="h3" className='parallaxHeader' >Yamaha Stage Custom Hip</Typography>
                    <Typography className='parallaxText'>Du gibst den Takt vor! Dafür brauchst du natürlich auch das richtige Werkzeug! Hierfür empfehlen wir unser Standard Yamaha Schlagzeug, deinem treuen Begleiter auf allen Bühnen!</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} order={{xs:3, sm:3, md:3, lg: 3}} sx={{backgroundImage: `url(${Uebersicht})`, backgroundSize: "cover"}} >
                    
                    <Box className="Uebersicht" id="uebersichtContainer" sx={{width: (checkForDevice() ? "75%" : "25%")}}>

                        <Typography variant="h3" sx={{fontWeight: 'bold'}}>Highlights</Typography>
                        <Typography variant="h4">Darum empfehlen wir dieses Produkt</Typography>
                        <Typography>Dieses anfängerfreundliche Schlagzeugset von Yamaha kann dein neuer Begleiter zu jeglichem Gigs sein! Es besteht aus allen essenziellen Teilen, die du benötigst, um auf der Bühe den Takt vorzugeben und die Fans mitgehen zu lassen!</Typography>
                        <Typography variant="h4">Die Vorteile im Überblick</Typography>
                        <ul >
                            <li>Gefertigt aus hochwertigsten Materiallien wie dem besten Birkenholz und Edelmetall</li>
                            <li>20"x08" Bass Drum</li>
                            <li>10"x05" Tom Tom</li>
                            <li>13"x08" Flor Tom mit 20-spiraligen Snare Teppich</li>
                            <li>13"x05" Snare Drum</li>
                        </ul>

                    </Box>

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:5, sm:5, md:5, lg: 4}} sx={{backgroundColor: 'black'}}>

                    <Box sx={{mt: (checkForDevice() ? 5 : 10)}}>
                        <picture>
                            <img className=".menu-picture" src={MainDrum} alt="Kontroll-Panel" srcSet={MainDrum}/>
                        </picture>
                    </Box>
                    

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:4, sm:4, md:4, lg: 5}} sx={{backgroundColor: 'black'}}> 
                    <Box sx={{mt: (checkForDevice() ? 5 : 35)}}>
                        <Typography variant="h3" className='parallaxHeader' >Bring den Boden zum Schwingen!</Typography>
                        <Typography className='parallaxText'>Die Bass-Drum dieses Schlagzeug Sets hat eine 20" x 08" Fläche. Damit kann dich nichts mehr aufhalten! Der Bassist möchte deinen Bass übertrefen? Darüber lachst du mit diesem Schlagzeug nur! Das schafft der nie!</Typography>
                    </Box>
                    
                </Grid>


                

                
                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:6, sm:6, md:6, lg: 6}} sx={{backgroundColor: 'black'}}>

                    <Box className=".menu-picture" sx={{mt: (checkForDevice() ? 10 : 20), ml: (checkForDevice() ? 10 : 15)}}>
                        <picture>
                            <img className=".menu-picture" src={DoppelBecken} alt="Lautsprecher" srcSet={DoppelBecken}/>
                        </picture>
                    </Box>

                    

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:5, sm:5, md:5, lg: 5}} sx={{backgroundColor: 'black'}}>
                    <Box sx={{mt: (checkForDevice() ? 10 : 35)}}>
                        <Typography variant="h3" className='parallaxHeader' >Lorem Ipsum</Typography>
                        <Typography className='parallaxText'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
                    </Box>
                </Grid>

            </Grid>

        </div>
    )

}

export default SchlagzeugDetail;