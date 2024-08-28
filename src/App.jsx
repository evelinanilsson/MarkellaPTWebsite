import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import Heroimage from './components/heroimage/Heroimage'
import Training from './components/Training/Training'
import About from './components/About/About'
import Prices from './components/Price/Prices'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <main>
      <Navbar />
      <Heroimage />
      <div className='content'>
        <Training />
        <About />
        <Prices />
        <Contact />
      </div>
     
    </main>
  )
}

export default App
