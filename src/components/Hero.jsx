import React, { useState } from "react";
import styles from "../assets/Hero.module.css"; // 📌 Importerer stilark for Hero-seksjonen
import ReservationModal from "./ReservationModal"; // 📌 Importerer pop-up komponenten for reservasjoner

// 📌 Hero-komponent som introduserer restauranten
function Hero() {
  const [showModal, setShowModal] = useState(false); // 📌 State for å styre synligheten av pop-up

  return (
    <section className={styles.hero}> {/* 📌 Hovedcontainer for Hero-seksjonen */}
      <div className={styles.heroOverlay}> {/* 📌 Overlay for bedre lesbarhet over bakgrunnsbildet */}
        
        {/* 📌 Tekstinnhold i Hero-seksjonen */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Opplev Nordlys Gastronomi</h1> {/* 📌 Hovedtittel */}
          
          {/* 📌 Introduksjonstekst på norsk */}
          <p className={styles.heroText}>
            Velkommen til <strong>Nordlys Gastronomi</strong>, hvor vi kombinerer eksklusive råvarer med moderne teknikker
            for å skape en uforglemmelig matopplevelse. Nyt smakene av det nordiske kjøkken, raffinert og elegant servert i en varm atmosfære.
          </p>

          {/* 📌 Introduksjonstekst på engelsk */}
          <p className={styles.heroText}>
            <strong>Welcome to Nordlys Gastronomi</strong> – where we blend exclusive ingredients with modern techniques 
            to create an unforgettable dining experience. Enjoy the refined and elegant flavors of Nordic cuisine in a warm and inviting setting.
          </p>

          {/* 📌 Knapp for å åpne reservasjonspop-up */}
          <button className={styles.heroButton} onClick={() => setShowModal(true)}>
            Book Reservation Here
          </button>
        </div>
      </div>

      {/* 📌 Viser pop-up for reservasjon hvis `showModal` er `true` */}
      {showModal && <ReservationModal onClose={() => setShowModal(false)} />}
    </section>
  );
}

export default Hero; // 📌 Eksporterer Hero-komponenten for bruk i andre filer
