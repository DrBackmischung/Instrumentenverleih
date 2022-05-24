import { Card, Grid } from "@mui/material";

function Home() {

    return (
        <Grid container xs={12} spacing={2}>
            <Grid item xs={4} spacing={2}>
                <h2 className='white'>Gitarre</h2>
                <Card>Hallo :)</Card>
            </Grid>
            <Grid item xs={4}>
                <h2 className='white'>Klavier</h2>
            </Grid>
            <Grid item xs={4}>
                <h2 className='white'>Oboe</h2>
            </Grid>
        </Grid>   
    )

}

export default Home;