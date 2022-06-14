import { Autocomplete, Box, Container, Grid, TextField, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles/Ausleihe.scss"
import concert from '../ressources/guitar5.jpg';
import HomeContent from "../components/HomeContent";
import InstrumentenBox from "../components/InstrumentenBox";
import InstrumentsTable from "../components/instrumentsTable";
import Schlagzeug from '../ressources/Schlagzeug.svg'
import Verstaerker from '../ressources/Verstärker.svg';
import { useState } from "react";

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
        link: "schlagzeug"
    }
]



function Ausleihe() {

    const [filter, setFilter] = useState("");


    const originalData = mockData;

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

        originalData.forEach(element => {
            if(!(filterItems.includes(element.category))){
                filterItems.push(element.category);
            }
        });
                
        return filterItems;

    }





    return (
        <div className='main'>

            <Typography variant='h2' align='center' className='titleText' sx={{mt: 5}}>Unsere ausleihbaren Instrumente</Typography>
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

            <InstrumentsTable instrumentsData={mockData} filter={filter} isMobile={checkForDevice()} id="table"/>

        </div>
    )

}

export default Ausleihe;