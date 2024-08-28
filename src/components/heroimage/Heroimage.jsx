import React from 'react'
import styles from "./hero.module.css"

const Heroimage = () => {
  return (
    <div className={styles.herowrapper}>
         <div className={styles.heroimage}>
         <div className={styles.herotext}>
            <h1 className={styles.heroh1}>Träna med Markella</h1>
            <h3 className={styles.heroh3}>Jag erbjuder omväxlande, roliga pass och garantera att du kommer märka skillnad både psykiskt och mentalt efter varje pass!</h3>
            <h2 className={styles.heroh2}>Kom och prova på nu!</h2>
         </div>
         </div>
    </div>
   
  )
}

export default Heroimage 