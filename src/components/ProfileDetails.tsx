import React from "react";
import { Grid, Typography } from "@mui/material";
import "./styles/ProfileDetails.scss";

function ProfileDetails(props: any) {
  const { selectedUser } = props;
  return (
    <Grid container xs={12} borderTop={"3px solid grey"}>
      <Grid item xs={12} spacing={3} paddingTop={5}>
        <Typography align="center" component="h1" variant="h5" className="text">Informationen</Typography><br></br>
      </Grid>
      <Grid item xs={12}>
        <p className="text"><b>Name:</b> {selectedUser?.name}, {selectedUser?.firstName}</p><br></br>
      </Grid>
      <Grid item xs={12}>
        <p className="text"><b>Mail:</b> {selectedUser?.email}</p><br></br>
      </Grid>
      <Grid item xs={12}>
        <p className="text"><b>Adresse:</b> {selectedUser?.street} {selectedUser?.number}, {selectedUser?.plz} {selectedUser?.city}</p><br></br>
      </Grid>
      <Grid item xs={12}>
        <p className="text"><b>Paypal:</b> {selectedUser?.payPalMail === null ? "Nein" : "Ja"}</p><br></br>
      </Grid>
    </Grid>
  );
}

export default ProfileDetails;