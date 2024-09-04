import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { HashLink as Link } from 'react-router-hash-link'

export const Navbar = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
  <section className={`${ scroll ? styles.sticky  : ""}}`}>
      <nav>
        <div>
         <Link to="/" ><img src='/images/logo.png' alt='logo'/> </Link>
        </div>
        <ul className={styles.navlist}>
            <li><Link to="#training">Träning</Link></li>
            <li><Link to="#price">Priser</Link></li>
            <li><Link to="#about">Om mig</Link></li>
            <li><Link to="#contact">Kontakt</Link></li>
        </ul>   
    </nav>
    </section>
    
  )
}
