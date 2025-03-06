import React from "react";
import styles from "../assets/Footer.module.css"; // 📌 Importerer CSS-modulen for styling
import logo from "/images/logo1.webp"; // 📌 Importerer logo-bildet

// 📌 Footer-komponent som viser kontaktinformasjon og logo
function Footer() {
  return (
    <footer className={styles.footer}> {/* 📌 Hovedcontainer for footeren */}
      
      {/* 📌 Kontaktinfo på venstre side */}
      <div className={styles.contactInfo}>
        <p>📍 Nordlys Gastronomi</p> {/* 📌 Viser firmanavn og adresse */}
        <p>📞 +47 123 45 678</p> {/* 📌 Telefonnummer */}
        <p>✉️ contact@nordlysgastronomi.no</p> {/* 📌 E-postadresse */}
      </div>

      {/* 📌 Logo og trademark på høyre side */}
      <div className={styles.logoFooter}>
        <img src={logo} alt="Nordlys Gastronomi Logo" className={styles.footerLogo} /> {/* 📌 Viser logoen */}
        <p>© 2025 Nordlys Gastronomi. All rights reserved.</p> {/* 📌 Opphavsrett */}
      </div>

    </footer>
  );
}

export default Footer; // 📌 Eksporterer komponenten for bruk i andre filer
