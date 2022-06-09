import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import './styles/InstrumentenBox.scss';

function InstrumentenBox(props: any){
    const {picture, title, subtitle, link} = props;

    const navigate = useNavigate();

    return(

        <Box 
            className='boxWrapper'
            onClick={() => {
                navigate(link, {replace: false});
            
            }} 
        >

            <Grid container direction='column' justifyContent='center' alignItems='center'>

                <Grid item xs={12} sm={12} md={12} lg={12}>

                    <picture>

                        <img src={picture} srcSet={picture} alt={title} className='boxPicture'/>

                    </picture>


                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>

                    <Box justifyContent="center" alignItems="center">
                        <Typography align="center" variant='h3' className='boxTitleText'>
                            {title}
                        </Typography>

                    </Box>
                    
                    

                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} >
                    
                    <Typography align="center" variant="h5" className='boxTitleText'>{subtitle}</Typography>

                </Grid>

            </Grid>



        </Box>

    );

}

export default InstrumentenBox;