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

function ProfilePage() {
  const userID: string = getCookie("userId");

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
            <Typography align="center" component="h1" variant="h5">
              Profil von {dataUser?.userName}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <ProfileDetails selectedUser={dataUser} />
          </Grid>
          <Grid item xs={4}>
            <CreditCardDetails selectedUser={dataUser} />
          </Grid>
          <Grid item xs={4}>
            <UpdateProfileDashboard />
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
    </Container>
  );
}

export default ProfilePage;