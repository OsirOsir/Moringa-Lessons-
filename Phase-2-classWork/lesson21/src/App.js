import React, { useState } from 'react'
import './App.css'

function App() {

  const [increment, setIncrement] = useState(0) 
  const [decrement, setDecrement] = useState(0)

   function handleincreament() {
    setIncrement(prevValue => prevValue + 1)
   }

  return (
    <div>
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  )
}

export default App