import React from "react";
import ReactDOM from "react-dom";
// Componente inicial.
import App from "./App";
// Importando estilos globales.
import "styles/common/api.css";
import "styles/common/app.css";

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);
