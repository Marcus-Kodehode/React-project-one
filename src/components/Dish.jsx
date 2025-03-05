import React, { useState, useEffect } from "react";
import styles from "../assets/Dish.module.css";

// 📌 Definerer allergen-emojis
const allergenIcons = {
  Shellfish: "🦐",
  Fish: "🐟",
  Milk: "🥛",
  Nuts: "🌰",
  Gluten: "🌾",
  Egg: "🍳",
  Mustard: "🌿",
};

function Dish({ id, title, price, ingredients, allergens, image }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // 📌 Styrer popup-vinduet

  // 📌 Henter lagrede favoritter fra localStorage ved lasting av siden
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(savedFavorites.includes(id)); 
  }, [id]);

  // 📌 Funksjon for å legge til/fjerne favoritter
  const toggleFavorite = () => {
    let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!Array.isArray(savedFavorites)) {
      savedFavorites = []; // 📌 Sikrer at det er en array
    }

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = savedFavorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...savedFavorites, id];
    }

    // 📌 Lagre oppdatert favoritt-liste i localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);

    // 📌 Viser pop-up når favoritt legges til/fjernes
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // 📌 Skjuler pop-up etter 2 sekunder
  };

  return (
    <div className={`${styles.dishCard} ${isFavorite ? styles.favoriteDish : ""}`}>
      <img src={image} alt={title} className={styles.dishImage} />
      <div className={styles.dishInfo}>
        <h3 className={styles.dishName}>{title}</h3>
        <p className={styles.dishPrice}><strong>Price:</strong> {price}</p>
        <p className={styles.dishIngredients}><strong>Ingredients:</strong> {ingredients}</p>
        {allergens.length > 0 && (
          <p className={styles.dishAllergens}>
            <strong>Allergens:</strong>{" "}
            {allergens.map((allergen) => `${allergenIcons[allergen] || ""} ${allergen}`).join(", ")}
          </p>
        )}

        {/* 📌 Favoritt-knapp */}
        <button 
          onClick={toggleFavorite} 
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ""}`}
        >
          {isFavorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
        </button>

        {/* 📌 Pop-up melding for favoritt */}
        {showPopup && (
          <div className={styles.popup}>
            {isFavorite ? "Added to Favorites! ❤️" : "Removed from Favorites! 🤍"}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dish;
