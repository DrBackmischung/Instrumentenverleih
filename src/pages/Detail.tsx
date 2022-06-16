import { AppBar, Box, Button, Grid, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import DetailAdvSec from "../components/DetailAdvSec";
import './styles/Detail.scss';
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

const instrumentsData = {
    title: "Marshall MG50GFX",
    category: "Verstärker",
    mainText:  "Dein Sound hat einfach nicht den Wums, welchen du haben möchtest? Deine Sounds zerfetzen nicht deine Ohren? Dann hast du einach den falschen Verstärker! Leihe dir unseren Marshall Verstärker der Oberklasse!",
    mainPicture: '../src/ressources/Verstärker.svg',
    example: '',
    highlightBackground : '../src/ressources/Uebersicht.jpg',
    highlightText: "Dieser Verstärker ist der perfekte Begleiter für den Anfänger bis hin zum Profi. Der Anfänger kann in diesem Verstärker schnell anfangen, während der Profi sich alle Töne einstellen kann, so weit es benötigt ist. Auch auf Bühnen kann dieser Verstärker glänzen!",
    highlightList: [
        {
            text: "Höhen, Mitten und Bass einstellbar: finde deinen perfekten Sound!"
        },
        {
            text: "2x 12 Treiber: Ein satter Sound"
        },
        {
            text: "50 Watt: Kann sehr laut werde"
        }
    ],
    detailSections: [
        {
            header: "Alles unter Kontrolle",
            text: "Möchtest du mit deinen Bässen ein Erdberben auslösen oder doch nur ein leichtest Wummern? Möchtest du ein Mikrophon anschließen und mit deinem Gesang deine Zuhörer begeistern oder legst du doch mehr Wert auf die Höhen? Das Kontroll-Panel dieses Verstärkers lässt keine Wünsche offen!",
            picture: '../src/ressources/Kontrollpanel.svg'
        },
        {
            header: 'Satte Klänge',
            text: 'Egal wie laut du dieses Gerät aufdrehst die Klänge bleiben immer sauber, dank der beiden verbauten 12 Zoll Treibern mit jeweils 50 Watt! Diese Monster können nicht überfordert werden!',
            picture: '../src/ressources/Lautsprecher.svg'
        }
    ]
};

const instrumentsData1 ={
    title: "Yamaha Stage Custom Hip",
    category: "Schlagzeug",
    mainText:  "Du gibst den Takt vor! Dafür brauchst du natürlich auch das richtige Werkzeug! Hierfür empfehlen wir unser Standard Yamaha Schlagzeug, deinem treuen Begleiter auf allen Bühnen!",
    mainPicture: '../src/ressources/Schlagzeug.svg',
    example: '../src/ressources/105074_mp3-256.mp3',
    highlightBackground : '../src/ressources/VorteileDrum.jpg',
    highlightText: "Dieses anfängerfreundliche Schlagzeugset von Yamaha kann dein neuer Begleiter zu jeglichem Gigs sein! Es besteht aus allen essenziellen Teilen, die du benötigst, um auf der Bühe den Takt vorzugeben und die Fans mitgehen zu lassen!",
    highlightList: [
        {
            text: "Gefertigt aus hochwertigsten Materiallien wie dem besten Birkenholz und Edelmetall"
        },
        {
            text: "20\"x08\" Bass Drum"
        },
        {
            text: "10\"x05\" Tom Tom"
        },
        {
            text: "13\"x08\" Flor Tom mit 20-spiraligen Snare Teppich"
        },
        {
            text: "13\"x05\" Snare Drum"
        }

    ],
    detailSections: [
        {
            header: "Bring den Boden zum Schwingen!",
            text: "Die Bass-Drum dieses Schlagzeug Sets hat eine 20\" x 08\" Fläche. Damit kann dich nichts mehr aufhalten! Der Bassist möchte deinen Bass übertrefen? Darüber lachst du mit diesem Schlagzeug nur! Das schafft der nie!",
            picture: '../src/ressources/MainDrum.svg'
        },
        {
            header: 'Lorem Ipsum',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            picture: '../src/ressources/DoppelBecken.svg'
        }
    ]
}

function Detail(){

    // Instrument aus der URL auslesen
    const [instrument, setInstrument] = useState();
    const apiUrlAll = `localhost:8080/instrument/${instrument}`;
    const { state }: any = useLocation();

    const { isLoading, data, refetch, isError, dataUpdatedAt } = useQuery(
        "instrument",
        () => fetch(apiUrlAll).then((res) => res.json()),
        {
          refetchOnWindowFocus: false,
          enabled: false,
        }
      );

    useEffect(() => {
        setInstrument(state.movieId);
    }, [state?.instrument]);
    useEffect(() => {
        if (instrument) {
            refetch();
        }
    }, [instrument]);

    // Ende des Bausteins






    var counter = 0;
    var switcher = false;

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

    console.log("Data: ");
    console.log(instrumentsData);


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
                    <Button className="rentBarButton" sx={{background: 'rgba(10, 10, 10, 0.7)', color:'white', borderRadius: 4 }}>
                        Leihen
                    </Button>
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

       </div>
    )
}

export default Detail;