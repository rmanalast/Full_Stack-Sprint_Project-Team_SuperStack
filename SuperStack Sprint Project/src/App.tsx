import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Movies } from './components/Movies/MovieInventory';
import { Games } from './components/Games/GameInventory';

function App() {
  

  return (
    <>
      <Movies/>
      <Games/>
    </>
  )
}

export default App
