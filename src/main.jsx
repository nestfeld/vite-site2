import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import DeckProvider from './context/DeckContext.jsx';
import { ChatProvider } from './context/ChatContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DeckProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </DeckProvider>
    </AuthProvider>
  </StrictMode>,
)
