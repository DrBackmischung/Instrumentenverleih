import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./styles/FooterBar.scss"

function FooterBar() {

    const { t, i18n } = useTranslation();

    return (
        <div className="impressum">
            <p className="impressum-text">
                <Box 
                    sx={{
                    justifyContent: "space-evenly",
                    flexGrow: 1,
                    display: { xs: "flex" },
                    }}
                >
                    <div>
                        <a href="www.google.de" className="impressum">{t("footer_impressum")}</a> | <a href="www.google.de" className="impressum">{t("footer_contact")}</a> | <a href="www.google.de" className="impressum">Facebook</a> | <a href="www.google.de" className="impressum">Instagram</a>
                    </div>
                    <div>
                        <a className="impressum" onClick={() => {i18n.changeLanguage("de")}}>DE</a> | <a className="impressum" onClick={() => {i18n.changeLanguage("en")}}>EN</a>
                    </div>
                </Box>
            </p>
        </div>    
    )

}

export default FooterBar;