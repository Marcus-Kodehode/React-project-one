import styles from "./assets/App.module.css";
import Header from "./components/Header"; // 📌 Importerer Header
import Footer from "./components/Footer"; // 📌 Importerer Footer
import Menu from "./components/Menu";

function App() {
  return (
    <div className={styles.app}>
      <Header /> {/* 📌 Legger til header øverst */}
      <Menu />   {/* 📌 Viser menyen */}
      <Footer /> {/* 📌 Legger til footer nederst */}
    </div>
  );
}

export default App;
