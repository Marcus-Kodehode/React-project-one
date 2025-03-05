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

  // 📌 Henter lagrede favoritter fra localStorage ved lasting av siden
  useEffect(() => {
    let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // 🔎 Debug: Sjekker hva som faktisk er lagret i localStorage
    console.log("Hentet fra localStorage:", savedFavorites);

    // 📌 Sikrer at vi jobber med en gyldig liste
    if (Array.isArray(savedFavorites) && savedFavorites.includes(id)) {
      setIsFavorite(true);
    }
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

    // 🔎 Debug: Logger oppdatert liste for å verifisere
    console.log("Oppdaterte favoritter:", updatedFavorites);

    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`${styles.dishCard} ${isFavorite ? styles.favorite : ""}`}>
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
      </div>
    </div>
  );
}

export default Dish;
