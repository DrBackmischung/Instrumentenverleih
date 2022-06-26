import React, { useState } from "react";
import { Button } from "@mui/material";
import "./styles/ChatBot.scss";
import ChatBotDialog from "./ChatBotDialog";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const onButtonPressed = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="wholeContainer">
      <Button variant="contained" onClick={onButtonPressed} id="chatBot-Button" color="secondary">
        ChatBot
      </Button>
      <ChatBotDialog
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default ChatBot;