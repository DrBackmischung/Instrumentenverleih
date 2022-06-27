import { Grid } from "@mui/material";
import InstrumentenBox from "./InstrumentenBox";
import MarktplatzBox from "./MarktplatzBox";

function MarktplatzTable(props: any){
    const{instrumentsData} = props;

    return(
        <Grid container spacing={5}  className='ausleiheGrid'
        sx={{
            marginTop: "10px"
        }}>

            {instrumentsData?.map((entry : any) => (
                <Grid item key={entry.title} xs={12} sm={12} md={12} lg={6}>
                    <MarktplatzBox title={entry.title} subtitle={entry.category} link={entry.id} description={entry.description} picture={entry.pictureLink} price={entry.price}/>
                    
                </Grid>
            ))}

        </Grid>
    
    )
}

export default MarktplatzTable;