import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'de',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          home_1: "You can rent your instrument here. You can choose out of a variety of instruments to enhance your skills! If you go to a local music school, you can find all the used instruments here on this website!",
          home_2: "Do you want to buy an instrument or sell an old one? Then you should check out our Marketplace - or even create an offer to sell your instrument!",
          home_3: "If you need a repair or other kinds of services, visit our service portal. We are glad to offer you the best service!",
          home_1aria: "Rental. Press Enter to rent an instrument.",
          home_2aria: "Marketplace. Press Enter to visit the marketplace.",
          home_3aria: "Service Portal. Press Enter to visit the service portal.",
        }
      },
      de: {
        translation: {
          home_1: "Leihen Sie hier Ihre Instrumente aus! Wählen Sie aus einer Vielzahl an verschiedenen Instrumenten, um Ihre Fähigkeiten zu verbessern. Sollten Sie eine unterstützte Musikschule besuchen, finden Sie hier die dort verwendeten Instrumente.",
          home_2: "Wollen Sie ein Instrument kaufen oder ein altes von Ihnen verkaufen? Schauen Sie sich auf dem Marktplatz um - oder stellen Sie Ihr eigenes Angebot ein!",
          home_3: "Brauchen Sie eine Reperatur oder muss Ihr Instrument gestimmt werden? Wir bieten Ihnen dafür den geeigneten Service an! Schauen Sie sich doch in unserem Service-Portal um, damit Ihr Anliegen gehört werden kann.",
          home_1aria: "Ausleihe. Drücken Sie Enter, um ein Instrument auszuleihen.",
          home_2aria: "Marktplatz. Drücken Sie Enter, um den Markplatz zu betreten.",
          home_3aria: "Serviceportal. Drücken Sie Enter, um das Serviceportal zu betreten.",

        }
      }
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;