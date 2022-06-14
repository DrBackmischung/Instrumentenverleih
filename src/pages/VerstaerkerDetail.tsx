import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from 'react';
import "./styles/VerstaerkerDetail.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Abdeckung from '../ressources/Abdeckung.svg';
import Gehäuse from '../ressources/Gehäuse.svg';
import Kontrollpanel from '../ressources/Kontrollpanel.svg';
import Lautsprecher from '../ressources/Lautsprecher.svg';
import Verstaerker from '../ressources/Verstärker.svg';
import Uebersicht from '../ressources/Uebersicht.jpg';



function VerstaerkerDetail(){


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
                        Marshall Verstärker
                    </Typography>
                    <Button className="rentBarButton" sx={{background: 'rgba(10, 10, 10, 0.7)', color:'white', borderRadius: 4 }}>
                        Leihen
                    </Button>
                </Toolbar>
            </AppBar>


            <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} rowSpacing={0}>
                
                <Grid item xs={12} sm={12} md={12} lg={4} order={{xs:2, sm:2, md:2, lg: 2}} sx={{mt: (checkForDevice() ? 10 : 0)}}>
                    

                    <picture>
                        <img src={Verstaerker} alt="Verstärker" srcSet={Verstaerker}/>
                    </picture>

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={8} order={{xs:1, sm:1, md:1, lg: 1}} >
                    <Typography variant="h3" className='parallaxHeader' >Marshall Verstärker</Typography>
                    <Typography className='parallaxText'>Dein Sound hat einfach nicht den Wums, welchen du haben möchtest? Deine Sounds zerfetzen nicht deine Ohren? Dann hast du einach den falschen Verstärker! Leihe dir unseren Marshall Verstärker der Oberklasse!</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} order={{xs:3, sm:3, md:3, lg: 3}} sx={{backgroundImage: `url(${Uebersicht})`, backgroundSize: "cover"}} >
                    
                    <Box className="Uebersicht" id="uebersichtContainer" sx={{width: (checkForDevice() ? "75%" : "25%")}}>

                        <Typography variant="h3" sx={{fontWeight: 'bold'}}>Highlights</Typography>
                        <Typography variant="h4">Darum empfehlen wir dieses Produkt</Typography>
                        <Typography>Dieser Verstärker ist der perfekte Begleiter für den Anfänger bis hin zum Profi. Der Anfänger kann in diesem Verstärker schnell anfangen, während der Profi sich alle Töne einstellen kann, so weit es benötigt ist. Auch auf Bühnen kann dieser Verstärker glänzen!</Typography>
                        <Typography variant="h4">Die Vorteile im Überblick</Typography>
                        <ul >
                            <li>Höhen, Mitten und Bass einstellbar: finde deinen perfekten Sound!</li>
                            <li>2x 12" Treiber: Ein satter Sound</li>
                            <li>50 Watt: Kann sehr laut werden</li>
                        </ul>

                    </Box>

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:5, sm:5, md:5, lg: 4}} sx={{backgroundColor: 'black'}}>

                    <Box sx={{mt: (checkForDevice() ? -10 : 10)}}>
                        <picture>
                            <img className=".menu-picture" src={Kontrollpanel} alt="Kontroll-Panel" srcSet={Kontrollpanel}/>
                        </picture>
                    </Box>
                    

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:4, sm:4, md:4, lg: 5}} sx={{backgroundColor: 'black'}}> 
                    <Box sx={{mt: (checkForDevice() ? 10 : 35)}}>
                        <Typography variant="h3" className='parallaxHeader' >Alles unter Kontrolle</Typography>
                        <Typography className='parallaxText'>Möchtest du mit deinen Bässen ein Erdberben auslösen oder doch nur ein leichtest Wummern? Möchtest du ein Mikrophon anschließen und mit deinem Gesang deine Zuhörer begeistern oder legst du doch mehr Wert auf die Höhen?</Typography>
                        <Typography className='parallaxText'>Das Kontroll-Panel dieses Verstärkers lässt keine Wünsche offen!</Typography>
                    </Box>
                    
                </Grid>
                
                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:6, sm:6, md:6, lg: 6}} sx={{backgroundColor: 'black'}}>

                    <Box className=".menu-picture" sx={{mt: (checkForDevice() ? 0 : 20)}}>
                        <picture>
                            <img className=".menu-picture" src={Lautsprecher} alt="Lautsprecher" srcSet={Lautsprecher}/>
                        </picture>
                    </Box>

                    

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:5, sm:5, md:5, lg: 5}} sx={{backgroundColor: 'black'}}>
                    <Box sx={{mt: (checkForDevice() ? 10 : 35)}}>
                        <Typography variant="h3" className='parallaxHeader' >Satte Klänge</Typography>
                        <Typography className='parallaxText'>Egal wie laut du dieses Gerät aufdrehst die Klänge bleiben immer sauber, dank der beiden verbauten 12 Zoll Treibern mit jeweils 50 Watt! Diese Monster können nicht überfordert werden!</Typography>
                    </Box>
                </Grid>

            </Grid>

        </div>
    )

}

export default VerstaerkerDetail;