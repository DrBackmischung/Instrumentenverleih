import { Autocomplete, Box, Container, Grid, TextField, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./styles/Ausleihe.scss"
import InstrumentsTable from "../components/InstrumentsTable";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

var mockData = [
    {
        title: "Marshall MG50GFX",
        category: "Verstärker",
        picture: 'src/ressources/Verstärker.svg',
        link: "verstaerker"
    },
    {
        title: "Yamaha Stage Hip",
        category: "Schlaginstrumente",
        picture: 'src/ressources/Schlagzeug.svg',
        link: "schlagzeugungos"
    }
]



function Ausleihe() {

    const apiUrlAll = `http://localhost:8080/instrument/getAll`;


    const {isLoading, isError, data: instrumentsData} : any = useQuery("Instruments", () =>
        fetch(apiUrlAll).then((res) => res.json())
    );

    const [filter, setFilter] = useState("");

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

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

    var getFilterItems = () => {

        let filterItems: string[] = [];
        let itemsToFilter = instrumentsData;

        if(instrumentsData != null && Array.isArray(instrumentsData)){
            itemsToFilter.forEach((element : any) => {
                if((!(filterItems.includes(element.category)))&&(element.languageCode === i18n.language)){
                    filterItems.push(element.category);
                }
            });
        }

        
                
        return filterItems;

    }

    var getInstrumentsForLanguage = () => {

        let items: any = [];

        if(instrumentsData != null && Array.isArray(instrumentsData)){
            instrumentsData.forEach((element : any) => {
                if(element.languageCode === i18n.language && element.amount !== 0){
                    items.push(element);
                }
            })
        }

        

        return items;

    }


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

            <Typography variant='h2' align='center' className='titleText' sx={{mt: 5}}>{t("rental_header")}</Typography>
            <Toolbar sx={{mt: 5}}>

                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <Autocomplete
                            disablePortal
                            options={getFilterItems()}
                            renderInput={(params) => <TextField {...params} label="Filter"/>} 
                            onChange={(event : any, newValue: string | null) => {
                                if(newValue == null){
                                    setFilter("");
                                }else{
                                    setFilter(newValue);
                                }

                                
                            }}
                            sx={{marginLeft: (checkForDevice()? 0 : 20), mb: (checkForDevice()? 5 : 5), backgroundColor: 'white'}}

                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={4}>

                    </Grid>

                </Grid>
                
            </Toolbar>

            <InstrumentsTable instrumentsData={getInstrumentsForLanguage()} filter={filter} isMobile={checkForDevice()} id="table"/>

        </div>
    )

}

export default Ausleihe;