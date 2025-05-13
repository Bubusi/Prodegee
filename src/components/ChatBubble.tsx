// src/components/ChatBubble.tsx
import React from 'react'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import { chatBubbleOpenState } from '../state/chatBubbleState'
import Logo from '../assets/prodegee-logo.svg'

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(chatBubbleOpenState)

  return (
    <motion.button
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        border: '1px solid #D1D5DB',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
      aria-pressed={isOpen}
    >
      {isOpen
        ? <span style={{ fontSize: '24px', color: '#4B5563', lineHeight: 1 }}>×</span>
        : <img src={Logo} alt="Prodegee logo" style={{ width: '16px', height: '16px' }} />
      }
    </motion.button>
  )
}

export default ChatBubble

