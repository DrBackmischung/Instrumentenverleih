import { Box, Container, Grid, Typography } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles/Ausleihe.scss"
import concert from '../ressources/guitar5.jpg';
import HomeContent from "../components/HomeContent";
import InstrumentenBox from "../components/InstrumentenBox";
import Schlagzeug from '../ressources/Schlagzeug.svg'
import Verstaerker from '../ressources/Verstärker.svg';

const mockData = [
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
    },
    {
        title: "Yamaha Stage Hip",
        category: "Schlaginstrumente",
        picture: 'src/ressources/Schlagzeug.svg',
        link: "schlagzeug"
    },
    {
        title: "Yamaha Stage Hip",
        category: "Schlaginstrumente",
        picture: 'src/ressources/Schlagzeug.svg',
        link: "schlagzeug"
    },
    {
        title: "Yamaha Stage Hip",
        category: "Schlaginstrumente",
        picture: 'src/ressources/Schlagzeug.svg',
        link: "schlagzeug"
    },
]



function Ausleihe() {

    return (
        <div className='main'>
            <p>Hallo</p>

            <Grid container rowSpacing={15}  className='ausleiheGrid'>

                {mockData?.map((entry : any) => (
                    <Grid item key={entry.title} xs={12} sm={12} md={12} lg={4}>
                        <InstrumentenBox title={entry.title} subtitle={entry.category} link={entry.link} picture={entry.picture}/>
                    </Grid>
                ))}

            </Grid>

            


        </div>
    )

}

export default Ausleihe;