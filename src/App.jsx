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
        <div>
          <h1>Vill du komma igång med träning?</h1>
          <p>Här hittar du omväxlande, roliga pass som är anpassningsbar till din nivå i form av gruppträning utomhus. Du har en legitimerad fysioterapeut som din tränare.</p>
          <p>.</p>
          <div className='images'>
            <img src='images/happy-group.jfif'></img>
            <img src='images/lake-view.jpg'></img>
            <img src='images/pushups.jfif'></img>
          </div>
        </div>
        
        <Training />
       
        <Prices />
        <About />
        <Contact />
      </div>
     
    </main>
  )
}

export default App
