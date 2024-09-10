import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'

function App() {

  return (
      <Routes>
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        <Route path='/' element={<div>Home</div>} />
      </Routes>
  )
}

export default App
