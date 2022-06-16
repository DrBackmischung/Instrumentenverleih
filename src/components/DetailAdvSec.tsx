import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './styles/DetailAdvSec.scss';

function DetailAdvSec(props : any){
    const{section, counter, picOtherSide, isMobile} = props;
    return(
        <Box sx={{backgroundColor: 'black', pb: 5}}>
            <Grid container direction='row' justifyContent='center' >
                <Grid item xs={12} sm={12} md={12} lg={6} 
                order={{xs: (counter + 1) , sm: (counter + 1), md: (counter + 1), lg: (picOtherSide ? (counter) : (counter + 1))}}
                sx={{backgroundColor: 'black', mt: ((isMobile) ? 10 : 0)}}
                >

                    <picture>
                        <img src={section.picture} srcSet={section.picture}/>
                    </picture>
                                
                </Grid>
            
                <Grid item xs={12} sm={12} md={12} lg={6} 
                order={{xs: counter, sm: counter, md: counter, lg: (picOtherSide ? counter + 1 : counter)}}
                sx={{backgroundColor: 'black'}}
                >
        
                    <Typography variant='h3' className='Header'>{section.header}</Typography>
                    <Typography className='Text'>{section.text}</Typography>
        
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default DetailAdvSec;