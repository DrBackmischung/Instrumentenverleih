import { AppBar, Box, Button, Grid, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import DetailAdvSec from "../components/DetailAdvSec";
import './styles/Detail.scss';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCookie } from "../CookieHandler";
import ManageCheckout from "../components/ManageCheckout";

function Detail(){

    const navigate = useNavigate();
    const [openCheckout, setOpenCheckout] = useState(false);

    function openDialog() {
        console.log("click "+openCheckout)
        if(openCheckout === false) {
            setOpenCheckout(true);
        } else {
            setOpenCheckout(false);
        }
    }

    console.log("Detail!")

    let { instrumentID } = useParams();
    const apiUrlAll = `http://localhost:8080/instrument/${instrumentID}`;


    const {isLoading, isError, data: instrumentsData} : any = useQuery("Instruments", () =>
        fetch(apiUrlAll).then((res) => res.json())
    );

    var counter = 0;
    var switcher = false;

    console.log("After")

    const getCounter = () => {
        let counterCache = counter;
        counter = counter + 1;
        return counterCache;
    }

    const pictureSide = () => {
        let switcherCache = switcher;
        switcher = !switcher;
        return switcherCache;
    }
    
    const theme = useTheme();

    const checkForDevice = () => {
        let windowWidth = window.innerWidth;
        if(windowWidth < 767){
            return true;
        }else{
            return false;
        }
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

    const userID: string = getCookie("userId");

    function isUser ( uuid: any ) {
        let s: any = "" + uuid;
    
        s = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
        if (s === null) {
          return false;
        }
        return true;
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
                             {instrumentsData.title}
                         </Typography>
                         {isUser(userID) ?
                         <Button
                            className="rentBarButton"
                            sx={{background: 'rgba(10, 10, 10, 0.7)', color:'white', borderRadius: 4 }}
                            onClick={() => {
                                openDialog();
                            }}>
                             Ausleihen
                         </Button>
                         :
                         <Button
                            className="rentBarButton"
                            sx={{background: 'rgba(10, 10, 10, 0.7)', color:'white', borderRadius: 4 }}
                            onClick={() => {
                                navigate("/login");
                            }} >
                             Zum Ausleihen einloggen
                         </Button>
                         }
                     </Toolbar>
                 </AppBar>
     
                 <Grid container xs={12} sm={12} md={12} lg={12} spacing={0} rowSpacing = {0}>
                 
                     <Grid item xs={12} sm={12} md={12} lg={4} order={{xs:2, sm:2, md: 2, lg: 2}} sx={{mb:10}}>
     
                         <picture>
                             <img src={instrumentsData.mainPicture} alt={instrumentsData.category} srcSet={instrumentsData.mainPicture}/>
                         </picture>
     
                     </Grid>
     
                     <Grid item xs={12} sm={12} md={12} lg={8} order={{xs:1, sm:1, md:1, lg: 1}} >
     
                         <Grid container xs={12} sm={12} md={12} lg={12}>
                             <Grid item xs={12} sm={12} md={12} lg={12} sx={{mt: (checkForDevice() ? 0 : 4)}}>
                                 <Typography variant="h3" className='header'>{instrumentsData.title}</Typography>
                                 <Typography className='text'>{instrumentsData.mainText}</Typography>                        
                             </Grid>
     
                             <Grid item xs={12} sm={12} md={12} lg={12} sx={{mt: (checkForDevice() ? 5 : 5), ml: (checkForDevice() ? 0 : 14)}} >
                                 <Grid container xs={12} sm={12} md={12} lg={12}>
                                     <Grid item xs={12} sm={12} md={12} lg={2} sx={{mt: (checkForDevice() ? 5 : 3)}}>
                                         <Typography variant="h5" className='parallaxHeader'>Sounbeispiel:</Typography>
                                     </Grid>
     
                                     <Grid item xs={12} sm={12} md={12} lg={10}>
                                         <Box sx={{mt: (checkForDevice() ? 5 : 5), ml: (checkForDevice() ? 5 : 0)}}>
                                             <ReactAudioPlayer src={instrumentsData.example} controls />
                                         </Box>
                                     </Grid>
                                 </Grid>
                                 
                                 
                                 
                             </Grid>
                         </Grid>
     
                         
                     </Grid>
     
                     <Grid item xs={12} sm={12} lg={12} order={{xs:3, sm:3, md:3, lg: 3}} sx={{backgroundImage: `url(${instrumentsData.highlightBackground})`, backgroundSize:"cover"}}>
     
                     
                         <Box className="Uebersicht" id="uebersichtContainer" sx={{width: (checkForDevice() ? "75%" : "25%")}}>
                             <Typography variant="h3" sx={{fontWeight: 'bold'}}>Highlights</Typography>
                             <Typography variant="h4">Darum empfehlen wir dieses Produkt</Typography>
                             <Typography>{instrumentsData.highlightText}</Typography>
                             <Typography variant="h4">Die Vorteile im Überblick</Typography>
                             {instrumentsData.highlightList?.map((point : any) => (
                                 <ul key={point.text}>
                                     <li>{point.text}</li>
                                 </ul>
                             ))}
                         </Box>
     
                     </Grid>
     
                     <Grid item xs={12} sm={12} md={12} lg={12} order={{xs:4, sm: 4, md: 4, lg: 4}}>
                         {instrumentsData.detailSections?.map((section : any) => (
     
                             <DetailAdvSec section={section} counter={getCounter()} picOtherSide={pictureSide()} isMobile={checkForDevice()} />
                         
      
                         ))}
                     </Grid>
     
                     
     
     
                 </Grid> 

                 <ManageCheckout
                    instrument = {instrumentsData}
                    open = {openCheckout}
                    user = {userID}
                 />
     
            </div>
         )
}

export default Detail;