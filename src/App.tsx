// src/App.tsx
import React from 'react'
import { motion } from 'framer-motion'

const App: React.FC = () => {
  return (
    <motion.h1
      className="text-3xl font-bold underline"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Vite + React + Tailwind + TypeScript + Recoil + React Query
    </motion.h1>
  )
}

export default App
