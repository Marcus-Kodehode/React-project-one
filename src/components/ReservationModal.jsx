import React, { useState, useEffect } from "react";
import styles from "../assets/ReservationModal.module.css"; // 📌 Importerer CSS
import joakimImage from "/images/passpa.webp"; // 📌 Joakim sitt bilde
import michaelImage from "/images/michael.webp"; // 📌 Michael sitt bilde
import syliviaImage from "/images/special.webp"; // 📌 Sylivia sitt bilde
import bloodAndWine from "../assets/sounds/bloodandwine.mp3"; // 📌 Lyd for Joakim og Michael
import specialSound from "../assets/sounds/special.mp3"; // 📌 Lyd for Sylivia

function ReservationModal({ onClose }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  const handleConfirm = () => {
    const trimmedName = name.trim().toLowerCase();
    let newMessage = "Reservasjonen er registrert. Vi gleder oss til å se deg!";
    let newImage = null;
    let newAudio = null;

    if (trimmedName === "joakim") {
      newMessage =
        "Joakim... you may still hold the throne, but your time is running out. I have walked the same path, studied every step you’ve taken, and soon... I will surpass you. The embers of ambition burn within me, growing stronger with every challenge. You were once the master, but even the greatest must one day make way for the next ruler. Enjoy your reign while it lasts... for the tide is shifting. 'Greatness is never given – it is taken.'";
      newImage = joakimImage;
      newAudio = new Audio(bloodAndWine);
    } else if (trimmedName === "michael") {
      newMessage =
        "Michael, some lead with power, others with wisdom. But you, Michael, are the kind of legend people don’t just remember—they cherish. You have walked your own path, never seeking a throne, yet still, you stand as a leader among friends, a guide through both challenge and triumph. Your strength isn’t in conquest but in connection; your victories aren’t in battles won but in the lives you’ve brightened. So take a seat, enjoy the view—you’ve earned it. Whatever comes next, there’s one thing for certain: The world is better with you in it. 'True greatness isn’t measured in power, but in the laughter you share, the wisdom you give, and the lives you make better just by being you.'";
      newImage = michaelImage;
      newAudio = new Audio(bloodAndWine);
    } else if (trimmedName === "sylivia") {
      newMessage =
        "Sylivia, some shine like the sun, but you, you are the warm light in a cold night, the golden glow in a room full of shadows. Every step you take is a dance, every word you speak is a melody, and those lucky enough to stand beside you know they are witnessing something rare – something truly beautiful. In this grand ballroom of life, you do not just walk; you float. You do not just speak; you enchant. And just as the stars gather in admiration of the moon, so do people gather in admiration of you. Take your seat, let the music play, and know that wherever you are, the world is brighter because of it. 'Love is not found in grand gestures, but in the quiet moments where two souls truly see each other.'";
      newImage = syliviaImage;
      newAudio = new Audio(specialSound);
    }

    if (newAudio) {
      newAudio.loop = true;
      newAudio.play();
      setAudio(newAudio);
    }

    setMessage(newMessage);
    setImage(newImage);
    setShowResult(true);
  };

  const handleClose = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    onClose();
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
            <p className={styles.specialMessage}>{message}</p>
            {image && <img src={image} alt="Special" className={styles.specialImage} />}
            <button onClick={handleClose} className={styles.closeButton}>
              Lukk
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationModal;
