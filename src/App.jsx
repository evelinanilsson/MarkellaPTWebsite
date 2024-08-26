import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import Heroimage from './components/heroimage/Heroimage'

function App() {


  return (
    <main>
      <Navbar />
      <Heroimage />
    </main>
  )
}

export default App
