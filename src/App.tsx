// src/App.tsx
import React from 'react'
import ChatBubble from './components/ChatBubble'

const App: React.FC = () => {
  console.log('App rendered—ChatBubble should mount below:')
  return (
    <div>
      <p>Hello from App!</p>
      <ChatBubble />
    </div>
  )
}

export default App
