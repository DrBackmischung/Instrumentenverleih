import React from "react";
import { Grid, Typography } from "@mui/material";
import "./styles/CreditCardDetails.scss";

function CreditCardDetails(props: any) {
  const { selectedUser } = props;
  return (
    <Grid container xs={12} borderTop={"3px solid grey"}>
      <Grid item xs={12} spacing={3} paddingTop={5}>
        <Typography align="center" component="h1" variant="h5" className="text">Kreditkarte</Typography><br></br>
      </Grid>
      <Grid item xs={12}>
        <p className="text"><b>Karteninhaber:in:</b> {selectedUser?.creditCard === null ? "/" : selectedUser?.creditCard?.name+", "+selectedUser?.creditCard?.firstName}</p><br></br>
      </Grid>
      <Grid item xs={12}>
        <p className="text"><b>Kartennummer:</b> {selectedUser?.creditCard === null ? "/" : selectedUser?.creditCard?.cardNumber}</p><br></br>
      </Grid>
      <Grid item xs={12}>
        <p className="text"><b>Gültig bis:</b> {selectedUser?.creditCard === null ? "/" : selectedUser?.creditCard?.expiryMonth+"/"+selectedUser?.creditCard?.expiryYear}</p><br></br>
      </Grid>
    </Grid>
  );
}

export default CreditCardDetails;