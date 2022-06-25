/* eslint-disable */
import React, { useState, useEffect } from "react";
import CheckoutDialog from "../components/CheckoutDialog";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
function ManageCheckout(props: any) {
  const navigate = useNavigate();
  const { instrument, open, user, setOpen } = props;

  const handleCloseCheckout = () => {
    setOpen(false);
  };

  const finishTransaction = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <CheckoutDialog
        open={open}
        handleClose={handleCloseCheckout}
        finishTransaction={finishTransaction}
        userID={user}
        instrument={instrument}
      />
    </ThemeProvider>
  );
}

export default ManageCheckout;