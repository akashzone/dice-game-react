import styled from 'styled-components'
import StartGame from './components/StartGame'
import './App.css'
import BeginGame from './components/BeginGame'
import { useState } from 'react'
import { use } from 'react'

function App() {

    const [isGameStarted, setIsGameStarted] = useState(true);

    function handleStartGame() {          
        setIsGameStarted(true);
    }
 return (
  <>
  {
    isGameStarted ? <BeginGame /> : <StartGame onStartGame={handleStartGame} />
  }
  </>
 )
}

export default App
