import React, { useState } from "react";
import styles from "../assets/Header.module.css";
import failSound from "../assets/sounds/fail.mp3";
import shadowSound from "../assets/sounds/shadow.mp3";
import giveUpSound from "../assets/sounds/giveup.mp3";

function Header() {
  const [clickCounts, setClickCounts] = useState({
    about: 0,
    contact: 0,
    mystery: 0,
  });

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);

    if (soundFile.includes("giveup.mp3")) {
      audio.volume = 1.0; // 📌 Setter volumet til maks for 'GiveUp'
    } else {
      audio.volume = 0.5; // 📌 Standard volum for de andre lydene
    }

    audio.play();
  };

  const handleClick = (button) => {
    setClickCounts((prev) => {
      const newCount = prev[button] + 1;

      if (newCount % 2 === 0) { // 📌 Spill lyd kun på annenhver klikk
        if (button === "about") playSound(failSound);
        if (button === "contact") playSound(shadowSound);
        if (button === "mystery") playSound(giveUpSound);
      }

      return { ...prev, [button]: newCount };
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/images/logo1.webp" alt="Logo" className={styles.logo} />
        <span className={styles.logoText}>Nordlys Gastronomi</span>
      </div>

      <nav className={styles.nav}>
        <button
          onClick={() => handleClick("about")}
          className={clickCounts.about > 0 ? styles.loadingCursor : ""}
        >
          About Us
        </button>
        <button
          onClick={() => handleClick("contact")}
          className={clickCounts.contact > 0 ? styles.loadingCursor : ""}
        >
          Contact Us
        </button>
        <button
          onClick={() => handleClick("mystery")}
          className={clickCounts.mystery > 0 ? styles.loadingCursor : ""}
        >
          ?
        </button>
      </nav>
    </header>
  );
}

export default Header;
