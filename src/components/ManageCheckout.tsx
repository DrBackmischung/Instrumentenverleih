/* eslint-disable */
import React, { useState, useEffect } from "react";
import CheckoutDialog from "../components/CheckoutDialog";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
function ManageCheckout(props: any) {
  const navigate = useNavigate();
  const { show, open, userData } = props;
  const [openCheckout, setOpenCheckout] = useState(false);
  const [openSeatBooking, setOpenSeatBooking] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShow, setSelectedShow] = useState();
  const [priceForSeats, setPriceForSeats] = useState(0);
  const apiUrlPrice = `/price/getAll`;
  const priceQuery: any = useQuery("priceData", () =>
    fetch(apiUrlPrice).then((res) => res.json())
  );
  useEffect(() => {
    if (open > 0) {
      setOpenSeatBooking(true);
    }
  }, [open]);
  useEffect(() => {
    if (open !== undefined) {
      setSelectedShow(show);
    }
  }, [show]);
  const handleClickOpenCheckout = () => {
    setOpenCheckout(true);
    setOpenSeatBooking(false);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
    resetSelectedSeats();
  };

  const finishTransaction = () => {
    setOpenCheckout(false);
    resetSelectedSeats();
    navigate("/");
  };

  const handleCloseBooking = () => {
    setOpenSeatBooking(false);
    resetSelectedSeats();
  };

  const resetSelectedSeats = () => {
    setSelectedSeats([]);
    setPriceForSeats(0);
  };
  return (
    <ThemeProvider theme={theme}>
      <CheckoutDialog
        open={openCheckout}
        handleClose={handleCloseCheckout}
        finishTransaction={finishTransaction}
        user={userData}
        selectedShow={selectedShow}
        selectedSeats={selectedSeats}
        priceQuery={priceQuery}
        userData={userData}
        priceForSeats={priceForSeats}
      />
    </ThemeProvider>
  );
}

export default ManageCheckout;