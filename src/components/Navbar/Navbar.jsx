import React from 'react'
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav>
        <div>
         <img src='/images/logo.png' alt='logo'/> 
        </div>
        <ul>
            <li>Träning</li>
            <li>Priser</li>
            <li>Om mig</li>
            <li>Kontakt</li>
        </ul>
        
    </nav>
  )
}
