import React, { useState, useEffect } from "react";
import styles from "../assets/ReservationModal.module.css"; // 📌 Importerer CSS for pop-up
import joakimImage from "/images/passpa.webp"; // 📌 Bilde for Joakim
import michaelImage from "/images/michael.webp"; // 📌 Bilde for Michael
import bloodAndWine from "../assets/sounds/bloodandwine.mp3"; // 📌 Lydfil for spesielle navn

function ReservationModal({ onClose }) {
  const [name, setName] = useState(""); // 📌 State for navneinput
  const [message, setMessage] = useState(""); // 📌 State for beskjeden som vises
  const [image, setImage] = useState(null); // 📌 State for bildet
  const [showResult, setShowResult] = useState(false); // 📌 State for å vise resultatet
  const [audio] = useState(new Audio(bloodAndWine)); // 📌 Initialiserer lydfilen

  useEffect(() => {
    if (showResult && (name.trim().toLowerCase() === "joakim" || name.trim().toLowerCase() === "michael")) {
      audio.loop = true;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; // 📌 Tilbakestiller lyd slik at den starter på nytt neste gang
    }
    
    // 📌 Stopper lyden når popup lukkes
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [showResult, name, audio]);

  const handleConfirm = () => {
    const lowercaseName = name.trim().toLowerCase();

    if (lowercaseName === "joakim") {
      setMessage(
        "Joakim... you may still hold the throne, but your time is running out. " +
        "I have walked the same path, studied every step you've taken, and soon... I will surpass you. " +
        "The embers of ambition burn within me, growing stronger with every challenge. " +
        "You were once the master, but even the greatest must one day make way for the next ruler. " +
        "Enjoy your reign while it lasts... for the tide is shifting. 'Greatness is never given – it is taken.'"
      );
      setImage(joakimImage);
    } else if (lowercaseName === "michael") {
      setMessage(
        "Michael, you are the kind of legend people don’t just remember—they cherish. " +
        "You have walked your own path, never seeking a throne, yet still, you stand as a leader among friends, " +
        "a guide through both challenge and triumph. Your strength isn’t in conquest but in connection; " +
        "your victories aren’t in battles won but in the lives you’ve brightened. " +
        "So take a seat, enjoy the view—you’ve earned it. " +
        "Whatever comes next, there’s one thing for certain: The world is better with you in it. " +
        "'True greatness isn’t measured in power, but in the laughter you share, " +
        "the wisdom you give, and the lives you make better just by being you.'"
      );
      setImage(michaelImage);
    } else {
      setMessage("Your reservation has been registered. We look forward to seeing you!");
      setImage(null);
    }

    setShowResult(true);
  };

  const handleClose = () => {
    audio.pause();
    audio.currentTime = 0; // 📌 Sikrer at lyden stopper og resettes
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {!showResult ? (
          <>
            <h2>Book Reservation</h2>
            <p>Please enter your name to proceed:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
              placeholder="Enter your name..."
            />
            <button onClick={handleConfirm} className={styles.confirmButton}>
              Confirm
            </button>
          </>
        ) : (
          <>
            <p className={styles.messageText}>{message}</p>
            {image && <img src={image} alt="Special Image" className={styles.specialImage} />}
            <button onClick={handleClose} className={styles.closeButton}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationModal;
