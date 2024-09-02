import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div>
        <h1>Din tränare</h1>
        <p>Hej! ​Vad roligt att se dig på min sida! :)</p>
        <p>Mitt namn är Markella Bampasi och det jag som kommer vara din tränare. Jag är fysioterapeut och när jag inte håller pass arbetar jag på Neurokirurgen i Lund.</p>
        <p>Som fysioterapeut har jag en passion för att guida människor mot ett hälsosammare liv. Alla är unika, och alla har sina individuella styrkor och begränsningar. Jag har förstått att en av de viktigaste nycklarna för att må bra är träning. Det hjälper både fysiskt och psykiskt.</p>
        <p>Men det måste vara träning som man tycker om! Jag erbjuder omväxlande, roliga pass och kan garantera att du kommer att märka skillnad båda fysiskt och mentalt efter varje pass.</p>
        <p>Jag gillar: träning, katter, trädgårdar, blommor och havet (då jag är från Grekland)​.</p>
      </div>
      <div>
        <img src='/images/markella.jfif' height={"400px"}></img>
       
      </div>
      
      
    </div>
  )
}

export default About
