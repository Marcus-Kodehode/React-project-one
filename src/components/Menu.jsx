import React, { useState } from "react";
import styles from "../assets/Menu.module.css"; // 📌 Importerer CSS-modulen
import menu from "../data/menu"; // 📌 Importerer menydataene
import Dish from "./Dish"; // 📌 Importerer Dish-komponenten

function Menu() {
  // 📌 State for valgt kategori (standard = "Alle")
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  // 📌 Funksjon for å filtrere retter basert på kategori
  const filteredDishes =
    selectedCategory === "Alle"
      ? [...menu.starters, ...menu.mainCourses, ...menu.desserts]
      : menu[
          selectedCategory === "Forretter"
            ? "starters"
            : selectedCategory === "Hovedretter"
            ? "mainCourses"
            : "desserts"
        ] || [];

  return (
    <div className={styles.menuContainer}> {/* 📌 Hovedcontainer for menyen */}
      {/* 📌 Filtreringsknapper */}
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

      {/* 📌 Viser rettene i et grid-layout */}
      <div className={styles.dishGrid}>
        {filteredDishes.map((dish) => (
          <Dish
            key={dish.id}
            title={dish.title} // 📌 Endret fra name til title
            price={dish.price}
            ingredients={dish.ingredients} // 📌 Passer på at vi sender ingredienser
            allergens={dish.allergens}
            image={dish.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
