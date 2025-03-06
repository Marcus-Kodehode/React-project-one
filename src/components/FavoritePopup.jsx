import React from "react";
import styles from "../assets/FavoritePopup.module.css"; // 📌 Importerer stilark for popup-komponenten

// 📌 Komponent for favoritt-popup
function FavoritePopup({ message, isVisible }) {
  if (!isVisible) return null; // 📌 Hvis `isVisible` er `false`, returnerer null og viser ingenting

  return (
    <div className={styles.popup}> {/* 📌 Popup-container med styling */}
      <p>{message}</p> {/* 📌 Viser popup-meldingen dynamisk basert på `message`-prop */}
    </div>
  );
}

export default FavoritePopup; // 📌 Eksporterer komponenten for bruk i andre filer
