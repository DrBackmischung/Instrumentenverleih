import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from 'react';
import "./styles/VerstaerkerDetail.scss"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Abdeckung from '../ressources/Abdeckung.svg';
import Gehäuse from '../ressources/Gehäuse.svg';
import Kontrollpanel from '../ressources/Kontrollpanel.svg';
import Lautsprecher from '../ressources/Lautsprecher.svg';
import Verstaerker from '../ressources/Verstärker.svg';


function VerstaerkerDetail(){

    return(
        <div className='main'>

            <AppBar 
                position="sticky" 
                className="rentBar"
                style={{
                    background: 'rgba(255, 255, 255, 0.479)'
                }}
            >
                <Toolbar>
                    <Typography className="rentBarHeader" sx={{ flexGrow: 0.85 }}>
                        Marshall Verstärker
                    </Typography>
                    <Button className="rentBarButton" sx={{background: 'white', color:'black', borderRadius: 4 }}>
                        Leihen
                    </Button>
                </Toolbar>
            </AppBar>


            <Grid container xs={12} sm={12} md={12} lg={12}>
                
                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:1, sm:2, md:2, lg: 2}}>
                    <Box
                        component="img"
                        src={Verstaerker}
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} order={{xs:2, sm:1, md:1, lg: 1}}>
                    <Typography variant="h3" className='parallaxHeader' >Marshall Verstärker</Typography>
                    <Typography className='parallaxText'>Dein Sound hat einfach nicht den Wums, welchen du haben möchtest? Deine Sounds zerfetzen nicht deine Ohren? Dann hast du einach den falschen Verstärker! Leihe dir unseren Marshall Verstärker der Oberklasse!</Typography>
                </Grid>

            </Grid>

        </div>
    )

}

export default VerstaerkerDetail;