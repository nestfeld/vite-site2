import Header from '../Header/Header';
import { useRef, useState, useEffect } from 'react';
import './ChatBotPage.css';
import ChatMessage from './ChatMessage';
import sendIco from './send.svg';
import { info, initialMessage } from './botinfo';
import { AnimatePresence } from 'framer-motion';
import { useChat } from '../../context/ChatContext';

const ChatBotPage = () => {
  const {chatHistory, setChatHistory} = useChat();
  const chatBodyRef = useRef();
  const inputRef = useRef();
  const buttonRef = useRef();

  const clearChatHistory = () => {
    setChatHistory([
      { hideInChat: true, role: 'model', text: info },
      { hideInChat: false, role: 'model', text: initialMessage }
    ]);
  };

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [...prev.filter(msg => msg.text !== 'Думает...'), { role: 'model', text }]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    console.log(import.meta.env.VITE_API_URL);
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history })
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || 'Something went wrong');

      const apiResponseText = data.candidates[0].content.parts[0].text.trim();
      updateHistory(apiResponseText);
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      buttonRef.current.click();
    }
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';
    setChatHistory((history) => [...history, { role: 'user', text: userMessage }]);

    setTimeout(() => {
      setChatHistory((history) => [...history, { role: 'model', text: 'Думает...' }]);
      generateBotResponse([...chatHistory, { role: 'user', text: `Используя данные предаставленные выше, пожалуйста ответь на этот вопрос: ${userMessage}` }]);
    }, 600);
  };

  useEffect(() => {
    if (chatBodyRef.current.lastElementChild) {
      chatBodyRef.current.lastElementChild.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Прокручивает к последнему сообщению
      });
    }
  }, [chatHistory]);

  const renderCount = useRef(0);


  return (
    <div className='container'>
      <Header />
      <main className='main-container'>
        <div className='main-wrapper'>
          <section className='chat'>
            <div className='chat--body' ref={chatBodyRef}>
              <AnimatePresence>
                {chatHistory.map((chat, index) => (
                  <ChatMessage key={index} chat={chat} />
                ))}
              </AnimatePresence>
            </div>
            <div className='chat--footer'>
              <form onSubmit={handleMessageSubmit} className='chat--form'>
                <textarea ref={inputRef} placeholder='Сообщение...' className='message-input' onKeyDown={handleKeyDown} required />
                <button className='chat--footer--button' ref={buttonRef} title="Отправить">
                  <img src={sendIco} alt='send' />
                </button>
                <button title="Очистить историю" type="button" className='clear--chat--button' onClick={() => clearChatHistory()}>
                  X
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ChatBotPage;
  