// src/components/ChatBubble.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import { isChatOpenState } from '../state/uiState';
import Logo from '../assets/prodegee-logo.svg';

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(isChatOpenState);

  return (
    <motion.button
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center focus:outline-none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      {isOpen ? (
        <span className="text-2xl leading-none">×</span>
      ) : (
        <img src={Logo} alt="Prodegee logo" className="w-8 h-8" />
      )}
    </motion.button>
  );
};

export default ChatBubble;

