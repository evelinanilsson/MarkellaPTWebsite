import React from 'react'
import styles from "./hero.module.css"

const Heroimage = () => {
  return (
    <div className={styles.herowrapper}>
         <div className={styles.heroimage}>
         <div className={styles.herotext}>
            <h1>Träna med Markella</h1>
         </div>
         </div>
    </div>
   
  )
}

export default Heroimage