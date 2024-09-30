import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
import { WordContext } from './context/WordContext.js'
import { useState } from 'react'

function App() {

  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState('');
  return (
    <WordContext.Provider value={{ wordList, setWordList, word, setWord }}>
      <Routes>
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </WordContext.Provider>
  )
}

export default App
