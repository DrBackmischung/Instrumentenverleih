import { Box, Container, Grid, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./styles/HomeContent.scss"

function HomeContent() {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <Container className="menu">
            <Grid spacing={5} container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 1, sm: 1, md: 1, lg:1}}>
                    <Box
                        tabIndex={1}
                        className="menu-picture"
                        component="img"
                        alt="Ausleihe"
                        src="src/ressources/AusleiheIcon.png"
                        onClick={() => {
                            navigate('/ausleihe', {replace: false});
                        }}
                        onKeyDown={(e: any) => {
                            if(e.key === "Enter") {
                                navigate('/ausleihe', {replace: false});
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8} order={{xs: 2, sm: 2, md: 2, lg:2}}>
                    <Box className="menu-box">
                        <Typography className="menu-text">{t("home_1")}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8} order={{xs: 4, sm: 3, md: 3, lg:3}}>
                    <Box className="menu-box">
                        <Typography className="menu-text">{t("home_2")}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 3, sm: 4, md: 4, lg:4}}>
                    <Box
                        tabIndex={2}
                        className="menu-picture"
                        component="img"
                        alt="Marktplatz"
                        src="src/ressources/MarktplatzIcon.png"
                        onClick={() => {
                            navigate('/marktplatz', {replace: false});
                        }}
                        onKeyDown={(e: any) => {
                            if(e.key === "Enter") {
                                navigate('/marktplatz', {replace: false});
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} order={{xs: 5, sm: 5, md: 5, lg:5}}>
                    <Box
                        tabIndex={3}
                        className="menu-picture"
                        component="img"
                        alt="Serviceportal"
                        src="src/ressources/ServiceIcon.png"
                        onClick={() => {
                            navigate('/serviceportal', {replace: false});
                        }}
                        onKeyDown={(e: any) => {
                            if(e.key === "Enter") {
                                navigate('/serviceportal', {replace: false});
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={8} order={{xs: 6, sm: 6, md: 6, lg:6}}>
                    <Box className="menu-box">
                        <Typography className="menu-text">{t("home_3")}</Typography>
                    </Box>
                </Grid>
            </Grid>
            <a className="impressum" onClick={() => {i18n.changeLanguage("de")}}>DE</a> | <a className="impressum" onClick={() => {i18n.changeLanguage("en")}}>EN</a>
        </Container>
    )

}

export default HomeContent;