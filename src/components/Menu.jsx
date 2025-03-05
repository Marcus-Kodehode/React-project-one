import React, { useState } from "react";
import styles from "../assets/Menu.module.css"; // 📌 Importerer CSS-modulen
import menu from "../data/menu"; // 📌 Importerer menydataene
import Dish from "./Dish"; // 📌 Importerer Dish-komponenten

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Alle"); // 📌 Holder på valgt kategori

  // 📌 Funksjon for å filtrere retter basert på kategori
  const getFilteredDishes = (category) => {
    if (category === "Alle") {
      return menu;
    }

    return Object.keys(menu).reduce((acc, key) => {
      if (
        (category === "Forretter" && key === "starters") ||
        (category === "Hovedretter" && key === "mainCourses") ||
        (category === "Desserter" && key === "desserts")
      ) {
        acc[key] = menu[key]; // 📌 Beholder kun den filtrerte kategorien
      } else {
        acc[key] = []; // 📌 Tom array for å beholde layouten
      }
      return acc;
    }, {});
  };

  const filteredMenu = getFilteredDishes(selectedCategory);

  return (
    <div className={styles.menuContainer}> {/* 📌 Hovedcontainer for menyen */}
      <h1 className={styles.menuTitle}>Nordlys Gastronomi - Meny</h1>

      {/* 📌 Filterknapper */}
      <div className={styles.filterButtons}>
        {["Alle", "Forretter", "Hovedretter", "Desserter"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? styles.activeFilter : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 📌 Menyinnholdet, beholder strukturen men skjuler tomme kategorier */}
      {Object.entries(filteredMenu).map(([categoryKey, dishes]) =>
        dishes.length > 0 ? (
          <div key={categoryKey} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>
              {categoryKey === "starters"
                ? "Forretter"
                : categoryKey === "mainCourses"
                ? "Hovedretter"
                : "Desserter"}
            </h2>

            <div className={styles.dishGrid}>
              {dishes.map((dish) => (
                <Dish
                  key={dish.id}
                  title={dish.title}
                  price={dish.price}
                  ingredients={dish.ingredients}
                  allergens={dish.allergens}
                  image={dish.image}
                />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Menu;
