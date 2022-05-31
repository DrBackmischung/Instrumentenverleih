import { Box, Container, Grid, Typography } from "@mui/material";
import "./styles/HomeContent.scss"

function HomeContent() {

    return (
        <Container className="menu">
            <Grid spacing={5} container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 1, sm: 1, md: 1, lg:1}}>
                    <Box
                        className="menu-picture"
                        component="img"
                        sx={{
                            width: "50%"
                        }}
                        alt="Ausleihe"
                        src="src/ressources/AusleiheIcon.png"
                        onClick={() => {
                            window.alert("Ausleihe");
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8} order={{xs: 2, sm: 2, md: 2, lg:2}}>
                    <Box className="menu-box">
                        <Typography className="menu-text">Leihen Sie hier Ihre Instrumente aus! Wählen Sie aus einer Vielzahl an verschiedenen Instrumenten, um Ihre Fähigkeiten zu verbessern. Sollten Sie eine unterstützte Musikschule besuchen, finden Sie hier die dort verwendeten Instrumente.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8} order={{xs: 4, sm: 3, md: 3, lg:3}}>
                    <Box className="menu-box">
                        <Typography className="menu-text">Wollen Sie ein Instrument kaufen oder ein altes von Ihnen verkaufen? Schauen Sie sich auf dem Marktplatz um - oder stellen Sie Ihr eigenes Angebot ein!</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 3, sm: 4, md: 4, lg:4}}>
                    <Box
                        className="menu-picture"
                        component="img"
                        sx={{
                            width: "50%",
                            alignSelf: "center"
                        }}
                        alt="Ausleihe"
                        src="src/ressources/MarktplatzIcon.png"
                        onClick={() => {
                            window.alert("Marktplatz");
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 5, sm: 5, md: 5, lg:5}}>
                    <Box
                        className="menu-picture"
                        component="img"
                        sx={{
                            width: "50%"
                        }}
                        alt="Ausleihe"
                        src="src/ressources/ServiceIcon.png"
                        onClick={() => {
                            window.alert("Serviceportal");
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8} order={{xs: 6, sm: 6, md: 6, lg:6}}>
                    <Box className="menu-box">
                        <Typography className="menu-text">Brauchen Sie eine Reperatur oder muss Ihr Instrument gestimmt werden? Wir bieten Ihnen dafür den geeigneten Service an! Schauen Sie sich doch in unserem Service-Portal um, damit Ihr Anliegen gehört werden kann.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )

}

export default HomeContent;