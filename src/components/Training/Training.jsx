import React from 'react'
import styles from './training.module.css'

const Training = () => {
  return (
    <div>
      <h1>Träningspass</h1>
      <div className={styles.trainingContainer}>
      <div className={styles.trainingCard}>
        <h3>Träna med Markella</h3>
        <p>
        Varierad gruppträning utomhus för att förbättra din styrka, kondition, balans och rörlighet. Passar dig mellan 18 och 60.
        </p>
        <div className={styles.locationContainer}>
            <div className={styles.locationDiv}>
                <p><span><img src='./alternate-map-marker.svg' height={20} /></span> Malmö, Pildammsparken:</p>
                <p><span><img src='./alternate-calendar.svg' height={20} /></span> Måndagar och onsdagar: 18:15 - 19:15</p>
                <p className='underlined'>Start 26/8</p>
            </div>
           
            <div className={styles.locationDiv}>
                <p><span><img src='./alternate-map-marker.svg' height={20} /></span> Lund, Skulpturparken:</p>
                <p><span><img src='./alternate-calendar.svg' height={20} /></span> Tisdagar: 17:00 - 18:00</p>
                <p className='underlined'>Start 3/9</p>
            </div>
        </div>
       
        <p className='cursive'>Ta med träningsmatta och vatten.</p>
      </div>
      <div className={styles.trainingCard}>
        <h3>Träna med Markella, senior</h3>
        <p>
        Varierad gruppträning utomhus för att förbättra din styrka, kondition, balans och rörlighet. Passar dig över 60.
        </p>
        <p><span><img src='./alternate-map-marker.svg' height={20} /></span> Malmö, Pildammsparken:</p>
        <p><span><img src='./alternate-calendar.svg' height={20} /></span> Måndagar och onsdagar: 17:10 - 18:10</p>
        <p className='underlined'>Start 26/8</p>
      </div>
      <div className={styles.trainingCard}>
        <h3>Träna med Markella, sittgympa</h3>
        <p>
        Sittande inomhus träning för äldre. Enligt överenskommelse.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Training
