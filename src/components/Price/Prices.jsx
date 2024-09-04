import React from 'react'
import styles from './prices.module.css'

const Prices = () => {
  return (
    <div id="price" className={styles.priceSection}>
      <img src='/images/markella-trains.jfif ' height={500}/>
      <div className={styles.priceWrapper}>
        <h1>Priser</h1>
        <ul className={styles.pricelist}>
          <li>1 månad (10 ggr) : 990 kr (99 kr/pass)</li>
          <li>3 månader (30 ggr): 2 850 kr (95 kr/pass)</li>
          <li>6 månader (60 ggr): 5 400 kr (90 kr/pass)</li>
          <li>Klippkort (10 ggr): 990 kr (99 kr/pass)</li>
          <li>Swish & work out: 99 kr, swish på plats </li>
        </ul>
        <div className={styles.free}>
          <p>Gratis "prova på"-pass</p>
          <p>Ta med en kompis och få ett gratis pass</p>
        </div>
      </div>
      
    </div>
  );
};

export default Prices
