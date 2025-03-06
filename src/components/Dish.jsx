import React, { useState, useEffect } from "react";
import styles from "../assets/Dish.module.css";

// 📌 Definerer allergen-emojis for å gjøre allergener mer visuelle
const allergenIcons = {
  Shellfish: "🦐",
  Fish: "🐟",
  Milk: "🥛",
  Nuts: "🌰",
  Gluten: "🌾",
  Egg: "🍳",
  Mustard: "🌿",
};

// 📌 Komponent for å vise en enkelt rett
function Dish({ id, title, price, ingredients, allergens, image }) {
  const [isFavorite, setIsFavorite] = useState(false); // 📌 State for å spore favorittstatus
  const [showPopup, setShowPopup] = useState(false); // 📌 State for å kontrollere popup-visning

  // 📌 Henter lagrede favoritter fra localStorage når komponenten lastes
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(savedFavorites.includes(id)); // 📌 Sjekker om retten er en favoritt
  }, [id]); // 📌 Kjøres kun når id endres

  // 📌 Funksjon for å legge til/fjerne favoritter
  const toggleFavorite = () => {
    let savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!Array.isArray(savedFavorites)) {
      savedFavorites = []; // 📌 Sikrer at det er en array hvis dataen er korrupt
    }

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = savedFavorites.filter((favId) => favId !== id); // 📌 Fjerner retten fra favoritter
    } else {
      updatedFavorites = [...savedFavorites, id]; // 📌 Legger til retten i favoritter
    }

    // 📌 Lagre oppdatert favoritt-liste i localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite); // 📌 Oppdaterer state

    // 📌 Viser pop-up når retten legges til/fjernes fra favoritter
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // 📌 Skjuler pop-up etter 2 sekunder
  };

  return (
    <div className={`${styles.dishCard} ${isFavorite ? styles.favoriteDish : ""}`}>
      {/* 📌 Viser bilde av retten */}
      <img src={image} alt={title} className={styles.dishImage} />
      
      {/* 📌 Inneholder all informasjon om retten */}
      <div className={styles.dishInfo}>
        <h3 className={styles.dishName}>{title}</h3> {/* 📌 Navnet på retten */}
        <p className={styles.dishPrice}><strong>Price:</strong> {price}</p> {/* 📌 Prisvisning */}
        <p className={styles.dishIngredients}><strong>Ingredients:</strong> {ingredients}</p> {/* 📌 Ingredienser */}

        {/* 📌 Viser allergener hvis det finnes noen */}
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

        {/* 📌 Pop-up melding for favorittstatus */}
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
