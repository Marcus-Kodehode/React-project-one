import React, { useState } from "react";
import styles from "../assets/Menu.module.css"; // 📌 Importerer CSS-modulen for meny-styling
import menu from "../data/menu"; // 📌 Importerer menydataene fra en ekstern fil
import Dish from "./Dish"; // 📌 Importerer Dish-komponenten for å vise individuelle retter

// 📌 Hovedkomponent for menyen
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Alle"); // 📌 Holder på valgt kategori i state

  // 📌 Funksjon for å filtrere retter basert på valgt kategori
  const getFilteredDishes = (category) => {
    if (category === "Alle") {
      return menu; // 📌 Returnerer hele menyen hvis "Alle" er valgt
    }

    return Object.keys(menu).reduce((acc, key) => {
      if (
        (category === "Forretter" && key === "starters") ||
        (category === "Hovedretter" && key === "mainCourses") ||
        (category === "Desserter" && key === "desserts")
      ) {
        acc[key] = menu[key]; // 📌 Beholder kun retter i den valgte kategorien
      } else {
        acc[key] = []; // 📌 Setter tom array for å opprettholde layout
      }
      return acc;
    }, {});
  };

  const filteredMenu = getFilteredDishes(selectedCategory); // 📌 Henter filtrerte retter basert på valg

  return (
    <div className={styles.menuContainer}> {/* 📌 Hovedcontainer for menyen */}
      <h1 className={styles.menuTitle}>Nordlys Gastronomi - Meny</h1> {/* 📌 Hovedtittel */}

      {/* 📌 Filterknapper for å bytte mellom kategorier */}
      <div className={styles.filterButtons}>
        {["Alle", "Forretter", "Hovedretter", "Desserter"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? styles.activeFilter : ""} // 📌 Marker aktiv kategori
            onClick={() => setSelectedCategory(category)} // 📌 Oppdaterer valgt kategori ved klikk
          >
            {category}
          </button>
        ))}
      </div>

      {/* 📌 Løkke gjennom filtrerte retter, viser kun kategorier med innhold */}
      {Object.entries(filteredMenu).map(([categoryKey, dishes]) =>
        dishes.length > 0 ? ( // 📌 Viser kun kategorier som har retter
          <div key={categoryKey} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>
              {/* 📌 Konverterer engelske nøkkelverdier til norske kategorinavn */}
              {categoryKey === "starters"
                ? "Forretter"
                : categoryKey === "mainCourses"
                ? "Hovedretter"
                : "Desserter"}
            </h2>

            {/* 📌 Viser alle retter i den valgte kategorien */}
            <div className={styles.dishGrid}>
              {dishes.map((dish) => (
                <Dish
                  key={dish.id} // 📌 Unik nøkkel for hver rett
                  title={dish.title} // 📌 Sender rettens tittel
                  price={dish.price} // 📌 Sender rettens pris
                  ingredients={dish.ingredients} // 📌 Sender rettens ingredienser
                  allergens={dish.allergens} // 📌 Sender rettens allergener
                  image={dish.image} // 📌 Sender rettens bilde
                />
              ))}
            </div>
          </div>
        ) : null // 📌 Hvis kategorien ikke har retter, vises ingenting
      )}
    </div>
  );
}

export default Menu; // 📌 Eksporterer menykomponenten for bruk i andre filer
