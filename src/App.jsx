import styles from "./assets/App.module.css"; // 📌 Importerer globale stiler for appen
import Header from "./components/Header"; // 📌 Importerer Header-komponenten
import Hero from "./components/Hero"; // 📌 Importerer Hero-seksjonen (introduksjon)
import Menu from "./components/Menu"; // 📌 Importerer Meny-komponenten
import Footer from "./components/Footer"; // 📌 Importerer Footer-komponenten

// 📌 Hovedkomponenten for applikasjonen
function App() {
  return (
    <div className={styles.app}> {/* 📌 Hovedcontainer for hele applikasjonen */}
      <Header /> {/* 📌 Viser Header øverst på siden */}
      <Hero />   {/* 📌 Hero-seksjonen med introduksjon til restauranten */}
      <Menu />   {/* 📌 Meny-seksjonen som viser tilgjengelige retter */}
      <Footer /> {/* 📌 Footer-seksjonen med kontaktinformasjon */}
    </div>
  );
}

export default App; // 📌 Eksporterer hovedkomponenten for bruk i index.js
