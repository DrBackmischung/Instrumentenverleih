import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import './styles/InstrumentenBox.scss';

const detail = {
    title: "Test",
    category: "Schlaginstrument",
    mainText:  "Dein Sound hat einfach nicht den Wums, welchen du haben möchtest? Deine Sounds zerfetzen nicht deine Ohren? Dann hast du einach den falschen Verstärker! Leihe dir unseren Marshall Verstärker der Oberklasse!"
};

function InstrumentenBox(props: any){
    const {picture, title, subtitle, link, isMobile} = props;

    const navigate = useNavigate();

    return(

        <Box 
            className='boxWrapper'
            onClick={() => {
                navigate(link, {
                    replace: false,
                    state: { detail }
                });

                console.log(detail);
            
            }} 
        >


            <Grid container justifyContent='center'>

                <Grid item xs={12} sm={12} md={12} lg={3}>

                    <picture>

                        <img src={picture} srcSet={picture} alt={title} className='boxPicture'/>

                    </picture>


                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={9}>

                    <Box justifyContent="center" alignItems="center">
                        <Typography align="left" variant='h4' className='boxTitleText' sx={{mt: (isMobile ? 0 : 8), ml: (isMobile? 2 : 0)}}>
                            {title}
                        </Typography>
                        <Typography align="left" variant="h6" className='boxTitleText' sx={{mt: (isMobile ? 0 : 0), ml: (isMobile? 2 : 0)}} >{subtitle}</Typography>

                    </Box>
                    
                </Grid>

            </Grid>



        </Box>

    );

}

export default InstrumentenBox;