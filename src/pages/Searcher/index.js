// Importando referencias de react.
import React from "react";
// Importando componentes.
import Search from "components/Searcher/Search";
import Maps from "components/Searcher/Maps";
import Weather from "components/Searcher/Weather";
// Hoja de estilos.
import "styles/searcher.css";

export default function Searcher() {
   return (
      <form className="searcher-grid grid mleft-auto mright-auto mtop25">
         <Search />
         <Maps />
         <Weather />
      </form>
   );
}
