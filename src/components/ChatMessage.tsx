import React, { useState } from "react";
import "./styles/ChatMessage.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ChatMessage(props: any) {
  const {
    message,
    align,
    link,
  } = props;
  const [messageCss] = useState(`messageContainer${align}`);

  const { t, i18n } = useTranslation();

  return (
    <div className={messageCss}>
      <p className="messageText">{`${message} `}</p>
      {link === undefined ? null : (
        <a className="myHyperLink" href={link}>
          {t("chatbot_5")}
        </a>
      )}
    </div>
  );
}

export default ChatMessage;