// Importando referencias de react.
import React from "react";
// Impostando estilos.
import "styles/header.css";

// Inicializando react functional component.
export default function Header() {
   return (
      <header className="box-container flex flex-center">
         <label htmlFor="" className="title">React Weather Forecast by H Enterprise</label>
      </header>
   );
}
