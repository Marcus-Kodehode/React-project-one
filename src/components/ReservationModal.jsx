import React, { useState, useEffect } from "react";
import styles from "../assets/ReservationModal.module.css"; // 📌 Importerer CSS for modal-styling
import joakimImage from "/images/passpa.webp"; // 📌 Importerer bilde av Joakim
import michaelImage from "/images/michael.webp"; // 📌 Importerer bilde av Michael
import syliviaImage from "/images/special.webp"; // 📌 Importerer bilde av Sylivia
import bloodAndWine from "../assets/sounds/bloodandwine.mp3"; // 📌 Lyd som brukes for Joakim og Michael
import specialSound from "../assets/sounds/special.mp3"; // 📌 Lyd som brukes for Sylivia

// 📌 Komponent for reservasjonspop-up
function ReservationModal({ onClose }) {
  const [name, setName] = useState(""); // 📌 Holder på brukerens navn
  const [message, setMessage] = useState(""); // 📌 Meldingen som vises etter bekreftelse
  const [showResult, setShowResult] = useState(false); // 📌 Styrer visningen av resultatet
  const [image, setImage] = useState(null); // 📌 Holder på hvilket bilde som skal vises
  const [audio, setAudio] = useState(null); // 📌 Holder på hvilket lydklipp som skal spilles

  // 📌 Rydder opp lyden når komponenten fjernes fra DOM
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0; // 📌 Resetter lydsporet
      }
    };
  }, [audio]); // 📌 Kjøres kun når `audio` endres

  // 📌 Håndterer bekreftelse av reservasjon
  const handleConfirm = () => {
    const trimmedName = name.trim().toLowerCase(); // 📌 Fjerner mellomrom og gjør navnet til små bokstaver
    let newMessage = "Reservasjonen er registrert. Vi gleder oss til å se deg!"; // 📌 Standard melding
    let newImage = null; // 📌 Standard bildeverdi
    let newAudio = null; // 📌 Standard lydverdi

    // 📌 Tilpasset melding, bilde og lyd for spesifikke navn
    if (trimmedName === "joakim") {
      newMessage =
        "Joakim... you may still hold the throne, but your time is running out. I have walked the same path, studied every step you’ve taken, and soon... I will surpass you...";
      newImage = joakimImage;
      newAudio = new Audio(bloodAndWine);
    } else if (trimmedName === "michael") {
      newMessage =
        "Michael, some lead with power, others with wisdom. But you, Michael, are the kind of legend people don’t just remember—they cherish...";
      newImage = michaelImage;
      newAudio = new Audio(bloodAndWine);
    } else if (trimmedName === "sylivia") {
      newMessage =
        "Sylivia, some shine like the sun, but you, you are the warm light in a cold night, the golden glow in a room full of shadows...";
      newImage = syliviaImage;
      newAudio = new Audio(specialSound);
    }

    // 📌 Spiller av valgt lyd hvis det finnes en
    if (newAudio) {
      newAudio.loop = true; // 📌 Setter lyden til å loope
      newAudio.play(); // 📌 Starter avspilling
      setAudio(newAudio); // 📌 Lagrer lyd i state
    }

    setMessage(newMessage); // 📌 Oppdaterer meldingen
    setImage(newImage); // 📌 Oppdaterer bildet
    setShowResult(true); // 📌 Viser resultatdelen av modalen
  };

  // 📌 Håndterer lukking av modalen og stopper lyden
  const handleClose = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // 📌 Stopper og tilbakestiller lyd
    }
    onClose(); // 📌 Lukker modalen
  };

  return (
    <div className={styles.modalOverlay}> {/* 📌 Overlay som dekker hele skjermen */}
      <div className={styles.modalContent}> {/* 📌 Selve pop-up-boksen */}
        {!showResult ? ( // 📌 Viser inputfeltet hvis reservasjonen ikke er bekreftet
          <>
            <h2>Book Reservasjon</h2> {/* 📌 Overskrift */}
            <p>Vennligst skriv inn navnet ditt for å fortsette:</p> {/* 📌 Instruksjon */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // 📌 Oppdaterer `name` state
              className={styles.inputField}
              placeholder="Skriv inn navnet ditt..."
            />
            <button onClick={handleConfirm} className={styles.confirmButton}>
              Bekreft
            </button>
          </>
        ) : ( // 📌 Viser resultatet etter bekreftelse
          <>
            <p className={styles.specialMessage}>{message}</p> {/* 📌 Viser tilpasset melding */}
            {image && <img src={image} alt="Special" className={styles.specialImage} />} {/* 📌 Viser bilde hvis det finnes */}
            <button onClick={handleClose} className={styles.closeButton}>
              Lukk
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationModal; // 📌 Eksporterer komponenten for bruk i andre filer
