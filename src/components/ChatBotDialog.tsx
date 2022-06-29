import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    ThemeProvider,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import "./styles/ChatBotDialog.scss";
  import ChatMessage from "./ChatMessage";
import { useTranslation } from "react-i18next";
import axios from 'axios'
  
  const welcomeMessage = [
    {
      message: "Hi! Ich bin Inga das Instrument! :)",
      align: "Left",
    },
    {
      message: "Frag mich alles, was du willst. Wenn du Hilfe brauchst, dich für ein Instrument zu entscheiden: Probiere diesen Test!",
      link: "https://www.thomann.de/blog/de/test-welches-neue-instrument-sollte-ich-spielen/",
      align: "Left",
    },
  ];
  
  function ChatBotDialog(props: any) {

    const [ip, setIP] = useState('');

    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      setIP(res.data.IPv4)
    }

    const { open, handleClose } = props;
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState(welcomeMessage);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(200);
    const APIUrlChat = `http://localhost:9000/query`;

    const { t, i18n } = useTranslation();
  
    useEffect( () => {
      //passing getData method to the lifecycle method
      getData()
  
    }, [])

    console.log(ip);
  
    const sendMessageToChatBot = async (userMessage: any) => {
      setLoading(true);
      const messageToFetch = userMessage.replace(" ", "_");
      const response = await fetch(`${APIUrlChat}/${ip}/${messageToFetch}`);
      if (!response.ok) {
        setError(response.status);
        return;
      }
      const data = await response.json();
      switch (data?.type) {
        case "STRING":
          setMessages((prevVal) => [
            ...prevVal,
            {
              message: `${data.content}`,
              align: "Left",
            },
          ]);
          break;
        case "LINK":
          console.log(data.content);
          setMessages((prevVal) => [
            ...prevVal,
            {
              message: `${t("chatbot_4")}`,
              align: "Left",
              link: `${data.content}`,
            },
          ]);
          break;
      }
      setLoading(false);
    };
  
    const sendUserMessage = () => {
      if (userInput.length > 1) {
        setMessages((prevVal) => [
          ...prevVal,
          { message: userInput, align: "Right" },
        ]);
        sendMessageToChatBot(userInput);
        setUserInput("");
      }
    };
    const sendUserMessageKey = (e: any) => {
      if (e?.key === "Enter") {
        sendUserMessage();
      }
    };
    const sendUserMessageButton = () => {
      sendUserMessage();
    };
    const onClosePressed = () => {
      handleClose();
    };
    if (error !== 200) {
      return (
          <Dialog
            open={open}
            onClose={handleClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth={true}
            maxWidth="sm"
            style={{
              color: "rgba(5,10,15,255)"
            }}
            PaperProps={{
              style: {
                backgroundColor: "rgba(14,20,32,255)",
                boxShadow: "none"
              },
            }}
          >
            <DialogTitle id="scroll-dialog-title">Inga Instrument</DialogTitle>
            <DialogContent dividers={true}>
              <DialogContentText id="scroll-dialog-description">
                <p>Error</p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClosePressed}>X</Button>
            </DialogActions>
          </Dialog>
      );
    }
    return (
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth={true}
          maxWidth="sm"
          style={{
            color: "rgba(5,10,15,255)"
          }}
          PaperProps={{
            style: {
              backgroundColor: "rgba(14,20,32,255)",
              boxShadow: "none"
            },
          }}
        >
          <DialogTitle id="scroll-dialog-title" style={{color: "white"}}>Inga Instrument</DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText id="scroll-dialog-description">
              <div className="chatBox">
                <div className="chatBoxInner">
                  {messages?.map((item: any) => (
                    <ChatMessage
                      align={item.align}
                      message={item.message}
                      navigateTo={item.navigateTo}
                      navigateState={item.navigateState}
                      handleDialogClose={handleClose}
                      link={item.link}
                      movieList={item.movieList}
                      showList={item.showList}
                      userData={item.userData}
                    />
                  ))}
                </div>
              </div>
              <br />
              <div className="userInput">

                <TextField
                  id="userText"
                  variant="outlined"
                  label={t("chatbot_3")}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  fullWidth
                  onKeyPress={(e) => sendUserMessageKey(e)}
                  disabled={loading}
                />
                <Button
                  color="secondary"
                  fullWidth
                  id="sendButton"
                  variant="contained"
                  onClick={sendUserMessageButton}
                >
                  Enter
                </Button>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={onClosePressed}>X</Button>
          </DialogActions>
        </Dialog>
    );
  }
  
  export default ChatBotDialog;