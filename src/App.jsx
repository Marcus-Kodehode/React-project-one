import styles from "./assets/App.module.css";
import Header from "./components/Header"; // 📌 Importerer Header
import Hero from "./components/Hero"; // 📌 Importerer Hero-seksjonen
import Menu from "./components/Menu"; // 📌 Importerer Menyen
import Footer from "./components/Footer"; // 📌 Importerer Footer

function App() {
  return (
    <div className={styles.app}>
      <Header /> {/* 📌 Legger til header øverst */}
      <Hero />   {/* 📌 Hero-seksjonen med introduksjon til restauranten */}
      <Menu />   {/* 📌 Viser menyen */}
      <Footer /> {/* 📌 Legger til footer nederst */}
    </div>
  );
}

export default App;
