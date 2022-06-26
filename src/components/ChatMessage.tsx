import React, { useState } from "react";
import "./styles/ChatMessage.scss";
import { useNavigate } from "react-router-dom";

function ChatMessage(props: any) {
  const {
    message,
    align,
    link,
  } = props;
  const [messageCss] = useState(`messageContainer${align}`);

  return (
    <div className={messageCss}>
      <p className="messageText">{`${message} `}</p>
      {link === undefined ? null : (
        <a className="myHyperLink" href={link}>
          Klick mich!
        </a>
      )}
    </div>
  );
}

export default ChatMessage;