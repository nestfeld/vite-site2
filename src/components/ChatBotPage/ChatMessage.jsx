import React from 'react'
import robotIco from "./robo.svg"
import Markdown from 'react-markdown';
import { motion } from "framer-motion";


const ChatMessage = ({chat}) => {
  return (
    !chat.hideInChat && (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5}}
    >
      <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
        {chat.role === "model" && <img src={robotIco} className='bot-ico' />}
        <div className='message-text'><Markdown>{chat.text}</Markdown></div>
      </div>
    </motion.div>
    )
  )
}

export default ChatMessage