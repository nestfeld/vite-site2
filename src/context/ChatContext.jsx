import { createContext, useContext, useState } from 'react';
import { initialMessage, info } from '../components/ChatBotPage/botinfo';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([
        { hideInChat: true, role: 'model', text: info },
        { hideInChat: false, role: 'model', text: initialMessage }
      ]);

  return (
    <ChatContext.Provider value={{ chatHistory, setChatHistory }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
