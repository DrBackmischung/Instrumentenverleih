import React from "react";
import { Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useQuery } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProfileDetails from "../components/ProfileDetails";
import CreditCardDetails from "../components/CreditCardDetails";
import UpdateProfileDashboard from "../components/UpdateProfileDashboard";
import "./styles/ProfilePage.scss";
import { getCookie } from "../CookieHandler";
import { BookingCard } from "../components/BookingCard";
import { useNavigate } from "react-router-dom";

function ProfilePage() {

  const navigate = useNavigate();
  const userID: string = getCookie("userId");
  if (!isUUID(userID)) {
    navigate("/login");
  }

  const apiUrlGetUser = `http://localhost:8080/user/${userID}`;
  const {
    isLoading: isLoadingUser,
    data: dataUser,
    isError,
  }: any = useQuery("User", () =>
    fetch(apiUrlGetUser).then((res) => res.json())
  );

  if (isLoadingUser) {
    return <p>Loading</p>;
  }

  if (isError || dataUser?.error) {
    return <p>Error</p>;
  }

  return (
    <Container
        className="profilePage-container"
        sx={{
          pt: 4,
          pb: 6,
          position: "relative",
          marginTop: "10px",
        }}
        maxWidth="xl"
    >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" component="h1" variant="h5" className="text">
              Profil von {dataUser?.userName}
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <ProfileDetails selectedUser={dataUser} />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <UpdateProfileDashboard />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <BookingCard selectedUser={dataUser} />
          </Grid>
        </Grid>
    </Container>
  );
}

function isUUID ( uuid: any ) {
    let s: any = "" + uuid;

    s = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
    if (s === null) {
      return false;
    }
    return true;
}

export default ProfilePage;