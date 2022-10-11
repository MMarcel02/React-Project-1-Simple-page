import { useState } from 'react'
import './App.css'
import NavBar from "./components/Navbar"
import MainContent from './components/MainContent'

function App () {
  return (
    <div className='container'>
      <NavBar />
      <MainContent />
    </div>
  )
}

export default App
