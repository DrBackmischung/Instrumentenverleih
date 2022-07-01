import { CardMedia, Grid, Card, CardContent, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './styles/InstrumentenBox.scss';

function MarktplatzBox(props: any){
    const {picture, title, subtitle, price, description, link} = props;

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    // Man muss dann bei navigate sagen "navigate('/verleih', state: {link})"

    return(

        <Box 
            onClick={() => {
                navigate(link, {
                    replace: false,
                });
            }} 
        >
        <Card sx={{ display: "flex", backgroundColor: "rgba(5,10,15,255)" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <p style={{ color:"white" }}>
              <b>{title}</b>
            </p>
            <p style={{ color:"white" }}>
              {subtitle}
            </p>
            <p style={{ color:"white" }}>
              {description}
            </p>
            <p style={{ color:"white" }}>
              Preis: {price}€
            </p>
              <Button
              color="secondary"
                sx={{ marginTop: 1 }}
                fullWidth
                onClick={() => {
                }}
                variant="contained"
              >
                {t("buy")}
              </Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              pt: "2%",
              pr: "2%",
              pb: "2%",
              width: "40%",
            }}
            src={picture}
            alt="poster"
          />
        </Card>
        </Box>

    );

}

export default MarktplatzBox;