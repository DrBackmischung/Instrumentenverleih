import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "./styles/UpdateProfileDashboard.scss";

function UpdateProfileDashboard() {
  return (
    <Grid container xs={12} borderTop={"3px solid grey"}>
      <Grid item xs={12} spacing={3} paddingTop={5}>
        <Typography align="center" component="h1" variant="h5" className="text">Dashboard</Typography><br></br>
      </Grid>
      <Grid item xs={12} paddingTop={2}>
        <Button
          fullWidth
          key={"addCC"}
          onClick={() => {}}
          variant="contained"
          color="secondary"
        >
          Kreditkarte hinzufügen
        </Button>
      </Grid>
      <Grid item xs={12} paddingTop={2}> 
        <Button
          fullWidth
          key={"addCC"}
          onClick={() => {}}
          variant="contained"
          color="secondary"
        >
          Kreditkarte ändern
        </Button>
      </Grid>
      <Grid item xs={12} paddingTop={2}>
        <Button
          fullWidth
          key={"addCC"}
          onClick={() => {}}
          variant="contained"
          color="secondary"
        >
          Accountinformationen bearbeiten
        </Button>
      <Grid item xs={12} paddingTop={2}>
        <Button
          fullWidth
          key={"addCC"}
          onClick={() => {}}
          variant="contained"
          color="secondary"
        >
          Passwort ändern
        </Button>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default UpdateProfileDashboard;