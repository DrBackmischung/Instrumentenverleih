import { Box, Container, Grid, Typography } from "@mui/material";
import "./styles/Home.scss"

function Home() {

    return (
        <Container>
            <Grid spacing={10} container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box
                        component="img"
                        sx={{
                            width: "100%"
                        }}
                        alt="Ausleihe"
                        src="src/ressources/AusleiheIcon.png"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8}>
                    <Box sx={{alignContent: "center", height: "100%"}}>
                        <Typography className="menu-text">Leihen Sie hier Ihre Instrumente aus! Wählen Sie aus einer Vielzahl an verschiedenen Instrumenten, um Ihre Fähigkeiten zu verbessern. Sollten Sie eine unterstützte Musikschule besuchen, finden Sie hier die dort verwendeten Instrumente.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8}>
                    <Box sx={{alignContent: "center", height: "100%"}}>
                        <Typography className="menu-text">Wollen Sie ein Instrument kaufen oder ein altes von Ihnen verkaufen? Schauen Sie sich auf dem Marktplatz um - oder stellen Sie Ihr eigenes Angebot ein :)</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box
                        component="img"
                        sx={{
                            width: "100%"
                        }}
                        alt="Ausleihe"
                        src="src/ressources/AusleiheIcon.png"
                    />
                </Grid>
            </Grid>
        </Container>
    )

}

export default Home;