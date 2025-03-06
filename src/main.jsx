import React from "react"; // 📌 Importerer React-biblioteket
import { StrictMode } from "react"; // 📌 Importerer StrictMode for bedre feilhåndtering og varsler
import { createRoot } from "react-dom/client"; // 📌 Importerer createRoot for moderne React-rendering
import App from "./App"; // 📌 Importerer hovedkomponenten App

// 📌 Oppretter rot-elementet og renderer applikasjonen
createRoot(document.getElementById("root")).render(
  <StrictMode> {/* 📌 StrictMode hjelper med å fange opp potensielle feil i utviklingsmodus */}
    <App /> {/* 📌 Render hovedkomponenten App */}
  </StrictMode>
);
