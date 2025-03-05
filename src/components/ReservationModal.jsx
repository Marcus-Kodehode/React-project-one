import React, { useState } from "react";
import styles from "../assets/ReservationModal.module.css"; // 📌 Importerer CSS for pop-up
import specialImage from "../assets/images/passpa.webp"; // 📌 Importerer det spesielle bildet

function ReservationModal({ onClose }) {
  const [name, setName] = useState(""); // 📌 State for navneinput
  const [message, setMessage] = useState(""); // 📌 State for beskjeden som vises
  const [showResult, setShowResult] = useState(false); // 📌 State for å vise resultatet

  const handleConfirm = () => {
    if (name.trim().toLowerCase() === "joakim") {
      setMessage("Du har bestått testen. Velkommen, mester Joakim!");
    } else {
      setMessage("Reservasjonen er registrert. Vi gleder oss til å se deg!");
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
