import React from "react";
import styles from "../assets/FavoritePopup.module.css"; // 📌 Importerer CSS

function FavoritePopup({ message, isVisible }) {
  if (!isVisible) return null; // 📌 Hvis ikke synlig, vises ingenting

  return (
    <div className={styles.popup}>
      <p>{message}</p>
    </div>
  );
}

export default FavoritePopup;
