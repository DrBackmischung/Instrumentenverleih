import { Autocomplete, Box, Container, Grid, TextField, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./styles/Ausleihe.scss"
import InstrumentsTable from "../components/InstrumentsTable";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MarktplatzTable from "../components/MarktplatzTable";

function Marktplatz() {

    const apiUrlAll = `http://localhost:8080/markt/getAll`;


    const {isLoading, isError, data: instrumentsData} : any = useQuery("Marktplatz", () =>
        fetch(apiUrlAll).then((res) => res.json())
    );
    const { t, i18n } = useTranslation();

    if(isLoading) {
        return(
            <p>Loading!</p>
        )
    }

    if(isError) {
        return(
            <p>Error!</p>
        )
    }

    return (
        <div className='main'>

            <Typography variant='h2' align='center' className='titleText' sx={{mt: 5}}>{t("market_header")}</Typography>

            <MarktplatzTable instrumentsData={instrumentsData} id="table"/>

        </div>
    )

}

export default Marktplatz;