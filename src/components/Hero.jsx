import React from "react";
import styles from "../assets/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Opplev Nordlys Gastronomi</h1>
          <p className={styles.heroText}>
            Velkommen til <strong>Nordlys Gastronomi</strong> - hvor vi kombinerer eksklusive råvarer med moderne teknikker
            for å skape en uforglemmelig matopplevelse. Nyt smakene av det nordiske kjøkken, raffinert og elegant servert i en varm atmosfære.
          </p>
          <p className={styles.heroText}>
            <strong>Welcome to Nordlys Gastronomi</strong> – where we blend exclusive ingredients with modern techniques 
            to create an unforgettable dining experience. Enjoy the refined and elegant flavors of Nordic cuisine in a warm and inviting setting.
          </p>
          <button className={styles.heroButton}>Book reservation here</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
