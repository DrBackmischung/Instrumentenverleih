
import './styles/ThankYou.scss';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from '@mui/material';

function ThankYou(){

    const navigate = useNavigate();

    const { t, i18n } = useTranslation();
    
    var count = 200;

    var defaults = {
    origin: { y: 0.7 }
    };

    function fire(particleRatio: any, opts: any) {
        // @ts-ignore:next-line
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

    return(
        <Container sx={{margin: "20px"}}>
            <h2 className='home-header'>{t("success_header")}</h2>
        </Container>
    )
}

export default ThankYou;