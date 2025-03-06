import React, { useState } from "react";
import styles from "../assets/Header.module.css"; // 📌 Importerer CSS-modulen for styling
import failSound from "../assets/sounds/fail.mp3"; // 📌 Importerer lydfil for "About Us"-knappen
import shadowSound from "../assets/sounds/shadow.mp3"; // 📌 Importerer lydfil for "Contact Us"-knappen
import giveUpSound from "../assets/sounds/giveup.mp3"; // 📌 Importerer lydfil for "Mystery"-knappen

// 📌 Header-komponent som inneholder logo og navigasjonsknapper
function Header() {
  // 📌 State for å spore hvor mange ganger hver knapp har blitt klikket
  const [clickCounts, setClickCounts] = useState({
    about: 0,
    contact: 0,
    mystery: 0,
  });

  // 📌 Funksjon for å spille av lyd
  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);

    if (soundFile.includes("giveup.mp3")) {
      audio.volume = 1.0; // 📌 Setter volumet til maks for 'GiveUp' lyden
    } else {
      audio.volume = 0.5; // 📌 Standard volum for de andre lydene
    }

    audio.play(); // 📌 Spiller av lyden
  };

  // 📌 Håndterer klikk på knappene og spiller av lyd på annenhver klikk
  const handleClick = (button) => {
    setClickCounts((prev) => {
      const newCount = prev[button] + 1;

      if (newCount % 2 === 0) { // 📌 Spill lyd kun på annenhver klikk
        if (button === "about") playSound(failSound);
        if (button === "contact") playSound(shadowSound);
        if (button === "mystery") playSound(giveUpSound);
      }

      return { ...prev, [button]: newCount }; // 📌 Oppdaterer state med ny klikkverdi
    });
  };

  return (
    <header className={styles.header}> {/* 📌 Hovedcontainer for headeren */}
      
      {/* 📌 Logo og firmanavn */}
      <div className={styles.logoContainer}>
        <img src="/images/logo1.webp" alt="Logo" className={styles.logo} /> {/* 📌 Viser logo */}
        <span className={styles.logoText}>Nordlys Gastronomi</span> {/* 📌 Firmanavn ved siden av logoen */}
      </div>

      {/* 📌 Navigasjonsmeny */}
      <nav className={styles.nav}>
        {/* 📌 "About Us"-knapp */}
        <button
          onClick={() => handleClick("about")} // 📌 Håndterer klikk
          className={clickCounts.about > 0 ? styles.loadingCursor : ""} // 📌 Endrer musepeker ved første klikk
        >
          About Us
        </button>

        {/* 📌 "Contact Us"-knapp */}
        <button
          onClick={() => handleClick("contact")}
          className={clickCounts.contact > 0 ? styles.loadingCursor : ""}
        >
          Contact Us
        </button>

        {/* 📌 "Mystery"-knapp */}
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

export default Header; // 📌 Eksporterer Header-komponenten for bruk i andre filer
