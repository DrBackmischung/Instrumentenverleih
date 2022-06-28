import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'de',
    fallbackLng: 'de',
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
          menu_home: "Home",
          menu_rent: "Rental",
          menu_market: "Marketplace",
          menu_service: "Service Portal",
          rental_header: "Our available instruments",
          rental_rent_loggedIn: "rent",
          rental_rent_notLoggedIn: "login to rent",
          rental_rent_sound_sample: "Sound sample: ",
          rental_rent_highlight_header: "That's why we recommend this product",
          rental_rent_highlight_overview: "The advantages at a glance",
          market_header: "Marketplace",

          success_header: "Thank you for your order!",

          footer_contact: "Contact",
          footer_impressum: "Impressum",

          chatbot_1: "Hi! I am Inga the instrument! :)",
          chatbot_2: "Just ask me anything. If you can not choose which instrument to play, just have a look at this test:",
          chatbot_3: "Message for Inga Instrument...",
          chatbot_4: "I have found this for you:",
          chatbot_5: "Click me!",

          buy: "Buy",
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
          menu_home: "Home",
          menu_rent: "Ausleihe",
          menu_market: "Marktplatz",
          menu_service: "Serviceportal",
          rental_header: "Unsere ausleihbaren Instrumente",
          rental_rent_loggedIn: "Ausleihen",
          rental_rent_notLoggedIn: "Zum Ausleihen einloggen",
          rental_rent_sound_sample: "Soundbeispiel: ",
          rental_rent_highlight_header: "Darum empfehlen wir dieses Produkt",
          rental_rent_highlight_overview: "Die Vorteile im Überblick",
          market_header: "Marktplatz",

          success_header: "Danke für deine Bestellung!",

          footer_contact: "Kontakt",
          footer_impressum: "Impressum",

          chatbot_1: "Hi! Ich bin Inga das Instrument! :)",
          chatbot_2: "Frag mich alles, was du willst. Wenn du Hilfe brauchst, dich für ein Instrument zu entscheiden: Probiere diesen Test!",
          chatbot_3: "Nachricht für Inga Instrument...",
          chatbot_4: "Ich habe das für dich gefunden:",
          chatbot_5: "Klick mich!",

          buy: "Kaufen",
        }
      }
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;