import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useQuery } from "react-query";

export function BookingCard(props: any) {
  const { selectedUser } = props;
  const [booking, setBooking] = useState<any>();
  const [bookingID, setBookingID] = useState();
  const [openBookingDetails, setOpenBookingDetails] = useState(false);

  const handleOpenBooking = () => {
    setOpenBookingDetails(true);
  };
  const handleCloseBooking = () => {
    setOpenBookingDetails(false);
  };
  const [openCancel, setOpenCancel] = useState(false);

  const handleOpenCancel = () => {
    setOpenCancel(true);
  };
  const handleCloseCancel = () => {
    setOpenCancel(false);
  };

  const deleteBooking = () => {
    if (booking) {
      const apiUrlCancelBooking = `http://localhost:8080/booking/${bookingID}/return`;
      // eslint-disable-next-line
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      };
      fetch(apiUrlCancelBooking, requestOptions).then((response) => {
        return response.json();
      });
    }
    handleCloseCancel();
  };

  const apiUrlGetBookings = `http://localhost:8080/user/${selectedUser?.id}/bookings`;
  const {
    isLoading: isLoadingBookings,
    isError,
    data: dataBookings,
  }: any = useQuery("Bookings", () =>
    fetch(apiUrlGetBookings).then((res) => res.json())
  );

  if (isLoadingBookings) {
    return <p>Loading</p>;
  }

  if (isError || dataBookings?.error) {
    return <p>Error</p>;
  }

  if (dataBookings[0] === undefined) {
    return (
      <Grid
        item
        xs={12}
        spacing={3}
        borderTop={"3px solid grey"}
        paddingTop={5}
      >
        <Typography align="center" component="h1" variant="h5">
          Keine Buchungen
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid container xs={12} borderTop={"3px solid grey"}>
      <Grid item xs={12} spacing={3} paddingTop={5}>
        <Typography align="center" component="h1" variant="h5" className="text">
          Buchungen
        </Typography>
      </Grid>
      {dataBookings.map((b: any) => (
        <Grid item xs={12} padding={2}>
          <Card sx={{ display: "flex", backgroundColor: "rgba(5,10,15,255)" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <p style={{ color:"white" }}>
                <b>{b.vo.title}</b>
              </p>
              <p style={{ color:"white" }}>
                Geliehen am {b.bookingDate.substring(8, 10)}.
                {b.bookingDate.substring(5, 7)}.
                {b.bookingDate.substring(0, 4)}
              </p>
              <p style={{ color:"white" }}>
                Rückgabe am {b.apprxReturnDate.substring(8, 10)}.
                {b.apprxReturnDate.substring(5, 7)}.
                {b.apprxReturnDate.substring(0, 4)}
              </p>
              <p style={{ color:"white" }}>
                Preis: {b.vo.price}€
              </p>
              <Button
                color="secondary"
                fullWidth
                onClick={() => {
                  handleOpenBooking();
                  setBooking(b);
                }}
                variant="contained"
              >
                Details
              </Button>
              {b.state === "Canceled" ? (
                <p>
                  <b>=== Buchung storniert! ===</b>
                </p>
              ) : (
                <Button
                color="secondary"
                  sx={{ marginTop: 1 }}
                  fullWidth
                  onClick={() => {
                    handleOpenCancel();
                    setBooking(b);
                    setBookingID(b.id);
                  }}
                  variant="contained"
                >
                  Buchung stornieren
                </Button>
              )}
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                pt: "2%",
                pr: "2%",
                pb: "2%",
                width: "20%",
              }}
              src={"data:image/png;base64," + b.qrCode}
              alt="poster"
            />
            <CardMedia
              component="img"
              sx={{
                pt: "2%",
                pr: "2%",
                pb: "2%",
                width: "40%",
              }}
              src={"data:image/png;base64," + b.signatureCode}
              alt="poster"
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}