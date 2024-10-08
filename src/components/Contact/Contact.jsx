import {useRef} from 'react'
import styles from './contact.module.css'


//email js tutorial
// https://www.youtube.com/watch?app=desktop&v=I4DKr1JLC50
const Contact = () => {
  const form = useRef()

  const sendEmail = () => {};
  return (
    <section id="contact" className={styles.contactSection}>
      
      <div className={styles.contactContainer}>
        <div className={styles.contactDiv}>
        <h2>Kontakta mig</h2>
        <p>
          <span>
            <img
              src="/alternate-phone.svg"
              height={20}
              style={{ paddingRight: "10px" }}
            ></img>
          </span>
          073-681 79 11
        </p>
        <p>
          <span>
            <img
              src="/envelope.svg"
              height={20}
              style={{ paddingRight: "10px" }}
            ></img>
          </span>
          info@markella.se
        </p>
        <p>För anmälningar eller frågor skicka mail till info@markella.se </p>
        </div>
        <div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            type="text"
            placeholder="Förnamn"
            name="forename"
            required
          ></input>
          <input
            type="text"
            placeholder="Efternamn"
            name="lastname"
            required
          ></input>
          <input type="email" placeholder="Email" name="email" required></input>
          <textarea
            type="text"
            placeholder="Meddelande"
            name="message"
            cols={10}
            rows={5}
          ></textarea>
          <button type="submit">Skicka</button>
        </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
