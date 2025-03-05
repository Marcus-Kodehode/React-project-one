import React, { useState, useEffect } from "react";
import styles from "../assets/ReservationModal.module.css"; // 📌 Importerer CSS
import specialImage from "/images/passpa.webp"; // 📌 Importerer spesialbildet
import bloodAndWine from "../assets/sounds/bloodandwine.mp3"; // 📌 Importerer lydfilen

function ReservationModal({ onClose }) {
  const [name, setName] = useState(""); // 📌 Navneinput state
  const [message, setMessage] = useState(""); // 📌 Melding som vises
  const [showResult, setShowResult] = useState(false); // 📌 Viser resultatet
  const [audio] = useState(new Audio(bloodAndWine)); // 📌 Lydfil-instans

  useEffect(() => {
    if (showResult && name.trim().toLowerCase() === "joakim") {
      audio.loop = true; // 📌 Setter lydfilen til loop
      audio.volume = 1.0; // 📌 Maks volum
      audio.play(); // 📌 Starter avspilling
    }

    return () => {
      audio.pause(); // 📌 Stopper lyden når modalen lukkes
      audio.currentTime = 0; // 📌 Resetter lyden
    };
  }, [showResult, name, audio]);

  const handleConfirm = () => {
    if (name.trim().toLowerCase() === "joakim") {
      setMessage(
        "Joakim… you may still hold the throne, but your time is running out. " +
        "I have walked the same path, studied every step you’ve taken, and soon… I will surpass you. \n\n" +
        "The embers of ambition burn within me, growing stronger with every challenge. " +
        "You were once the master, but even the greatest must one day make way for the next ruler. \n\n" +
        "Enjoy your reign while it lasts… for the tide is shifting. \n\n" +
        '"Greatness is never given – it is taken."'
      );
    } else {
      setMessage("Your reservation has been confirmed. We look forward to welcoming you!");
    }
    setShowResult(true);
  };
  

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {!showResult ? (
          <>
            <h2>Book Reservasjon</h2>
            <p>Vennligst skriv inn navnet ditt for å fortsette:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
              placeholder="Skriv inn navnet ditt..."
            />
            <button onClick={handleConfirm} className={styles.confirmButton}>
              Bekreft
            </button>
          </>
        ) : (
          <>
            <h2>{message}</h2>
            {name.trim().toLowerCase() === "joakim" && (
              <img src={specialImage} alt="Spesiell beskjed" className={styles.specialImage} />
            )}
            <button onClick={onClose} className={styles.closeButton}>
              Lukk
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationModal;
