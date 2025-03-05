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
  // 📌 Henter favoritter fra localStorage når komponenten laster
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // 📌 Sjekker om retten er favoritt
  const isFavorite = favorites.includes(id);

  // 📌 Håndterer klikk på favoritt-knappen
  const toggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // 📌 Lagrer i localStorage
  };

  return (
    <div className={styles.dishCard}> {/* 📌 Hovedcontainer for retten */}
      <img src={image} alt={title} className={styles.dishImage} /> {/* 📌 Bilde av retten */}
      <div className={styles.dishInfo}>
        <h3 className={styles.dishName}>{title}</h3>
        <p className={styles.dishPrice}><strong>Price:</strong> {price}</p>
        <p className={styles.dishIngredients}><strong>Ingredients:</strong> {ingredients}</p>
        {allergens.length > 0 && (
          <p className={styles.dishAllergens}>
            <strong>Allergens:</strong>{" "}
            {allergens.map(allergen => `${allergenIcons[allergen] || ""} ${allergen}`).join(", ")}
          </p>
        )}

        {/* 📌 Favoritt-knapp */}
        <button 
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ""}`} 
          onClick={toggleFavorite}
        >
          {isFavorite ? "❤️ Favoritt" : "🤍 Legg til favoritt"}
        </button>
      </div>
    </div>
  );
}

export default Dish;

