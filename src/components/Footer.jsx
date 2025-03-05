import React from "react";
import styles from "../assets/Footer.module.css"; // 📌 Importerer CSS-modulen
import logo from "/images/logo1.webp"; // 📌 Importerer logoen

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* 📌 Kontaktinfo på venstre side */}
      <div className={styles.contactInfo}>
        <p>📍 Nordlys Gastronomi</p>
        <p>📞 +47 123 45 678</p>
        <p>✉️ contact@nordlysgastronomi.no</p>
      </div>

      {/* 📌 Logo og trademark på høyre side */}
      <div className={styles.logoFooter}>
        <img src={logo} alt="Nordlys Gastronomi Logo" className={styles.footerLogo} />
        <p>© 2025 Nordlys Gastronomi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
